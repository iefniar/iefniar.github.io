import { forwardRef } from 'react';
import { Link } from 'react-router-dom';

const Profile = (props, ref) => {
  return (
    <>
      <div ref={ref}> hello profile over here </div>
      <div style={{width:'100%', height: '500px', backgroundColor: 'teal'}}>
        <button>
          <Link to='/project-1'>Explore project 1</Link>
        </button>
      </div>
    </>
  );
}

export default forwardRef(Profile);