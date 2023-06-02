import React from 'react'
import { Link } from 'react-router-dom';
import { Modal } from '../Modal';

export const NotFoundPage = () => {
  return (<Modal title={`Eror 404! Page not found`} text={"Apparently, the page you want to access does not exist. Try again!"}>
              <Link to={"/bit02spa"}>Okay</Link>
          </Modal>);
}
