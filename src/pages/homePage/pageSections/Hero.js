import classes from './Hero.module.css';


const Hero = () => {
  return (
    <div className={classes['text-container']}>
        <div className={classes['text-1']}>modern uis</div>
        <div className={classes['text-2']}>that</div>
        <div className={classes['text-3']}>convert</div>
        <div className={classes['text-4']}>visitors into</div>
        <div className={classes['text-5']}>customers</div>
    </div>
  );
}

export default Hero;