import Image from "next/image";
import Link from "next/link";
import mypic from './profilepic.jpg'

const Navbar = () => {
  return (
    <div className="">
      <nav >
        <Image src={mypic} width={70} quality={100} alt="profilepic" placeholder="blur" className="rounded-full"/>
        <Link href="/">Dashboard</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/projects/create">Add project</Link>
      </nav>
    </div>
  );
};

export default Navbar;
