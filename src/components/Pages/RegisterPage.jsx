import React from 'react'

export const RegisterPage = () => {
  return (
    <form className="register-form">
      <h2>Registro</h2>
      <div className="form-group">
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" name="password" />
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" />
      </div>
      <button type="submit">Registrarse</button>
    </form>
  )
}
