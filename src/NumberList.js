import React from 'react';
import { useSelector } from 'react-redux';

const NumberList = () => {
  const numbers = useSelector((state) => state.list);

  return (
    <ul>
      {numbers.map((number, index) => (
        <li key={index}>{number}</li>
      ))}
    </ul>
  );
};

export default NumberList;