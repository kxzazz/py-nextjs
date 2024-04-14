'use client';
import { useState } from 'react';
export default function Home() {
  const [jq, setJq] = useState({});
  const makeApiCall = async () => {
    const resp = await fetch('/api/python');
    setJq(resp.json());
  };

  return (
    <>
      <button onClick={makeApiCall}>make call</button>
      <div>{JSON.stringify(jq)}</div>
    </>
  );
}
