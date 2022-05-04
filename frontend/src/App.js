import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Login from './pages/Login';
import Header from './components/Header';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element= {<Dashboard/>} ></Route>
            <Route path='/login' element= {<Login/>} ></Route>
            <Route path='/register' element= {<Register/>} ></Route>
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </> 

  );
}

export default App;
