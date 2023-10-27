import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import Spinner from "../components/Spinner/Spinner";
import BooksTable from "../components/home/BooksTable";
import BooksCard from "../components/home/BooksCard";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showTye, setShowType] = useState("table");

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:3001/books/")
      .then((res) => {
        setBooks(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [setIsLoading]);

  return (
    <div className='p-4'>
      <div className='flex justify-center items-center gap-x-4'>
        <button
          onClick={() => setShowType("table")}
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
        >
          Table
        </button>
        <button
          onClick={() => setShowType("card")}
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
        >
          Card
        </button>
      </div>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Books List</h1>
        <Link to='/books/create'>
          <MdOutlineAddBox className='h-10 w-10 text-blue-500' />
        </Link>
      </div>
      {isLoading ? (
        <Spinner />
      ) : showTye === "table" ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;
