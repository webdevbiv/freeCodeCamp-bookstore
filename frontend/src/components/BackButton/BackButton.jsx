import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
const BackButton = ({ destination = "/" }) => {
  return (
    <div className='flex'>
      <Link
        to={destination}
        className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg w-fit'
      >
        <BsArrowLeft className='text-white h-10 w-10' />
      </Link>
    </div>
  );
};

BackButton.propTypes = {
  destination: PropTypes.string,
};

export default BackButton;
