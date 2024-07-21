import { Button } from "../ui/button";

const Pagination = ({ currentPage, totalCount, pageSize, onPageChange }) => {
  const totalPages = Math.ceil(totalCount / pageSize);

  return (
    <div className="flex justify-center space-x-2 mt-4">
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="bg-gray-400 hover:bg-gray-800 transition-colors"
      >
        Previous
      </Button>
      {[...Array(totalPages)].map((_, index) => (
        <Button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`px-4 py-2 ${index + 1 === currentPage ? 'bg-indigo-500 text-white' : 'bg-gray-400 hover:bg-gray-800'} transition-colors`}
        >
          {index + 1}
        </Button>
      ))}
      <Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="bg-gray-400 hover:bg-gray-800 transition-colors"
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
