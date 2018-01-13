import React, { Component } from 'react';
import getGithub from './api';
import Card from './Card';

class RepoList extends Component {
  constructor(props) {
    super(props)
    this.state = { username: this.props.username,
                   repoData: [] }
   }

   connectionSuccess(res) {
       this.setState({
           repoData: res
       })
   }

   getRepoData() {
       let repos = (this.props.username + '/repos');
       getGithub(repos)
       .then((res) => this.connectionSuccess(res))
       .catch((error) =>
           console.error(error));
   }

   componentDidMount() {
   	 this.getRepoData()
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
