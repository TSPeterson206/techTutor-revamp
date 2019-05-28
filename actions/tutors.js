import axios from 'axios'
const BASE_URL = 'http://localhost:8000'

export const GET_TUTORS = 'GET_TUTORS'
export const getTutors = () => {
  return dispatch => (
    axios.get(`${BASE_URL}/tutors/1`)
    .then(response => {
      dispatch({
        type:GET_TUTORS,
        payload:response.data.data
      })
      console.log(response)

    })
    .catch((error) => console.warn(error.response))
  )
}
// const newOne = axios.get('http://localhost:8000/tutors')
//             .then((response) => {return response})
// console.log('new', newOne)
