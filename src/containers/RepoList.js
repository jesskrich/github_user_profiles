import React, { Component } from 'react';
import { getGithub } from '../api/githubAPI';
import Card from '../components/Card';

class RepoList extends Component {

  constructor(props) {
    super(props)
      this.state = {
        username: this.props.username,
        repoData: []
      }
  }

  componentWillMount() {
    let repos = (this.props.username + '/repos');
    getGithub(repos)
      .then(data => this.setState({
        repoData: data
      }))
   }

  render() {
    if (this.props.publicRepos === 0)
      return <p>No public repos available.</p>
    let items = this.state.repoData
    return (
      <ul>
        {items.map(item =>
          <li key={item.id}>
            <Card item={item} />
          </li>)}
      </ul>
    )
  }

}

export default RepoList;
