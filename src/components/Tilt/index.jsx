import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import P from 'prop-types';

export const Tilt = (props) => {
  const { children, options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return (
    <div ref={tilt} {...rest}>
      {children}
    </div>
  );
};

Tilt.propTypes = {
  options: P.object,
  children: P.object,
};
