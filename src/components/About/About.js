import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { Octokit } from '@octokit/rest';

import styles from './About.module.css';

const octokit = new Octokit();

class About extends React.Component {
  state = {
    isLoading: true,
    isError: false,
    error: '',
    repoList: [],
    userData: []
  }

  componentDidMount() {
    octokit.repos.listForUser({
      username: 'ladariugina'
    }).then(({ data }) => {
        console.log(data);
        this.setState({
          repoList: data,
          isLoading: false
        });
    })
    .catch(err => {
      this.setState({
        error: 'Ошибка',
        isError: true,
        isLoading: false
      });
    });

    octokit.users.getByUsername({
      username: 'ladariugina'
    })
    .then(({ data }) => {
      console.log(data);
      this.setState({
        userData: data,
        isLoading: false
      });
    })
    .catch(err => {
      this.setState({
        error: 'Ошибка',
        isError: true,
        isLoading: false
      });
    });
  };

  render() {
    const { isLoading, isError, repoList, userData, error } = this.state;

    return (
      <div className={styles.wrap}>
        <h2>{isError ? error : 'Обо мне:'} </h2>
        <div className={styles.info}>
          {<img src={userData.avatar_url} className={styles.img}/>}
          {<p className={styles.bio}>
            {userData.name}<br></br>{userData.bio}
          </p>}

        </div>
        <h2>{ isLoading ? <CircularProgress /> : 'Список репозиториев:' } </h2>
        {!isLoading && <div>
          {isError ? error : repoList.map(repo => (<a key={repo.id} href={repo.html_url} className={styles.name}>
            {repo.name} 
          </a>))}
        </div>}
      </div>
    )
  }
}
export default About;