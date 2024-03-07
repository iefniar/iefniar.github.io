import { forwardRef } from "react";

const About = (props, ref) => {
  return (
    <div ref={ref}> hello about over here </div>
  );
}

export default forwardRef(About);