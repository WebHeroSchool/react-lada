import React, { useContext } from 'react';
import { CircularProgress } from '@material-ui/core';
import { Octokit } from '@octokit/rest';

import styles from './About.module.css';

import arroba from'./img/arroba.svg';
import telegram from './img/telegram.svg';
import frame from './img/Frame.svg';

import classnames from 'classnames';

const octokit = new Octokit();

class About extends React.Component {
  state = {
    isLoading: true,
    isLoadingName: true,
    isError: false,
    repoList: [],
    userData: []
  }

  componentDidMount() {
    octokit.repos.listForUser({
      username: 'ladariugina'
    }).then(({ data }) => {
        this.setState({
          repoList: data,
          isLoading: false
        });
        console.log(data);
    })
    .catch(err => {
      this.setState({
        error: 'Что-то пошло не так...',
        isError: true,
        isLoading: false
      });
    });

    octokit.users.getByUsername({
      username: 'ladariugina'
    })
    .then(({ data }) => {
      this.setState({
        userData: data,
        isLoadingName: false
      });
    })
    .catch(err => {
      this.setState({
        error: 'Ошибка',
        isError: true,
        isLoadingName: false
      });
    });
  };


  render() {
    const { isLoading, isLoadingName, isError, repoList, userData, languageLogo} = this.state;

    return (
      <div className={styles.wrap}>
        {isLoadingName ? <div className={styles.preloader}> </div> :
        <div className={styles.info}>
          <img src={userData.avatar_url} className={styles.img}/>
          <div>
            <p className={styles.title}> {userData.name} </p>
            <p className={styles.subtitle}> {userData.bio} </p>
            <div className={styles.contacts}>
              <img src={arroba}/>
              <p className={styles.contact}>Ladu3112@gmail.com</p>
            </div>
            <div className={styles.phone}>
              <img src={telegram}/>
              <p className={styles.contact}>+7-963-731-43-20</p>
            </div>
          </div>
          <div className={styles.link}>
            <a href={userData.html_url} className={styles.github}></a>
            <a href='#' className={styles.linkedin}></a>
            <a href='#' className={styles.facebook}></a>
            <a href='#' className={styles.vk}></a>
          </div>
        </div>}
        { isLoading ? <div className={styles.preloader}> </div> :
          <div className={styles.repos_wrap}>
            <p className={styles.repos_title}>Репозитории на github.com</p>
            { isError ? 
              <div className={styles.error}>
                <img src={frame}/>
                <p className={styles.text}>Что-то пошло не так...</p>
                <p className={styles.text__help}>Попробуйте <a href='#'>загрузить</a> ещё раз</p>
              </div> :
              <div className={styles.repositories}>
                { (repoList.length > 0) ? 
                (repoList.map(repo => (<a key={repo.id} href={repo.html_url} className={styles.repositories__name}>
                  {repo.name} 
                    <div className={styles.repositories__info}>
                      <span key={repo.id} className = {classnames({
                        [styles.language]: true,
                        [styles.info__logo_html]: repo.language === 'HTML',
                        [styles.info__logo_css]: repo.language === 'CSS',
                        [styles.info__logo_js]: repo.language === 'JavaScript'
                        })}> 
                        {repo.language} 
                      </span>
                      <span className={styles.info__star} key={repo.id}>{repo.stargazers_count}</span>
                      <span className={styles.info__fork} key={repo.id}>{repo.forks}</span>
                      <span key={repo.id}>{repo.updated_at}</span>
                    </div>
                  </a>))) :
                <div className={styles.reposNone}>
                <img src={frame}/>
                <p className={styles.text}>Репозитории отсутствуют</p>
                <div className={styles.reposNoneAdd}>
                  <p className={styles.text__help}>Добавьте как минимум один репозиторий на <a href='https://github.com/'>github.com</a></p>
                </div>
                </div>
                }
              </div>
            }
          </div>
        }
      </div>
    )
  }
}
export default About;