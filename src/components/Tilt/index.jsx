import React, { useLayoutEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import P from 'prop-types';

export const Tilt = (props) => {
  const { children, options, ...rest } = props;
  const tilt = useRef(null);

  useLayoutEffect(() => {
    VanillaTilt.init(tilt.current, options);
    return () => {
      tilt.vanillaTilt.destroy();
    };
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
