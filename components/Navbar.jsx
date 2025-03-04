import Link from "next/link";
import { FaPlus } from "react-icons/fa";
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-black px-8 py-5 shadow-2xl rounded-xl mt-10">
      <Link className="text-white hover:text-slate-200 font-bold" href={"/"}>
        iCon
      </Link>
      <Link className="bg-white hover:bg-slate-200 p-2 rounded-2xl" href={"/addTopic"}>
        < FaPlus />
      </Link>
    </nav>
  );
}
