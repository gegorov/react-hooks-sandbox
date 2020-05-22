import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GithubContext from '../context/github/githubContext';
import Loader from '../components/Loader';
import Repos from '../components/Repos';

const Profile = ({ match }) => {
  const {
    getUser, getRepos, user, loading, repos,
  } = useContext(GithubContext);
  const urlName = match.params.name;

  useEffect(() => {
    getUser(urlName);
    getRepos(urlName);
    console.log('Effect!');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Loader />;
  }
  const {
    name,
    company,
    avatar_url: avatarUrl,
    location,
    bio,
    blog,
    login,
    html_url: htmlUrl,
    followers,
    public_repos: publicRepos,
    public_gists: publicGists,
    following,
  } = user;
  return (
    <>
      <Link to="/" className="btn btn-link">Back</Link>
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center">
              <img
                src={avatarUrl}
                alt={name}
                style={{ width: 150 }}
              />
              <h1>{name}</h1>
              {location && (
              <p>
                Location:
                {' '}
                {location}
              </p>
              )}
            </div>
            <div className="col">
              {
                bio && (
                <div>
                  <h3>BIO</h3>
                  <p>{bio}</p>
                </div>
                )
              }
              <a
                href={htmlUrl}
                className="btn btn-dark"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Profile
              </a>
              <ul>
                {login && (
                <li>
                  <strong>Username</strong>
                  {' '}
                  {login}
                </li>
                )}
                {company && (
                <li>
                  <strong>Company</strong>
                  {' '}
                  {company}
                </li>
                )}
                {blog && (
                <li>
                  <strong>Website</strong>
                  {' '}
                  <a
                    href={blog}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {blog}
                  </a>
                </li>
                )}
              </ul>
              <div className="badge badge-primary">
                Followers:
                {' '}
                {followers}
              </div>
              <div className="badge badge-success">
                Following:
                {' '}
                {following}
              </div>
              <div className="badge badge-info">
                Public Repos:
                {' '}
                {publicRepos}
              </div>
              <div className="badge badge-dark">
                Public Gists:
                {' '}
                {publicGists}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Repos repos={repos} />
    </>
  );
};

export default Profile;
