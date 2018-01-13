
const getGithub = (params) => {
    const url = `https://api.github.com/users/${params}`;
        return fetch(url)
            .then((res) => res.json())
}

// fetch('https://api.github.com/users/chrissycoyier/repos')
//   .then(response => {
//     if (response.ok) {
//       return response.json()
//     } else {
//       return Promise.reject('something went wrong!')
//     }
//   })
//   .then(data => console.log('data is', data))
//   .catch(error => console.log('error is', error));

export default getGithub;
// console.log(github('jesskrich'));

// in badge File
//
// fetchUserData(params) {
//     console.log(params, github)
//   github(params)
//     .then((data) => {
//       const userData = data.json();
//       this.setState({
//         userData
//       });
//     })
//     .catch(error => this.setState({ requestFailed: true }));
