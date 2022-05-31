import './Pagination.scss';

const Pagination = ({ totalPosts, postsPerPage, updateOffset }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {pageNumbers.map((number, i) => {
        return (
          <button
            key={number}
            onClick={() => {
              updateOffset(number * postsPerPage - postsPerPage);
            }}
          >
            {number}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
