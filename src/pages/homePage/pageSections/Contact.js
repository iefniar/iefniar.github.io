import { forwardRef } from 'react';

const Contact = (props, ref) => {
  return (
    <div ref={ref}> hello contact over here </div>
  );
}

export default forwardRef(Contact);