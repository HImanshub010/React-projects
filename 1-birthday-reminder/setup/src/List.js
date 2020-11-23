import React from 'react';

const List = ({id, name, image, age}) => {
  return (
    <article className='person'>
      <img src={image} alt={name}/>
      <div>
  <h3>{name}</h3>
  <p>{age}</p>
      </div>
    </article>
  );
};

export default List;
