import axios from 'axios'
const BASE_URL = 'http://localhost:8000'

export const GET_TUTORS = 'GET_TUTORS'
export const getTutors = () => {
  return dispatch => (
    axios.get(`${BASE_URL}/tutors`)
    .then(response => {
      dispatch({
        type:GET_TUTORS,
        payload:response.data.data
      })
    })
    .catch((error) => console.warn(error.response))
  )
}