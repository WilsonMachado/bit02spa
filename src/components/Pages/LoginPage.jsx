import { useState } from 'react';
import { Navigate } from "react-router"

export const LoginPage = ({setCurrentUser}) => {

    //! States ///////

        const [name, setName] = useState('');
        const [password, setPassword] = useState('');
        const [validated, setValidated] = useState(false);

    //! //////////////////////////////////////////////////////////////////////////////////

    //** Handlers */

        const handleNameChange = (e) => {       /** Captura username */ 
            
            setName(e.target.value);
            
        };

        const handlePasswordChange = (e) => {   /** Captura password */ 
            setPassword(e.target.value);
            
        };

        const login = (e) => {                       /** Validar y ejecutar el logueo */ 
            e.preventDefault();
            
            const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers'))
            
            const credenciales = {
                username: name,
                password: password
            };
            
            if(registeredUsers !== null){
                
                const validateUser = registeredUsers.some((user) => user.username === credenciales.username && user.password === credenciales.password);                
                
                if(validateUser){                    
                    localStorage.setItem('currentUser', JSON.stringify( [credenciales] ) );
                    setCurrentUser(credenciales);
                    setValidated(true);                   
                }else{
                    console.log("El usuario no está registrado");
                }
                setName('');
                setPassword('');

            }else{
                
                alert('No hay ningún usuario registrado. Por favor, registre por lo menos uno.');
                setName('');
                setPassword('');
            }

               

        };

    //** //////////////////////////////////////////////////////////////////////////// */
 
    if(validated){

        return <Navigate to='/bit02spa/profile'/>;

    }else{
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
        );
    }
}
