import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext, ThemeType } from '../context/GlobalContext'
import '../styles/theme.css'
function Login() {
  const [userName, setUserName] = useState<string>('')
  const { toggleTheme, setUser } = useContext(GlobalContext)
  const navigate = useNavigate()
  const handleSubmit = async () => {
    if (userName.length > 0) {
      const url = `https://api.genderize.io/?name=${userName}`
      try {
        const result = await fetch(url)
        const response = await result.json()
        toggleTheme(response.gender as ThemeType)
        setUser({ id: response.count, name: response.name, probability: response.probability })
        navigate('/home')
      } catch (err) {
        console.error(err)
      }
    }
  }

  return (
    <div className='loginContainer'>
      <input
        type='text'
        className='inputField'
        onChange={(e) => setUserName(e.target.value)}
        placeholder={'Enter User Name'}
      />
      <button type='submit' className='authButton' onClick={handleSubmit}>
        Log In
      </button>
    </div>
  )
}

export default Login
