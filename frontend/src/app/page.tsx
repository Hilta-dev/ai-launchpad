"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("Loading...");

  //call backend part
  useEffect(() => {
    fetch("http://localhost:4000/api/health")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Could not reach the backend"));
  }, []);

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">AI Launchpad</h1>
      <p className="mt-4">{message}</p>
    </main>
  );
}