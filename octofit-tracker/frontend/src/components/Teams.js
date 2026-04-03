import React, { useEffect, useState } from 'react';
import { getApiBaseUrl, normalizeResponse } from '../api';

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const endpoint = `${getApiBaseUrl()}/teams/`;
    console.log('Teams endpoint:', endpoint);

    fetch(endpoint)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch teams: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        const list = normalizeResponse(data);
        console.log('Teams data:', data);
        setTeams(list);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading teams...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="container mt-3">
      <h3>Teams</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Leader</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team.id}>
              <td>{team.id}</td>
              <td>{team.name}</td>
              <td>{team.leader}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Teams;
