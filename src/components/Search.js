import React, { useContext, useState } from 'react';
import { AlertContext } from '../context/alert/alertContext';
import GithubContext from '../context/github/githubContext';


const Search = () => {
  const alert = useContext(AlertContext);
  const github = useContext(GithubContext);

  const [value, setValue] = useState('');
  const onSubmitHandler = (event) => {
    if (event.key !== 'Enter') {
      return;
    }

    github.clearUsers();

    if (value.trim()) {
      // get data
      alert.hide();
      github.search(value.trim());
    } else {
      alert.show('Please enter correct value');
    }
  };
  return (
    <div className="formGroup">
      <input
        type="text"
        className="form-control"
        placeholder="Please enter Github name"
        onKeyPress={onSubmitHandler}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
};
export default Search;
