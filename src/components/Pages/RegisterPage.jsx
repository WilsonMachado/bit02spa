import React from 'react'
import { useState } from 'react';

export const RegisterPage = () => {
    //! States ///////

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');    
    const [confirmPassword, setConfirmPassword] = useState('');
//! //////////////////////////////////////////////////////////////////////////////////



//** Handlers */

    const handleNameChange = (e) => {       /** Captura username */ 
        
        setName(e.target.value);
        
    };

    const handlePasswordChange = (e) => {   /** Captura password */ 
        setPassword(e.target.value);
        
    };

    const handleConfirmPasswordChange = (event) => { /** Captura confirmación de password */ 
        setConfirmPassword(event.target.value);
      };

    const login = (e) => {                       /** Validar y ejecutar el logueo */ 
        
        e.preventDefault();              
        
        if(name.length === '' || password === '' || confirmPassword === ''){         // Validación de campos no vacíos
        
            alert("Todos los campos son obligatorios");
        
        }else if(password !== confirmPassword){                                      // Validación de passwords iguales   
            
            alert('Las contraseñas no coinciden');
            setPassword('');
            setConfirmPassword('');

        }else{                                                                       // Si pasa todas las validaciones...

            let registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')); // Obtener los usuarios actuales

            const credenciales = {
                username: name,
                password: password
            };
            
            if(registeredUsers === null){
                localStorage.setItem('registeredUsers', JSON.stringify( [credenciales] ) );
            }else{            
                
                registeredUsers.push(credenciales);
                localStorage.setItem('registeredUsers', JSON.stringify( registeredUsers ) );
            }

            setName('');
            setPassword('');
            setConfirmPassword('');
            
        }
        
        

           

    };

//** //////////////////////////////////////////////////////////////////////////// */


  return (
    <form className="form">
      <h2>Register a new user</h2>
      <div className="form-group">
        <label htmlFor="name">Username:</label>
        <input type="text" id="name" name="name" value={name} onChange={handleNameChange} />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} />

      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={handleConfirmPasswordChange}
        />
      </div>
      <button type="submit" onClick={login}>Register!</button>
    </form>
  )
}
