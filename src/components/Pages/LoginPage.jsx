import { useState, useEffect } from 'react';


export const LoginPage = ({setCurrentUser}) => {

    //! States ///////

        const [name, setName] = useState('');
        const [password, setPassword] = useState('');

    //! //////////////////////////////////////////////////////////////////////////////////



    //** Handlers */

        const handleNameChange = (event) => {       /** Captura username */ 
            
            setName(event.target.value);
            
        };

        const handlePasswordChange = (event) => {   /** Captura password */ 
            setPassword(event.target.value);
            
        };

        const login = (e) => {                       /** Validar y ejecutar el logueo */ 
            e.preventDefault();
            const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers'))            
            console.table(registeredUsers);
            if(registeredUsers !== null){
                
                const validateUser = personas.some((persona) => persona.nombre === name);
                
                if(validateUser){
                    
                    const credenciales = {
                        username: name,
                        password: password
                    };
        
                    localStorage.setItem('registeredUsers', JSON.stringify( [credenciales] ) );    
                    localStorage.setItem('currentUser',     JSON.stringify( credenciales ) );
        
                    setCurrentUser(credenciales);
                }
            }else{
                alert('Primero hay que registrarse');
                console.log(name);
                console.log(password);
                setName('');
                setPassword('');
            }

               

        };

    //** //////////////////////////////////////////////////////////////////////////// */

  return (
    <form className='form'>
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="name">Username:</label>
        <input type="text" id="name" name="name" value={name} onChange={handleNameChange} />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} />
      </div>
      <button type="submit" onClick={login}>Login!</button>
    </form>
  )
}
