import Users from "@/components/Users";
import React from "react";
import fetchUsers from './api/UserApi'


async function HomePage() {
  const users = await fetchUsers;
  return (
    <div>
      <h1>Lista de usuarios</h1>
      <Users  users ={users}/>
    </div>
  );
}

export default HomePage;
