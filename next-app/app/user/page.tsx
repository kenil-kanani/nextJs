import { link } from 'fs'
import React from 'react'

interface User {
  id: number,
  name: string
}

const UsersPage = async () => {

  //! This will not cache the response.Needed when we want to get the latest data
  const res = await fetch('https://jsonplaceholder.typicode.com/users' , {cache : 'no-store'})

  //! This will cache the response for 10 seconds and then fetch the new data
  // const res = await fetch('https://jsonplaceholder.typicode.com/users', { next: { revalidate: 10 } })
  const users: User[] = await res.json()

  return (
    <>
      <p>{new Date().toLocaleTimeString()}</p>
      <h1>Users</h1>
      <ul>
        {users.map(user => <li key={user.id}>Name : {user.name}</li>)}
      </ul>
    </>
  )
}

export default UsersPage
