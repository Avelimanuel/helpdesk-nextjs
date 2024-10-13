import Link from "next/link";

//function will fetch projects data from the json file that we created.
const fetchProjects = async () => {
    // Imitate delay
    await new Promise(resolve=>setTimeout(resolve,3000))
  try {
    const res = await fetch("http://localhost:4000/projects", {
      next: {
        revalidate: 0,
      },
    });
    return res.json();
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch projects" });
  }
};

const Projectlist = async () => {
  const projects = await fetchProjects();
  return (
    <>
      {projects.map((project) => (
        <div key={project.id} className="card my-5">
          <h3 className="text-2xl">{project.title}</h3>
          <p>{project.description}</p>
          <p>
            <span className="font-bold text-black">Technologies</span>:
            {project.technologies}
          </p>
          <span>{project.date}</span>
          <Link href={`/projects/${project.id}`}><button className="bg-green-300 font-bold text-blue-500">Learn More</button></Link>
        </div>
      ))}
      {projects.length === 0 && (
        <p className="text-center text-red-500">No Projects Found</p>
      )}
    </>
  );
};

export default Projectlist;
