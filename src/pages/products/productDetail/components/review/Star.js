import { useState } from 'react';
import './Star.scss';

const Star = ({ star, id, handleStarClicked }) => {
  // const [star, setStar] = useState([false, false, false, false, false]);

  // let starArr = [0, 1, 2, 3, 4];

  // const handleStarClicked = e => {
  //   console.log(typeof e.target.id);
  //   let id = parseInt(e.target.id);
  //   let clicked = [...star];
  //   clicked.fill(true, 0, id + 1);
  //   setStar(clicked);
  // };

  // console.log(star);

  return (
    // <div>
    //   {starArr.map((el, i) => {
    //     return (
    //       <i
    //         className="fa-solid fa-star"
    //         key={i}
    //         id={el}
    //         onClick={e => {
    //           handleStarClicked(e);
    //         }}
    //       />
    //     );
    //   })}
    // </div>

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
