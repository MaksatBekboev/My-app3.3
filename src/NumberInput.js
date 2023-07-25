import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNumber, clearList } from './actions';

const NumberInput = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddNumber = () => {
    if (!isNaN(inputValue) && inputValue !== '') {
      dispatch(addNumber(parseFloat(inputValue)));
      setInputValue('');
    }
  };

  const handleClearList = () => {
    setInputValue('');
    dispatch(clearList());
  };

  return (
    <div>
      <input type="number" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddNumber}>Add</button>
      <button onClick={handleClearList}>Clear</button>
    </div>
  );
};

export default NumberInput;