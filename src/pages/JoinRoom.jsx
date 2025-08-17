import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import './JoinRoom.css';

const JoinRoom = () => {
  const [roomId, setRoomId] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => { 
    const trimmedRoomId = roomId.trim();
    if (trimmedRoomId) {
      navigate(`/room/${trimmedRoomId}`);
    } else {
      alert("Please enter a room ID");
    }
  };

  return (
    <div className="join-container">
      <div className="join-card">
        <h1>Video Conferencing 3D</h1>
        <input
          type="text"
          placeholder="Enter Room ID"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
        />
        <button onClick={handleSubmit}>JOIN NOW</button>
      </div>
    </div>
  );
};

export default JoinRoom;
