import { forwardRef } from "react";
import classes from './About.module.css';
import Button from '../../../components/Button';

const About = (props, ref) => {
  return (
    <div className={classes['about-me-container']} ref={ref}> 
      <h3>Hi, my name is <span>Jeffrey Ugarte</span></h3>
      <p>I am a frontend developer who enjoys building <span>modern</span> user interfaces with <span>React</span></p>
      <Button text="Get in touch"/>
    </div>
  );
}

export default forwardRef(About);