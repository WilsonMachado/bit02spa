import { useState } from 'react';
import { Navigate } from "react-router"
import { Link } from "react-router-dom";
import { Modal } from '../Modal';

export const LoginPage = ({setCurrentUser}) => {

    //! States ///////

        const [name, setName] = useState('');
        const [password, setPassword] = useState('');
        const [validated, setValidated] = useState(false);
        const [mandatoryFields, setMandatoryFields] = useState(false);
        const [userDoesntExist, setUserDoesntExist] = useState(false);
        const [emptyUsersObjet, SetEmptyUsersObjet] = useState(false);

    //! //////////////////////////////////////////////////////////////////////////////////

    //** Handlers */

        const handleNameChange = (e) => {       /** Captura username */ 
            
            setName(e.target.value);
            
        };

        const handlePasswordChange = (e) => {   /** Captura password */ 
            setPassword(e.target.value);
            
        };

        const handlerResetBooleanStates = () =>{
            setMandatoryFields(false);
            setUserDoesntExist(false);
            SetEmptyUsersObjet(false);
          };

        const login = (e) => {                       /** Validar y ejecutar el logueo */ 
            e.preventDefault();

            if(name === '' || password === ''){

                setMandatoryFields(true);

            }else{
            
                const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers'))
                
                const userLogging = {
                    username: name,
                    password: password,
                    cart: null
                };
                
                if(registeredUsers !== null){
                    
                    const validateUser = registeredUsers.some((user) => user.username === userLogging.username && user.password === userLogging.password);                
                    
                    if(validateUser){                    
                        localStorage.setItem('currentUser', JSON.stringify( [userLogging] ) );
                        setCurrentUser(userLogging);
                        setValidated(true);                   
                    }else{
                        setUserDoesntExist(true);
                    }
                    setName('');
                    setPassword('');

                }else{
                    
                    SetEmptyUsersObjet(true);
                    setName('');
                    setPassword('');
                }
            }

               

        };

    //** //////////////////////////////////////////////////////////////////////////// */
 
    if(validated){

        return <Navigate to='/bit02spa/profile'/>;

    } else if(mandatoryFields){
        return (<Modal title={`Error`} text={"All fields are mandatory."}>
                    <Link to={"/bit02spa/login"} onClick={handlerResetBooleanStates}>Okay!</Link>
                </Modal>);
    }else if(emptyUsersObjet){
        return (<Modal title={`Error`} text={"There are no registered users. Please register at least one."}>
                    <Link to={"/bit02spa/register"} onClick={handlerResetBooleanStates}>Okay!</Link>
                </Modal>);
    }else if(userDoesntExist){
        return (<Modal title={`Error`} text={"The user has not yet been registered or incorrect credentials have been entered."}>
                    <Link to={"/bit02spa/register"}>Register</Link>
                    <Link to={"/bit02spa/login"} onClick={handlerResetBooleanStates}>Okay!</Link>
                </Modal>);
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
