// useToken.js to get the token from the Redux store:
import { useSelector } from 'react-redux'

const getToken = () => {
  const token = useSelector((state) => state.user.token)
  return token
}

export default getToken
