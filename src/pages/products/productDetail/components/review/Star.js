import './Star.scss';

const Star = ({ star, id, handleStarClicked }) => {
  return (
    <i
      className={'fa-solid fa-star ' + (star[id] ? 'yellow' : '')}
      id={id}
      onClick={e => {
        handleStarClicked(e);
      }}
    />
  );
};

export default Star;
