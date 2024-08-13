import React, { useState, useEffect } from "react";
import axios from "axios";

const TasksList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(
          "https://springbootapp-b4b7gyg5bygcg5bp.southindia-01.azurewebsites.net/api/tasks"
        );
        setTasks(response.data);
      } catch (err) {
        console.error("Error fetching tasks:", err);
        setError("Failed to fetch tasks");
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  if (loading) return <p>Loading tasks...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Tasks List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.task_id}>{task.task_name}</li> // Adjusted property names
        ))}
      </ul>
    </div>
  );
};

export default TasksList;
