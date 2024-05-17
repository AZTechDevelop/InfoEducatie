
import React from 'react';
import { useLocation } from 'react-router-dom';
import Nav from './navbar';

function ConditionalNav() {
  const location = useLocation();  // Acesta este locul corect pentru a folosi useLocation

  if (location.pathname === '/') {
    return null;
  }
  else{
    return <Nav />
  }
}

export default ConditionalNav;
