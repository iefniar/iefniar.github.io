import classes from './Canvas.module.css';
import { useEffect, useRef, useState } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useOrientation from '../../../hooks/use-orientation';

let firstLoadCanvas = true;

const Canvas = () => {
    gsap.registerPlugin(ScrollTrigger);
    const [images, setImages] = useState([]); 
    const canvasRef = useRef(null); 
    let context = null; 
    const videoFrames = { frame: 0 };
    const framesCount = 96;

    const deviceOrientation = useOrientation();
    const landscapeImages = []; 
    const portraitImages = []; 

    for (let index = 1; index <= framesCount; index++) {
        const landscapeImageHTMLElement = new Image();
        landscapeImageHTMLElement.src = `/optimized-images/ecommerce/models/women/image-sequence/landscape/img-${index}.webp`;
        landscapeImages.push(landscapeImageHTMLElement);

        const portraitImageHTMLElement = new Image();
        portraitImageHTMLElement.src = `/optimized-images/ecommerce/models/women/image-sequence/portrait/img-${index}.webp`;
        portraitImages.push(portraitImageHTMLElement);
    }

    useEffect(() => {
        while(portraitImages.length !== framesCount || landscapeImages.length !== framesCount){
            firstLoadCanvas = !firstLoadCanvas;
            return;
        }

        if(portraitImages.length === framesCount && landscapeImages.length === framesCount){
            if(deviceOrientation === 'portrait'){
                setImages(portraitImages);
                console.log(`portrait orientation; images length: ${images.length}`);
                firstLoadCanvas = 'null';
            }
            else if(deviceOrientation === 'landscape'){
                setImages(landscapeImages);
                console.log(`landscape orientation; images length: ${images.length}`);
                firstLoadCanvas = 'null';
            }       
        }

        return () => {
            firstLoadCanvas = true;
        }
    }, [deviceOrientation, firstLoadCanvas]);

    useEffect(() => {
        if(firstLoadCanvas === 'null'){
            const render = () => {
                if(context && canvasRef.current){
                    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
                    context.drawImage(landscapeImages[videoFrames.frame], 0, 0); 
                }  
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

            let tl = gsap.timeline({
                scrollTrigger: {
                trigger: "#canvasContainer",
                start: "top top",
                end: "+=3000",
                scrub: 0.2,
                snap: {
                    snapTo: 'labels', 
                    duration: { min: 0.2, max: 3 }, 
                    delay: 0.2, 
                    ease: 'power1.inOut' 
                }
                }
            });

            tl.addLabel('start')
            .from('#canvasH1First', { opacity: 0, delay: 1 })
            .addLabel('h1FirstMiddle')
            .to('#canvasH1First', { opacity: 1, duration: 1 })
            .addLabel('h1FirstUp')
            .to('#canvasH1First', { top: '40%', opacity: 0, duration: 0.5 })
            .addLabel('h1SecondStart')
            .from('#canvasH1Second', { opacity: 0, delay: 1 })
            .addLabel('h1SecondMiddle')
            .to('#canvasH1Second', { opacity: 1, duration: 1 })
            .addLabel('h1SecondUp')
            .to('#canvasH1Second', { top: '40%', opacity: 0, duration: 0.5 })
            .addLabel('h1ThirdStart')
            .from('#canvasH1Third', { opacity: 0, delay: 1 })
            .addLabel('h1ThirdMiddle')
            .to('#canvasH1Third', { opacity: 1, duration: 1 })
            .addLabel('h1ThirdUp')
            .to('#canvasH1Third', { top: '40%', opacity: 0, duration: 0.5 })
            .addLabel('end');
        }

    }, [firstLoadCanvas]);
       
    return (
        <div className={classes['canvas-container']} id='canvasContainer'>
            <div className={classes['canvas-section']} id='canvasSection'>
                <canvas ref={canvasRef} />
                <div className={classes['scroll-down-container']}>
                    <div className={classes['scroll-down-inner-container']}>
                        <div className={classes['scroll-down']} />
                        <h4>Scroll <br></br> <span>Down</span></h4>
                    </div>   
                </div>
            </div>
            <div className={classes['text-section']}>
                <h1 id='canvasH1First'>Find your signature style</h1>
                <h1 id='canvasH1Second'>Beyond the trend</h1>
                <h1 id='canvasH1Third'>Get inspired</h1>
            </div>
        </div>
    );
}

export default Canvas;