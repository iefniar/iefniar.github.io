import { forwardRef } from 'react';
import classes from './Contact.module.css';
import GmailIcon from '../../../icons/basil_gmail-outline.svg';
import LinkedinIcon from '../../../icons/mingcute_linkedin-fill.svg';
import GitHubIcon from '../../../icons/ri_github-fill.svg';

const Contact = (props, ref) => {
  const handleClick = () => {
    window.location.href = `mailto:fejeffrey.uv@gmail.com?subject=Your%20Subject%20Here&body=Your%20Pre-filled%20Email%20Body`;
  };

  return (
    <div ref={ref} className={classes['contact-container']}>
      <div className={`${classes['text-type-1']} ${classes['text-1']}`}>contact</div>
      <div className={`${classes['text-type-2']} ${classes['text-2']}`}>me</div>
      <div className={classes['icons-group']}>
        <div className={`${classes['social-icon']} ${classes['first-icon']}`}>
          <button onClick={handleClick}>
            <img src={GmailIcon} alt='gmail icon' />
            <h4>Send me an email</h4>
          </button>
        </div>
        <div className={`${classes['social-icon']} ${classes['second-icon']}`}>
          <a href="https://www.linkedin.com/in/jeffreyuv" target="_blank" rel="noopener noreferrer">
            <img src={LinkedinIcon} alt='linkedin icon' />
            <h4>Connect with me on LI</h4>
          </a>
        </div>
        <div className={`${classes['social-icon']} ${classes['third-icon']}`}>
          <a href="https://github.com/iefniar" target="_blank" rel="noopener noreferrer">
            <img src={GitHubIcon} alt='github icon' />
            <h4>Find my code on GitHub</h4>
          </a>
        </div>
      </div>
      <div className={`${classes['text-type-3']} ${classes['text-3']}`}>All rights reserved. 2024</div>
    </div>
  );
}

export default forwardRef(Contact);