import React from 'react';
import ReactDOM from 'react-dom';
import {isGithubUrl} from './gh.js';

class HomePage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      repo: '',
    };
  }
  
  visualize = () => {
    let repoUrl = this.state.repo;
    let isGithub = isGithubUrl(repoUrl);
  
    if (!isGithub) {
      // show error message and clear input!
      alert('not github');
    }
    else {
      alert('yes');
      // send GET request to gh-api and check existence
    }
  };

  updateRepo(evt) {
      this.setState({
        repo: evt.target.value
      });
  };

  render() {
    return (
    <div>
      <div class="page-container">
        <nav>
          <div class="mlh-logo-cont">
            <img src="img/mlhf-logo.png" id="mlhf-logo" alt="mlh fellowship logo" />
          </div>
          <span class="fshp-logo-txt"> 
             <span style={{color: "#913BA7"}}>MLH</span> 
              <br/> 
              <span style={{color: "#FF8A00"}}>Fellowship</span>
          </span>
        </nav>
          <div class="repo-input-container">
            <div class="header-container">
              <div id="branch-logo-cont">
                <img src="img/merge.png" alt="branch logo" id="branch-logo" />
              </div>
              <span class="gt-header" id="header-git">git</span>
              <span class="gt-header" id="header-story">Story</span>
              <span>
                <img src="img/file.png" alt="file logo" id="file-logo" />
              </span>
            </div>
            <div id="subtitle-cont">
              <span>Empowering Visualization</span>
            </div>
            <div class="input-holder">
              <input id="inp-repo-url" type="text" placeholder="ex: https://github.com/reactjs" onChange={evt => this.updateRepo(evt)} />
              <input type="submit" id="btn-submit-url" value="Visualize" onClick={this.visualize} />
            </div>
          </div>
      </div>
        <footer class="footer-container">
          <hr id="footer-hr" />
            <span class="footer-txt"> aak mlh team © 2021 | </span>
            <i class="fa fa-github" id="gh-icon"></i>
            <a href="https://github.com/Nuage21/gitstory" id="gh-link"> gitStory on Github! </a>
        </footer>
    </div>
    );
  }
}

export default HomePage;