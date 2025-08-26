"use client";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const {pending} = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-white text-pink-500 px-4 py-2 rounded hover:bg-pink-100 cursor-pointer my-3 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? "Adding..." : "Add Product"}
    </button>
  );
}