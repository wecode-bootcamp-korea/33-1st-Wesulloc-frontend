import React from 'react';

const SlideItems = ({ data }) => {
  const { id, name, content } = data;

  return (
    <li className="slideItem" key={id}>
      <div className="slideImageBox" />
      <div className="slideTextBox">
        <p className="slideName">{name}</p>
        <p className="slideContent">{content}</p>
      </div>
    </li>
  );
};

export default SlideItems;
