import './Star.scss';

const ReviewedStar = ({ id, reviewedStarState }) => {
  return (
    <i
      className={'fa-solid fa-star ' + (reviewedStarState[id] ? 'primary' : '')}
    />
  );
};

export default ReviewedStar;
