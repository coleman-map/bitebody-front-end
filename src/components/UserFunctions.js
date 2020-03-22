import axios from 'axios'

axios.defaults.baseURL = 'https://gentle-inlet-25364.herokuapp.com'

export const register = newUser => {
  return axios
    .post('users', {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const login = user => {
  return axios
    .post('users/login', { 
      email: user.email,
      password: user.password
    })
    .then(response => {
      if(response.data["Allow"] === "yes"){
        localStorage.setItem('usertoken', response.data)
        console.log(response.data)
        return response.data
      }
      console.log(response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const forgotPass = cluelessUser => {
  return axios
  .post('users/forgot-password', {
    email: cluelessUser.email
  })
  .then(response => {
    return response.data
  })
  .catch(err => {
    console.log(err)
  })
}


