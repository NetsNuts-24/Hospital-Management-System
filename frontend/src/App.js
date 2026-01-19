import React, { useEffect, useState } from "react";

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api/users").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    ).catch(err => console.error(err));
  }, [])

  return (
    <div>
      {(typeof backendData === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        backendData.map(user => (
          <div key={user.id} style={{ border: "1px solid #ccc", margin: "8px", padding: "8px" }}>
            <p><b>Name:</b> {user.name}</p>
            <p><b>Email:</b> {user.email}</p>
            <p><b>Phone:</b> {user.phone}</p>
            <p><b>Role:</b> {user.role}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default App