import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import classes from './Profile.module.css';


const Profile = (props, ref) => {
  return (
    <div className={classes['profile-container']} ref={ref}>
      <div className={classes['profile-content']}>
        <h2>Profile</h2>
        <p>
          Web developer with experience in React.js, Redux, Express.js and MongoDB. My main focus is on frontend development for the implementation of modern, efficient and attractive user interfaces, applying responsive design principles and agile methodologies.
        </p>
      </div>
      
      <Link to='/project-1'>Explore project 1</Link>
    </div>
  );
}

export default forwardRef(Profile);