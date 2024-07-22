import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

export default function Home() {

  return (
    <>
       <h1 className="text-center underline uppercase">Todo app</h1>
       <div className="mt-5 container w-[90%] md:w-[70%] mx-auto">
        <button className="rounded w-[100%] uppercase bg-green-600 text-white text-xl font-bold py-3 px-4">add new task +</button>
        <div className="rounded bg-gray-200 py-3 px-3 mt-2 flex md:flex justify-between">
          <div className="uppercase">Task</div>
          <div className="upperces">Action</div>
        </div>
        <br />
        <div className="rounded py-3 px-3 flex md:flex justify-between">
          <div>
            <p>I will code</p>
          </div>
          <div className="flex gap-2">
            <FaEdit size={18} color="blue" className="cursor-pointer"/>
            <FaTrash size={18} color="red" className="cursor-pointer"/>
          </div>
        </div>
       </div>
    </>
  );
}
