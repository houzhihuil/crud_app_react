 import { useAuth0 } from '@auth0/auth0-react'; 
import React from 'react';
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton'; 
import Home from './Home';
 

function App() {
  const { isLoading } = useAuth0(); 
  if (isLoading) return <div>Loading...</div>  
  return (
    <>
      <LoginButton />
      <LogoutButton />
      <Home />    
    </>
  );
} 
export default App;  

 