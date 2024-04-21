import classes from './VideoPlayer.module.css'
import { useState, useRef, useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const VideoPlayer = ({ videoSrc, loop, initialStyle, animateStyle, transition }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [scrollDirection, setScrollDirection] = useState(null); // Track scroll direction
    const { ref, inView } = useInView({ threshold: 0.5 }); // Observe 50% visibility
  
    const previousScrollY = useRef(window.scrollY); // Use useRef outside handleScroll
  
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > previousScrollY.current ? 'down' : 'up';
      setScrollDirection(direction);
      previousScrollY.current = currentScrollY; // Update for next scroll event
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll); // Remove listener on unmount
      };
    }, []); // Empty dependency array to run only once
  
    useEffect(() => {
        if (inView) {
          if (scrollDirection === 'down') {
            // Play video forwards when scrolling down
            videoRef.current.play().catch(() => {
              console.warn('Video autoplay prevented. Consider user interaction to initiate playback.');
            });
            setIsPlaying(true);
          } else if (scrollDirection === 'up') {
            try {
              // Attempt to play video backwards
              videoRef.current.playbackRate = -1;
              videoRef.current.play().catch(() => {
                console.warn('Video playback backwards not supported. Playing forwards instead.');
              });
            } catch (error) {
              // Handle error (playbackRate not supported)
              console.warn('Error setting playback rate:', error);
              // Fallback: Play the video forwards from the start on scroll up
              videoRef.current.currentTime = 0; // Reset video position
              videoRef.current.play().catch(() => {
                console.warn('Video autoplay prevented. Consider user interaction to initiate playback.');
              });
            }
            setIsPlaying(true);
          }
        } else {
          // Pause video when it leaves the viewport
          videoRef.current.pause();
          setIsPlaying(false);
          videoRef.current.playbackRate = 1; // Reset playbackRate to normal
        }
      }, [inView, scrollDirection, videoRef]);
      
    
    return (
      <motion.div ref={ref} className={classes['video-player']} animate={isPlaying ? animateStyle : initialStyle} transition={transition}>
        <video ref={videoRef} src={videoSrc} loop={loop} muted autoPlay playsInline />
      </motion.div>
    );
  };

export default VideoPlayer;