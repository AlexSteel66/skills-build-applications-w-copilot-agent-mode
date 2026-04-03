import React, { useEffect, useState } from 'react';
import { getApiBaseUrl, normalizeResponse } from '../api';

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const endpoint = `${getApiBaseUrl()}/workouts/`;
    console.log('Workouts endpoint:', endpoint);

    fetch(endpoint)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch workouts: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        const list = normalizeResponse(data);
        console.log('Workouts data:', data);
        setWorkouts(list);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading workouts...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="container mt-3">
      <h3>Workouts</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Difficulty</th>
            <th>Duration (min)</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map((w) => (
            <tr key={w.id}>
              <td>{w.id}</td>
              <td>{w.name}</td>
              <td>{w.difficulty}</td>
              <td>{w.duration_minutes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Workouts;
