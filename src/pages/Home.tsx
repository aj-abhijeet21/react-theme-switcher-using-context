import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'
import '../styles/theme.css'

function Home() {
  const { theme, hobbies, resetHobbies, user } = useContext(GlobalContext)

  return (
    <div className={theme === 'male' ? 'blueContainer' : 'pinkContainer'}>
      <h3>Welcome {user.name?.toUpperCase()}</h3>
      <h4>Your count id is {user.id}</h4>
      <h4>And probability was {user.probability}</h4>
      <h4>Your hobbies are:</h4>
      {hobbies.length > 0 ? (
        hobbies.map((hobby) => <div>{hobby}</div>)
      ) : (
        <div>You don't have any hobbies for now, go ahead and add some hobbies!</div>
      )}
      <Link to='/hobbyManagement'>
        <button className={theme === 'male' ? 'blueButton' : 'pinkButton'}>Hobby Management</button>
      </Link>
      <Link to='/'>
        <button className='authButton' onClick={() => resetHobbies()}>
          Log Out
        </button>
      </Link>
    </div>
  )
}

export default Home
