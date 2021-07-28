import React, { createContext, useContext, useState } from 'react';
import P from 'prop-types';

export const PlayerPosition = createContext({
  playerAreaPosition: 'default',
  setPlayerAreaPosition: () => {},
});

export function usePlayerPosition() {
  return useContext(PlayerPosition);
}

export const PlayerPositionProvider = ({ children }) => {
  const [playerAreaPosition, setPlayerAreaPosition] = useState('default');
  return (
    <PlayerPosition.Provider value={{ playerAreaPosition, setPlayerAreaPosition }}>
      {children}
    </PlayerPosition.Provider>
  );
};

PlayerPositionProvider.propTypes = {
  children: P.string,
};
