import classes from './Hero.module.css';

const Hero = () => {
  return (
    <div className={classes['main-container']}>
        <div className={`${classes['text-type-1']} ${classes['text-1']}`}>modern uis</div>
        <div className={`${classes['text-type-2']} ${classes['text-2']}`}>that</div>
        <div className={`${classes['text-type-2']} ${classes['text-3']}`}>convert</div>
        <div className={`${classes['text-type-1']} ${classes['text-4']}`}>visitors into</div>
        <div className={`${classes['text-type-2']} ${classes['text-5']}`}>customers</div>
    </div>
  );
}

export default Hero;