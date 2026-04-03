import React, { useEffect, useState } from 'react';
import { getApiBaseUrl, normalizeResponse } from '../api';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const endpoint = `${getApiBaseUrl()}/activities/`;
    console.log('Activities endpoint:', endpoint);

    fetch(endpoint)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch activities: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        const list = normalizeResponse(data);
        console.log('Activities data:', data);
        setActivities(list);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading activities...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="container mt-3">
      <h3>Activities</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Duration (min)</th>
            <th>Distance (km)</th>
            <th>Calories</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity) => (
            <tr key={activity.id}>
              <td>{activity.id}</td>
              <td>{activity.activity_type}</td>
              <td>{activity.duration_minutes}</td>
              <td>{activity.distance_km}</td>
              <td>{activity.calories_burned}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Activities;
