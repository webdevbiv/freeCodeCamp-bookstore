import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import BackButton from "../../components/BackButton/BackButton";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://localhost:3001/books/${id}`)
      .then((res) => {
        setBook(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [setIsLoading, id]);

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Show Book</h1>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-lg w-fit p-4'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Id</span>
            <span>{book._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Title</span>
            <span>{book.title}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Author</span>
            <span>{book.author}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Publish Year</span>
            <span>{book.publishYear}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Create Time</span>
            <span>{new Date(book.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Last Update Time</span>
            <span>{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
