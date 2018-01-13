// import fetch from 'fetch';
const api = {
    github() {
        const url = `https://api.github.com/users/jesskrich`;
            return fetch(url).then((res) => res.json());
    }
};

export default api;
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
}
