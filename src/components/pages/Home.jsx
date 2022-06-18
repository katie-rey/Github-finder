import React from 'react'
import UserResults from '../users/UserResults'
import UserSearch from '../users/UserSearch'

function Home() {
  return (
    <div>
      <h1 className="text-6xl">Welcome</h1>
      {/* {process.env.REACT_APP_GITHUB_TOKEN} */}
      <UserSearch />
      <UserResults />
    </div>
  )
}

export default Home
