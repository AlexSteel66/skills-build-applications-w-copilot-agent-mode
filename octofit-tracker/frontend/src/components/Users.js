import React, { useEffect, useState } from 'react';
import { getApiBaseUrl, normalizeResponse } from '../api';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const endpoint = `${getApiBaseUrl()}/users/`;
    console.log('Users endpoint:', endpoint);

    fetch(endpoint)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch users: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        const list = normalizeResponse(data);
        console.log('Users data:', data);
        setUsers(list);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="container mt-3">
      <h3>Users</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Display Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.display_name || user.username || ''}</td>
              <td>{user.email || ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
