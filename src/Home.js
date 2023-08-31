import './App.css';
import Index from './components/index';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update'; 
import { BrowserRouter as Router, Routes,  Route} from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

 function Home() {
  const { isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <>  
      <Router>
          <div className="main">
            <h2 className="main-header">React Crud Operations</h2>
            <Routes>
              <Route path='/' element={<Index />} />
              <Route path='/create' element={<Create />} />
              <Route path='/read' element={<Read />} />
              <Route path='/update' element={<Update />} />
            </Routes>
          </div>
      </Router>
      </>
    )

  );
}  
export default Home; 
 