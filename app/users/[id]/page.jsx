async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  console.log(data);
  return data.data;
}

async function Users({ params }) {
  const user = await getUser(params.id);

  return (
    <>
      <h1>User Details</h1>
      <div>
      <h3>{user.first_name} {user.last_name}</h3>
        <img src={user.avatar} alt="" />
        <div>
          
          <p>Email: {user.email}</p>
        </div>
      </div>
    </>
  );
}

export default Users;
