import classes from './Footer.module.css';

const Footer = () => {
  return (
    <div className={classes['footer-container']}>
        <div className={classes['footer-inner-container']}>
            <div className={classes['footer-top']}>
                <div className={classes['individual-item']}>
                    Aujourd'hui Journeys Limited
                </div>
                <div className={classes['individual-item']}>
                    CALL US
                </div>
                <div className={classes['individual-item']}>
                    EMAIL US
                </div>
            </div>
            <div className={classes['footer-middle']}>
                <div className={classes['individual-item']}>
                    FACEBOOK
                </div>
                <div className={classes['individual-item']}>
                    INSTAGRAM
                </div>
                <div className={classes['individual-item']}>
                    LINKEDIN
                </div>
                <div className={classes['individual-item']}>
                    TWITTER
                </div>
            </div>
            <div className={classes['footer-bottom']}>
                <div className={classes['bottom-group']}>
                    <div>
                        Careers
                    </div>
                    <div>
                        Privacy Policy
                    </div>
                    <div>
                        Terms
                    </div>
                </div>
                <div>
                    2024 Aujourd'hui Journeys. All rights reserved.
                </div>
            </div>
        </div>
    </div>
  );
}

export default Footer;