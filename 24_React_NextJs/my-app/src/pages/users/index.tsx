import Link from "next/link";
import { useState } from "react";

type Props = {
  users: any;
  error: string;
};

export default function UsersPage({ users, error }: Props) {
  const [userState, setUserState] = useState(users);
  if (error) {
    return <h1>Ошибка {error}</h1>;
  }

  async function onUserAdd() {
    const fakeUser = {
      id: 10,
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      email: "Rey.Padberg@karina.biz",
      address: {
        street: "Kattie Turnpike",
        suite: "Suite 198",
        city: "Lebsackbury",
        zipcode: "31428-2261",
        geo: {
          lat: "-38.2386",
          lng: "57.2232",
        },
      },
      phone: "024-648-3804",
      website: "ambrose.net",
      company: {
        name: "Hoeger LLC",
        catchPhrase: "Centralized empowering task-force",
        bs: "target end-to-end models",
      },
    };

    const response = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      body: JSON.stringify(fakeUser),
    });
    const usetsWithAddedUser = await response.json();

    setUserState(usetsWithAddedUser);
  }
  return (
    <div>
      {/* <Link href={`/users/petya`}>Link to petya page</Link> */}
      {userState.map((user: any) => {
        return (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        );
      })}
      <button onClick={onUserAdd}>Добавить пользователя</button>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    // const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // локальное использование через api-users
    const response = await fetch("http://localhost:3000/api/users");
    const users = await response.json();
    return {
      props: {
        users,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        error: true,
      },
    };
  }
}
