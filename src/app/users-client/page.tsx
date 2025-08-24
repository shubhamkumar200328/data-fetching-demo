"use client";

import { useEffect, useState } from "react";

type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    phone:string,
    address:{
        city:string,
    },
    company:{
        name:string,
    },
};

export default function UsersClient() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/users"
                );
                if (!response.ok) throw new Error("Failed to fetch users");
                const data = await response.json();
                setUsers(data);
            } catch (err) {
                if (err instanceof Error){
                    setError(err.message);
                } else {
                    setError("An unknown error occured");
                }
            } finally {
                setLoading(false);
            }
        }
        fetchUsers();
    }, []);
    
    if (loading) return <div>Loading...</div>
    if (error) return <div>{error}</div>

    return (
        <div className="m-15 p-3 bg-black text-center">
  <ul className="flex flex-wrap gap-4 m-auto">
    {users.map((user) => (
      <li
        key={user.id}
        className="w-64 bg-white shadow-md rounded-lg p-4 text-gray-700"
      >
        <div className="font-bold text-gray-900">{user.name}</div>
        <div className="text-sm mt-2 space-y-1">
          <div>Username: {user.username}</div>
          <div>Email: {user.email}</div>
          <div>Phone: {user.phone}</div>
          <div>City: {user.address.city}</div>
          <div>Company: {user.company.name}</div>
        </div>
      </li>
    ))}
  </ul>
</div>

    )
}