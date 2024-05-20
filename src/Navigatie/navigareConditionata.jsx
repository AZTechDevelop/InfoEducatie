import { useLocation } from 'react-router-dom';
import Nav from './baraNavigatie';

function NavigatieConditionata() {
  const location = useLocation();

  if (location.pathname === '/') {
    return null;
    // impiedica duplicarea barei de navigatie
  }
  else {
    return <Nav />
  }
}

export default NavigatieConditionata;
