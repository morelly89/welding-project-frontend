import { useEffect, useState } from "react";
import "./MyRequests.css";

function MyRequests() {
  const [projectRequests, setProjectRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("jwt");

    fetch("http://localhost:3001/api/project-requests", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((data) => {
            throw new Error(data.message || "Unable to load requests.");
          });
        }

        return res.json();
      })
      .then((data) => {
        setProjectRequests(data);
      })
      .catch((err) => {
        console.error(err);
        setError("Unable to load your project requests.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleDelete = async (requestId) => {
    const token = localStorage.getItem("jwt");

    try {
      const response = await fetch(
        `http://localhost:3001/api/project-requests/${requestId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to cancel request.");
      }

      setProjectRequests((requests) =>
        requests.filter((request) => request._id !== requestId),
      );
    } catch (error) {
      console.error(error);
      setError("Unable to cancel this project request.");
    }
  };

  return (
    <section className="my-requests">
      <h1 className="my-requests__title">My Project Requests</h1>

      {isLoading && <p>Loading requests...</p>}

      {error && <p>{error}</p>}

      {!isLoading && !error && projectRequests.length === 0 && (
        <p>You currently have no project requests.</p>
      )}

      {!isLoading &&
        !error &&
        projectRequests.map((request) => (
          <article className="my-requests__card" key={request._id}>
            <h2>{request.projectType || "Project Request"}</h2>

            <p>
              <strong>Material:</strong> {request.material || "Not specified"}
            </p>

            <p>
              <strong>Description:</strong> {request.description}
            </p>

            <p>
              <strong>Submitted:</strong>{" "}
              {new Date(request.createdAt).toLocaleDateString()}
            </p>
            <button
              className="my-requests__delete-button"
              onClick={() => handleDelete(request._id)}
            >
              Cancel Request
            </button>
          </article>
        ))}
    </section>
  );
}

export default MyRequests;
