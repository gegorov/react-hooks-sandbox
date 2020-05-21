import React, { useContext } from 'react';
import { AlertContext } from '../context/alert/alertContext';


const Search = () => {
  const { show } = useContext(AlertContext);
  const onSubmitHandler = (event) => {
    if (event.key === 'Enter') {
      show('this is alert', 'warning');
    }
  };
  return (
    <div className="formGroup">
      <input
        type="text"
        className="form-control"
        placeholder="Please enter Github name"
        onKeyPress={onSubmitHandler}
      />
    </div>
  );
};
export default Search;
