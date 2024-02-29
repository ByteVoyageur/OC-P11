// useFetchUserProfile.js
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFirstName, setUserName, setLastName } from '../redux/userActions'
import getToken from './getToken'

const useFetchUserProfile = () => {
  const { isLoggedIn } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const token = getToken()

  useEffect(() => {
    if (isLoggedIn) {
      fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.body) {
            console.log('如果fetch成功，这里将显示用户信息：', data.body)
            dispatch(setFirstName(data.body.firstName))
            dispatch(setLastName(data.body.lastName))
            dispatch(setUserName(data.body.userName))
          }
        })
        .catch((error) => {
          console.error(
            'There has been a problem with your fetch operation:',
            error
          )
        })
    }
  }, [isLoggedIn, token, dispatch])
}

export default useFetchUserProfile
