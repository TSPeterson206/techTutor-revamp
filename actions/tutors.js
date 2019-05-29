import axios from 'react-native-axios'
const BASE_URL = 'http://192.168.0.34:8000'

export const GET_TUTORS = 'GET_TUTORS'
export const getTutors = () => {
  return dispatch => (
    axios.get(`${BASE_URL}/tutors`)
    .then(response => {
      dispatch({
        type:GET_TUTORS,
        payload:response.data
      })
      console.log('tutoraction', response.data)

    })
    .catch((error) => console.warn(error.response))
  )
}
// const newOne = axios.get('http://localhost:8000/tutors')
//             .then((response) => {return response})
// console.log('new', newOne)
