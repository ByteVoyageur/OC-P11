// useToken.js to get the token from the Redux store:
import { useSelector } from 'react-redux'

const getToken = () => {
  const token = useSelector((state) => state.user.token?.token) // value of token but not the whole object
  console.log('Token from Redux store:', token)
  return token
}

export default getToken
