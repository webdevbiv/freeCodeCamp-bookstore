import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton/BackButton";
import Spinner from "../components/Spinner/Spinner";
import { useSnackbar } from "notistack";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://localhost:3001/books/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setAuthor(res.data.author);
        setPublishYear(res.data.publishYear);
        enqueueSnackbar("Book fetched successfully", { variant: "success" });

        setIsLoading(false);
      })
      .catch(() => {
        enqueueSnackbar("Failed to fetch book", { variant: "error" });
        setIsLoading(false);
      });
  }, [id, setIsLoading, enqueueSnackbar]);

  const handleEditBook = () => {
    const newBook = {
      title,
      author,
      publishYear,
    };
    setIsLoading(true);
    axios
      .put(`http://localhost:3001/books/${id}`, newBook)
      .then(() => {
        setIsLoading(false);
        navigate("/");
      })
      .catch(() => {
        enqueueSnackbar("Failed to create book", { variant: "error" });
        setIsLoading(false);
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Edit Book</h1>
      {isLoading ? <Spinner /> : ""}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Author</label>
          <input
            type='text'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
          <input
            type='text'
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <button
          onClick={handleEditBook}
          className='p-2 bg-sky-300 m-8'
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditBook;
