export function isGithubUrl(str) {

  let pattern1 = new RegExp('^(https://)?' + // protocol
    '(www[.])?' + // 3w ?
    '(github.com/)' + // github
    '([a-zA-Z0-9_-]+)/' + // repo owner
    '([a-zA-Z0-9_-]+)/*$', 'i'); // repo name


  let pattern2 = new RegExp('^(www[.])?' + // 3w ?
    '(github.com/)' + // github
    '([a-zA-Z0-9_-]+)/' + // repo owner
    '([a-zA-Z0-9_-]+)/*$', 'i'); // repo name


  let pattern3 = new RegExp('^(github.com/)' + // github
    '([a-zA-Z0-9_-]+)/' + // repo owner
    '([a-zA-Z0-9_-]+)/*$', 'i'); // repo name

  return pattern1.test(str) || pattern2.test(str) || pattern3.test(str);
}