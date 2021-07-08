export const loadUsers = async () => {
  const usersResponse = await fetch('http://localhost:8000/users');
  const users = await usersResponse.json();

  return users;
};
