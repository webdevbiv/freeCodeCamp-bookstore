import PropTypes from "prop-types";
import { AiOutlineClose, AiOutlineEdit } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { PiBookOpenTextLight } from "react-icons/pi";
import { Link } from "react-router-dom";
const BookModal = ({ book, onClose }) => {
  return (
    <div
      onClick={onClose}
      className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative'
      >
        <AiOutlineClose
          className=' absolute right-6 top-6 text-3xl text-red-600 cursor-pointer'
          onClick={onClose}
        />
        <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg'>
          {book.publishYear}
        </h2>
        <h4 className='my-2 text-gray-500'>{book._id}</h4>
        <div className='flex justify-start items-center gap-x-2'>
          <PiBookOpenTextLight className='text-red-300 text-2xl' />
          <h2 className='my-1 '>{book.title}</h2>
        </div>
        <div className='flex justify-start items-center gap-x-2'>
          <BiUserCircle className='text-red-300 text-2xl' />
          <h2 className='my-1 '>{book.author}</h2>
        </div>
        <div className=' w-fit flex justify-between items-center gap-x-2 mt-4 p-4'>
          <Link to={`/books/details/${book._id}`}>
            <BsInfoCircle className='text-2xl text-green-800 hover:text-black' />
          </Link>
          <Link to={`/books/edit/${book._id}`}>
            <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black' />
          </Link>
          <Link to={`/books/delete/${book._id}`}>
            <MdOutlineDelete className='text-2xl text-red-600 hover:text-black' />
          </Link>
        </div>
      </div>
    </div>
  );
};

BookModal.propTypes = {
  book: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default BookModal;
