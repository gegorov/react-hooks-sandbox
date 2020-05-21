import React, { useContext } from 'react';

import Search from '../components/Search';
import Card from '../components/Card';
import Loader from '../components/Loader';
import GithubContext from '../context/github/githubContext';

const Home = () => {
  const { loading, users } = useContext(GithubContext);

  return (
    <>
      <Search />
      {loading
        ? <Loader />
        : (
          <div className="row pt-4">
            {users.map((user) => (
              <div className="col-sm-4 mb-4" key={user.id}>
                <Card user={user} />
              </div>
            ))}
          </div>
        )}
    </>
  );
};

export default Home;
