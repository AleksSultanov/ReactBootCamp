export async function usersLoader() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();

  return { users };
}
