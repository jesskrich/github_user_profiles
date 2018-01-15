import React, { Component } from 'react';
import RepoList from './RepoList';
import { getGithub } from '../api/githubAPI';

class Badge extends Component {

  constructor(props) {
    super(props)
      this.state = {
        username: this.props.username,
        showRepos: this.props.showRepos,
        userData: [],
        error: false
      }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.sendData) {
      this.setState({
        userData: [],
        showRepos: false,
        username: this.props.username,
        error: false
      })
      this.getUserData()
    }
  }

  getUserData() {
    getGithub(this.props.username)
      .then(data => this.setState({
        userData: data,
        error: false
      }))
      .catch(this.setState({
        error: true
      }))
    this.props.resetForm()
  }

  componentWillMount() {
    this.getUserData()
  }

  renderRepos() {
    if (this.state.showRepos)
      return <RepoList
                username={this.state.username}
                resetForm={this.props.resetForm}
                publicRepos={this.state.userData.public_repos}
            />
  }

  render() {
    if (this.state.error)
      return <p>Please enter a valid user.</p>
    if (!this.state.userData)
      return <p>Loading</p>
    return (
     	<div style={{marginTop: 20}}>
        <img src={this.state.userData.avatar_url}
             style={{height: 100, borderRadius: '50%'}} />
        <h3 style={{marginBottom:0}}>{this.state.userData.name}</h3>
        <div className="social">
          <h5>Followers: {this.state.userData.followers}</h5>
          <h5>Following: {this.state.userData.following}</h5>
        </div>
        <button onClick={() => {this.setState({showRepos: true})}}>
          Repos
        </button>
        {this.renderRepos()}
      </div>
    )
  }
}

export default Badge;
