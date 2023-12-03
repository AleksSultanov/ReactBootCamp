import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export function User() {
  const params = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then((response) => response.json())
      .then((userData) => {
        setUser(userData);
      });
  }, []);

  return (
    <>
      <h1>User page</h1>
      {user && (
        <>
          <p>{user.name}</p>
        </>
      )}
    </>
  );
}
