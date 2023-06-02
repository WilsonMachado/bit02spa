import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";
import { Modal } from '../Modal';

export const RegisterPage = () => {
    //! States ///////

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');    
    const [confirmPassword, setConfirmPassword] = useState('');
    const [successRegister, setSuccessRegistered] = useState(false);
    const [mandatoryFields, setMandatoryFields] = useState(false);
    const [passwordDontMach, setPasswordDontMach] = useState(false);
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

    const handlerResetBooleanStates = () =>{
      setMandatoryFields(false);
      setPasswordDontMach(false);
    };

    const login = (e) => {                       /** Validar y ejecutar el logueo */ 
        
        e.preventDefault();              
        
        if(name.length === '' || password === '' || confirmPassword === ''){         // Validación de campos no vacíos
        
            setMandatoryFields(true);
        
        }else if(password !== confirmPassword){                                      // Validación de passwords iguales   
            
            setPasswordDontMach(true);
            setPassword('');
            setConfirmPassword('');

        }else{                                                                       // Si pasa todas las validaciones...

            let registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')); // Obtener los usuarios actuales

            const credenciales = {
                username: name,
                password: password,
                cart: null
            };
            
            if(registeredUsers === null){
                localStorage.setItem('registeredUsers', JSON.stringify( [credenciales] ) );
            }else{            
                
                registeredUsers.push(credenciales);
                localStorage.setItem('registeredUsers', JSON.stringify( registeredUsers ) );
            }

            setSuccessRegistered(true);
            
        }         

    };

//** //////////////////////////////////////////////////////////////////////////// */


  if (successRegister){

    return (<Modal title={`Success Registered, ${name}!`} text={"Now, you can log in using your username and password."}>
                <Link to={"/bit02spa/login"}>Okay!</Link>
            </Modal>);

  }else if (mandatoryFields){
    return (<Modal title={`Error`} text={"All fields are mandatory."}>
                <Link to={"/bit02spa/register"} onClick={handlerResetBooleanStates}>Okay!</Link>
            </Modal>);
  }else if(passwordDontMach){
    return (<Modal title={`Error`} text={"Passwords don't match."}>
                <Link to={"/bit02spa/register"} onClick={handlerResetBooleanStates}>Okay!</Link>
            </Modal>);
  }
  else{
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
}
