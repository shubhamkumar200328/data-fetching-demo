"use client";
import { useEffect } from "react";

export default function ErrorPage({ error }: { error: Error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-2xl text-red-500">Error fetching users data:</div>
      <div className="text-red-400 mt-2">{error.message}</div>
      <button
        onClick={() => window.location.reload()}
        className="mt-6 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded"
      >
        Retry
      </button>
    </div>
  );
}
