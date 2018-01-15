import React, { Component } from 'react';
import Badge from './Badge';
import '../App.css';
import GithubLogo from '../img/github_icon.png';

class Search extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      clicked: false,
      sendData: false,
      showRepos: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  resetForm() {
    this.setState({
      username: '',
      sendData: false,
      showRepos: false})
  }

  handleChange(event) {
    this.setState({
      username: event.target.value
    })
  }

  handleSubmit(event) {
    this.setState({
      clicked: true,
      sendData: true,
      showRepos: false })
    event.preventDefault();
  }

  renderUserInfo() {
    return <Badge
              username={this.state.username}
              resetForm={this.resetForm}
              sendData={this.state.sendData}
            />
  }

  render() {
    return (
      <div>
        <header>
          <img src={GithubLogo} style={{height: 50}} />
          <h2>Find a Github User</h2>
            <form onSubmit={this.handleSubmit}>
              <label>
                <input type="text"
                       username={this.state.username}
                       value={this.state.username}
                       onChange={this.handleChange} />
              </label>
                <input type="submit" value="Submit" />
            </form>
        </header>
        {this.state.clicked && this.renderUserInfo()}
      </div>
    )
  }
}

export default Search;
