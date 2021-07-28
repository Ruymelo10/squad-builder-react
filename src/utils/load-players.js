export const loadPlayers = async () => {
  const playersResponse = await fetch('http://localhost:8000/players');
  const players = await playersResponse.json();

  return players;
};
