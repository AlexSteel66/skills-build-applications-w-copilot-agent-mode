import React, { useEffect, useState } from 'react';
import { getApiBaseUrl, normalizeResponse } from '../api';

const Leaderboard = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const endpoint = `${getApiBaseUrl()}/activities/`;
    console.log('Leaderboard endpoint (activities):', endpoint);

    fetch(endpoint)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch activities: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        const list = normalizeResponse(data);
        console.log('Leaderboard activities:', data);
        setActivities(list);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading leaderboard...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  const sorted = [...activities].sort((a, b) => (b.calories_burned || 0) - (a.calories_burned || 0));

  return (
    <div className="container mt-3">
      <h3>Leaderboard</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Activity</th>
            <th>User</th>
            <th>Calories</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((activity, index) => (
            <tr key={activity.id || index}>
              <td>{index + 1}</td>
              <td>{activity.activity_type}</td>
              <td>{activity.user || activity.profile || 'anonymous'}</td>
              <td>{activity.calories_burned}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
