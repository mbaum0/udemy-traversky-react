import React from 'react';
import { RepoItem } from './RepoItem';
import GithubContext from '../../context/github/githubContext';
import { useContext } from 'react';

export const Repos = () => {
  const githubContext = useContext(GithubContext);
  return githubContext.repos.map((repo) => (
    <RepoItem repo={repo} key={repo.id} />
  ));
};
export default Repos;
