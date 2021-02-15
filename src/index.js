import React from 'react';
import ReactDOM from 'react-dom';

function isGithubUrl(str) {
  
  let pattern1 = new RegExp('^(https://)?'+ // protocol
    '(www[.])?'+ // 3w ?
    '(github.com/)'+ // github
    '([a-zA-Z0-9_-]+)/'+ // repo owner
    '([a-zA-Z0-9_-]+)/*$','i'); // repo name


  let pattern2 = new RegExp('^(www[.])?'+ // 3w ?
    '(github.com/)'+ // github
    '([a-zA-Z0-9_-]+)/'+ // repo owner
    '([a-zA-Z0-9_-]+)/*$','i'); // repo name

  
  let pattern3 = new RegExp('^(github.com/)'+ // github
    '([a-zA-Z0-9_-]+)/'+ // repo owner
    '([a-zA-Z0-9_-]+)/*$','i'); // repo name

  return pattern1.test(str) || pattern2.test(str) || pattern3.test(str);
}

// set Visualize Button 
let visualizeButton = document.getElementById('btn-submit-url');
visualizeButton.onclick =  () => {
    let repoUrl = document.getElementById('inp-repo-url').value; // get repo url
    let isGithub = isGithubUrl(repoUrl);

    if(!isGithub)
    {
        // show error message and clear input!
    }
    else
    {
        // send GET request to gh-api and check existence
    }
};