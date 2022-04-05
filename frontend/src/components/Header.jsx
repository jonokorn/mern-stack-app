import {FaSignInAlt, FaSignOutAlt, FaUser, FaAngellist} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useNavigate } from 'react-router-dom'


function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const{user}    = useSelector((state) => state.auth)
    const onLogout = () => {
        
    }
     
    return (
    <header className='header'>
        <div className="logo">
            <FaAngellist className='hoverRotate'/>
            <FaAngellist className='hoverRotate'/>
            <FaAngellist className='hoverRotate'/>
            <FaAngellist className='hoverRotate'/>
            <FaAngellist className='hoverRotate'/>
        </div>
        <ul>
        {user ? (
          <li>
            <button className='btn' onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to='/login'>
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <FaUser /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  )
}

export default Header 