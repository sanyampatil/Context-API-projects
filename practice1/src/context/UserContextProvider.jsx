import React, { useState } from 'react'

import UserContext from './UserContext'

const UserContextProvider = ({children}) => {

 const [user, setuser] = useState(null)
  return (
  <UserContext.Provider value={{setuser,user}}>
  {children}

  </UserContext.Provider>
    
  )
}

export default UserContextProvider