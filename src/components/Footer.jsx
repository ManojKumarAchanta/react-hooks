import React from 'react'
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';

export const Footer = () => {
    const {phone,email}=useContext(AppContext);
  return(<div>
    <h2>Contact</h2>
    <h3>Phone: {phone}</h3>
    <h3>Email: {email}</h3>
</div>)
}
