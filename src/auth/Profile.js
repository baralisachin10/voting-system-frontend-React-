import React from 'react'

const Profile = () => {
    const user = JSON.parse(localStorage.getItem('user'))
  return (
    <>
    <h1>{user.user}</h1>
    </>
  )
}

export default Profile