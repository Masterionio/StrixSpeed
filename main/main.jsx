import React, { useState } from 'react';

export default function StrixDebugger() {
  const [status, setStatus] = useState("Idle");

  const handleBoostCheck = () => {
    setStatus("Running Boost...");
    console.log("🚀 Boost logic dispatched.");
    // Future: Call API or backend service
  };

  const handleDefendCheck = () => {
    setStatus("Scanning Defender...");
    console.log("🛡️ Defender logic triggered.");
  };

  return (
    <div>
      <h2>StrixSpeed Debug Console</h2>
      <p>Status: {status}</p>
      <button onClick={handleBoostCheck}>Run Boost</button>
      <button onClick={handleDefendCheck}>Run Defender</button>
    </div>
  );
}
