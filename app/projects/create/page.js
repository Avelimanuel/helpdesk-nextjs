"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const AddProject = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [loading, setLoading] = useState(false);

  //A function to handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const project = { title, description, technologies };
      const res = await  fetch(`db.json`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(project),
      });

      if (res.status === 201) {
        router.push("/projects");
      }
    } catch (error) {

    }
  };
  return (
    <main>
      <h2 className="text-center text-2xl">Add a new project</h2>
      <form onSubmit={handleSubmit} className="w-1/2">
        <label>Title</label>
        <input
          type="text"
          value={title}
          required
          className="rounded-lg"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Description</label>
        <input
          type="text"
          value={description}
          required
          className="rounded-lg"
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Technologies</label>
        <input
          type="text"
          value={technologies}
          required
          className="rounded-lg"
          onChange={(e) => setTechnologies(e.target.value)}
        />
        <button
          className="bg-blue-500 rounded-lg text-white"
          disabled={loading}
        >
          {loading && <span>Please wait...</span>}
          {!loading && <span>Submit</span>}
        </button>
      </form>
    </main>
  );
};

export default AddProject;
