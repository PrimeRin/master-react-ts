import React from 'react'
import { useState } from 'react'

type UserProps = {
    name: string
    email: string
}

const User = () => {
  const [user, setUser] = useState<UserProps>({} as UserProps)

  const handleLogin = () => {
    setUser({name: "Prime", email: "gqE3v@example.com"})
  }

  const handleLogOut = () => {
    setUser({} as UserProps)
  }

  return (
    <div>
        <button onClick={handleLogin}>Log In</button>
        <button onClick={handleLogOut}>Log Out</button>
        <h1>User name is {user?.name} and email is {user?.email}</h1>
    </div>
  )
}

export default User