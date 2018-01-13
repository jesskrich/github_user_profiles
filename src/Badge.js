import React, { Component } from 'react';
import RepoList from './RepoList';
import getGithub from './api';



class Badge extends Component {
  constructor(props) {
    super(props)
    this.state = { username: this.props.username,
    			   showRepos: this.props.showRepos,
                   userData: [],
                   requestFailed: false
                }

  }

  componentWillReceiveProps(nextProps){

    if(nextProps.sendData) {
      this.setState({
        userData: [],
        showRepos: false,
        username: this.props.username,
        requestFailed: false
      })
      this.getUserData()
    }
  }

  connectionSuccess(res) {
      this.setState({
          userData: res
      })
  }

  getUserData() {
      getGithub(this.props.username)
      .then((res) => this.connectionSuccess(res))
      .catch((error) =>
          console.error(error));
      this.props.resetForm()
  }

  componentDidMount() {
      this.getUserData()
  }
  renderRepos() {
  	if (this.state.showRepos === true)
    	return <RepoList username={this.state.username}
                         resetForm={this.props.resetForm}
                         publicRepos={this.state.userData.public_repos} />
  }

  render() {
  	// if (this.state.requestFailed)
  	// 	return <p>Please enter a valid user.</p>
    // if (!this.state.userData) return <p>Loading...</p>
        if (!this.state.userData) return <p>Loading</p>
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
