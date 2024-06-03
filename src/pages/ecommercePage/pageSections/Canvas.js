import classes from './Canvas.module.css';
import { useEffect, useRef, useState } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useOrientation from '../../../hooks/use-orientation';

let firstLoad = true;

const Canvas = () => {
    gsap.registerPlugin(ScrollTrigger);
    const deviceOrientation = useOrientation();
    const landscapeImages = []; 
    const portraitImages = []; 
    const [images, setImages] = useState([]); 
    const canvasRef = useRef(null); 
    let context = null; 
    const videoFrames = { frame: 0 };
    const framesCount = 97;

    useEffect(() => {
        while(portraitImages.length !== framesCount || landscapeImages.length !== framesCount){
            firstLoad = !firstLoad;
            return;
        }

        if(portraitImages.length === framesCount && landscapeImages.length === framesCount){
            if(deviceOrientation === 'portrait'){
                setImages(portraitImages);
                console.log(`portrait orientation; images length: ${images.length}`);
                firstLoad = null;
            }
            else if(deviceOrientation === 'landscape'){
                setImages(landscapeImages);
                console.log(`landscape orientation; images length: ${images.length}`);
                firstLoad = null;
            }       
        }
    }, [deviceOrientation, firstLoad]);

    
    for (let index = 1; index <= framesCount; index++) {
        const landscapeImageHTMLElement = new Image();
        landscapeImageHTMLElement.src = `/optimized-images/ecommerce/models/women/image-sequence/landscape/img-${index}.webp`;
        landscapeImages.push(landscapeImageHTMLElement);

        const portraitImageHTMLElement = new Image();
        portraitImageHTMLElement.src = `/optimized-images/ecommerce/models/women/image-sequence/portrait/img-${index}.webp`;
        portraitImages.push(portraitImageHTMLElement);
    }
    

    /*
    useEffect(() => {
        const render = () => {
            if(deviceOrientation === 'portrait'){
                context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
                context.drawImage(portraitImages[videoFrames.frame], 0, 0);
            }
            else if(deviceOrientation === 'landscape'){
                context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
                context.drawImage(landscapeImages[videoFrames.frame], 0, 0);
            }  
        }

        if(deviceOrientation === 'portrait'){
            if(canvasRef.current && portraitImages.length === framesCount) {
                context = canvasRef.current.getContext("2d");
                context.canvas.width = '1080';
                context.canvas.height = '1920';
                context.drawImage(portraitImages[0], 0, 0, canvasRef.current.width, canvasRef.current.height);
            }
        }
        else if(deviceOrientation === 'landscape'){
            if(canvasRef.current && landscapeImages.length === framesCount) {
                context = canvasRef.current.getContext("2d");
                context.canvas.width = '1920';
                context.canvas.height = '1080';
                context.drawImage(landscapeImages[0], 0, 0, canvasRef.current.width, canvasRef.current.height);
            }
        }

        gsap.to(videoFrames, {
          frame: framesCount - 1,
          duration: 1,
          snap: "frame",
          ease: "none",
          scrollTrigger: {
            trigger: "#canvasContainer",
            start: "top top",
            end: "+=3000",
            pin: true,
            scrub: 0.5
          },
          onUpdate: render 
    });

    }, [deviceOrientation]);
    */
    

    
    useEffect(() => {
        if(firstLoad === null){
            const render = () => {
                context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
                context.drawImage(landscapeImages[videoFrames.frame], 0, 0);    
            }
    
            if(canvasRef.current && landscapeImages.length === framesCount) {
                context = canvasRef.current.getContext("2d");
                context.canvas.width = '1920';
                context.canvas.height = '1080';
                context.drawImage(landscapeImages[0], 0, 0, canvasRef.current.width, canvasRef.current.height);
            }
    
            gsap.to(videoFrames, {
                frame: framesCount - 1,
                duration: 1,
                snap: "frame",
                ease: "none",
                scrollTrigger: {
                  trigger: "#canvasContainer",
                  start: "top top",
                  end: "+=3000",
                  pin: true,
                  scrub: 0.5
                },
                onUpdate: render 
          });
        }  
    }, [firstLoad]);

   
    return (
        <div className={classes['canvas-container']} id='canvasContainer'>
            <canvas ref={canvasRef} />
            <div className={classes['scroll-down-container']}>
                <div className={classes['scroll-down-inner-container']}>
                    <div className={classes['scroll-down']} />
                    <h4>Scroll <br></br> <span>Down</span></h4>
                </div>   
            </div>
        </div>
    );
}

export default Canvas;