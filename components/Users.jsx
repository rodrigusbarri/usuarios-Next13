"use client";
import { useRouter } from "next/navigation";

export default function Users({ users }) {
  const router = useRouter();

  return (
    <ul className="list-group">
      {users.map((user) => (
        <li
          style={{ cursor: "pointer" }}
          key={user.id}
          className="list-group-item d-flex justify-content-between aling-tems-center list-group-item-action"
          onClick={() => {
            router.push(`/users/${user.id}`);
          }}
        >
          <div>
            <h5>
              {user.first_name}
              {user.last_name}
            </h5>

            <p>{user.email}</p>
          </div>
          <img 
          src={user.avatar}
          alt={user.email}
          style={{width: '80px', borderRadius: '80%'
          }}
          />
        </li>
      ))}
    </ul>
  );
}
