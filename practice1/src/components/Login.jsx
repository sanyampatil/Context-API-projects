import React, { useContext ,useState} from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
  const [name, setname] = useState()
  const [password, setpassword] = useState()
  const {setuser} = useContext(UserContext)

  function handleSubmit(){
   setuser(name)
  }


  return (
    <div>
      <input
        type='text'
        value={name}
        onChange={e => setname(e.target.value)}
        placeholder='Enter your name'
      />

      <input
        type='text'
        value={password}
        onChange={e => setpassword(e.target.value)}
        placeholder='Enter your password'
      />

      <button onSubmit={handleSubmit}>submit</button>
    </div>
  )
}

export default Login
