import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'

function HobbyManagement() {
  const { theme, addHobbies, hobbies, removeHobby } = useContext(GlobalContext)
  const [hobby, setHobby] = useState('')
  const [showAddedHobby, setShowAddedHobby] = useState(false)
  const navigate = useNavigate()

  const handleAddHobbies = () => {
    if (hobby !== '') {
      addHobbies(hobby)
      setShowAddedHobby(true)
      setHobby('')
    }
  }
  return (
    <div className={theme === 'male' ? 'blueContainer' : 'pinkContainer'}>
      <h3>Hobby Management</h3>
      <input
        type='text'
        className='inputField'
        placeholder='Add a hobby...'
        value={hobby}
        onChange={(e) => {
          setHobby(e.target.value)
        }}
      />
      <div>
        <button onClick={handleAddHobbies} className='authButton'>
          Add Hobby
        </button>
        <button onClick={() => navigate('/home')} className='authButton'>
          Go Back
        </button>
      </div>
      {hobbies.length > 0 && (
        <>
          <div>Your updated hobbies are:</div>
          {hobbies.map((hobby, index) => (
            <span key={index}>
              {hobby}
              <button onClick={() => removeHobby(hobby)} className='authButton'>
                Remove
              </button>
            </span>
          ))}
        </>
      )}
    </div>
  )
}

export default HobbyManagement
