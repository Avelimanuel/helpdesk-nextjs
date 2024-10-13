const ProjectDetails = async ({ params }) => {
  const id = params.id;
  await new Promise(resolve=>setTimeout(resolve,3000))
  const res = await fetch(`db.json/${id}`, {
    next: {
      revalidate: 0,
    },
  });
  if (!res.ok) {
    return (
      <main>
        <h1>Failed to fetch project</h1>
        
      </main>
    );
    
  }

  const project = await res.json();

  return (
    <main>
      <nav>
        <h2>Project Details</h2>
      </nav>
      <div className="card">
        <h3>{project.title}</h3>
        <h3>{project.description}</h3>
        <h3>{project.technologies}</h3>
      </div>
    </main>
  );
};

export default ProjectDetails;
