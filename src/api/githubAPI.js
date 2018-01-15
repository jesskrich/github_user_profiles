const root_url = 'https://api.github.com/users/';

export const getGithub = (url) => {
  return fetch(root_url + url)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      else {
        return Promise.reject('Network failure.')
      }
    })
}
