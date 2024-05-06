import classes from './Footer.module.css';
import { FacebookOutlined, Instagram, LinkedIn, Twitter } from '@mui/icons-material';

const Footer = () => {
  return (
    <div className={classes.container}>
        <div className={classes['upper-section']}>
            <div className={classes.column}>
                <h4>Company</h4>
                <h4>About</h4>
                <h4>Careers</h4>
                <h4>Purpose</h4>
            </div>
            <div className={classes.column}>
                <h4>Help</h4>
                <h4>Frequently asked questions</h4>
                <h4>Contact us</h4>
            </div>
            <div className={classes['social-icons']}>
                <span><FacebookOutlined /></span>
                <span><Instagram /></span>
                <span><Twitter /></span>
                <span><LinkedIn /></span>
            </div>
        </div>
        <div className={classes['bottom-section']}>
            <h5><span>&copy;</span> 2024 Company Name, Inc. All Rights Reserved</h5>
        </div>
    </div>
  )
}

export default Footer;