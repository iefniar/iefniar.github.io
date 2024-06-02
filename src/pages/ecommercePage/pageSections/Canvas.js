import classes from './Canvas.module.css';
import { useEffect, useRef, useState } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Canvas = () => {
    const images = []; 
    const canvasRef = useRef(null); 
    let context = null; 
    gsap.registerPlugin(ScrollTrigger);
    const videoFrames = { frame: 0 };
    const framesCount = 97;

    for (let index = 1; index <= framesCount; index++) {
        const imageHTMLElement = new Image();
        imageHTMLElement.src = `/optimized-images/ecommerce/models/women/image-sequence/img-${index}.png`;
        images.push(imageHTMLElement);
    }
    
    useEffect(() => {
        const render = () => {
            context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
            context.drawImage(images[videoFrames.frame], 0, 0);
        }
        
        if(canvasRef.current && images.length !== 0) {
            context = canvasRef.current.getContext("2d");
            context.canvas.width = '1920';
            context.canvas.height = '1080';
            context.drawImage(images[0], 0, 0, canvasRef.current.width, canvasRef.current.height);
        }

        gsap.to(videoFrames, {
          frame: framesCount - 1,
          duration: 1,
          snap: "frame",
          ease: "none",
          scrollTrigger: {
            scrub: 0.5
          },
          onUpdate: render 
    });

    }, []);
   
    return (
        <div className={classes['canvas-container']}>
            <canvas ref={canvasRef} />
        </div>
    );
}

export default Canvas;