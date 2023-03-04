import { createContext, useState } from 'react'

type GlobalContextType = {
  theme: ThemeType
  toggleTheme: (theme: ThemeType) => void
  hobbies: string[]
  addHobbies: (hobby: string) => void
  removeHobby: (hobby: string) => void
  resetHobbies: () => void
  user: UserData
  setUser: (user: UserData) => void
}
type ContextProps = {
  children: React.ReactNode
}

type UserData = {
  name?: string
  id?: number
  probability?: number
}

export const GlobalContext = createContext<GlobalContextType>({
  theme: 'default',
  hobbies: [],
  toggleTheme: () => null,
  addHobbies: () => null,
  removeHobby: () => null,
  setUser: () => null,
  resetHobbies: () => null,
  user: {},
})

export type ThemeType = 'male' | 'female' | 'default'

export const GlobalContextProvider = (props: ContextProps) => {
  const [theme, setTheme] = useState<ThemeType>('default')
  const [user, setUserData] = useState<UserData>({})
  const [hobbies, setHobbies] = useState<string[]>([])
  const toggleTheme = (theme: ThemeType) => {
    setTheme(theme)
  }

  const addHobbies = (hobby: string) => {
    setHobbies((prev) => [...prev, hobby])
  }

  const removeHobby = (hobby: string) => {
    const newHobbies = hobbies.filter((hobbyName) => hobbyName != hobby)
    setHobbies(newHobbies)
  }

  const resetHobbies = () => {
    setHobbies([])
  }

  const setUser = (user: UserData) => {
    setUserData(user)
  }

  return (
    <GlobalContext.Provider
      value={{
        theme,
        toggleTheme,
        hobbies,
        addHobbies,
        resetHobbies,
        user,
        setUser,
        removeHobby,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}
