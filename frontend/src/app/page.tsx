"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [status, setStatus] = useState("Testando...");

  useEffect(() => {
    fetch("http://localhost:3001")
      .then((res) => res.json())
      .then((data) => setStatus(data.message))
      .catch(() => setStatus("Erro na conexão"));
  }, []);

  return (
    <div>
      <h1>Case Rubix</h1>
      <p>Status: {status}</p>
    </div>
  );
}
