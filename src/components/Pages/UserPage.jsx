import React from 'react'

export const UserPage = ({currentUser}) => {
  return (
    <div>Hola, mi estimado {currentUser.username}. Acá está tu información personal</div>
  )
}
