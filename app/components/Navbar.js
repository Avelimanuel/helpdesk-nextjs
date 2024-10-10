import Link from "next/link";

const Navbar = () => {
  return (
    <div className="">
      <nav className="flex items-start justify-start gap-5">
        <Link href="/">Dashboard</Link>
        <Link href="/tickets">Tickets</Link>
      </nav>
    </div>
  );
};

export default Navbar;
