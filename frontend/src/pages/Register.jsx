import { useState, useEffect } from 'react'
import { useSelector, useDispatch }   from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import {register,reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'


function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const { name, email, password, password2 } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user, isLoading, isError, isSuccess, message} = useSelector(
    (state) => state.auth)

  
  useEffect(() => {
    if(isError) {
      toast.error(message)
    }

    if(isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())

  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ( {
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if(password !== password2) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        name,
        email,
        password
      }

      dispatch(register(userData))
    }
  }

  if(isLoading) {
    return <Spinner />
  }

  return (
    <section className='heading'>
      <h1>Register</h1>
      <section className='form'>
        <form onSubmit={onSubmit}>

          {/* Input for Username */}
          <div className="form-group">
            <input 
            type='text'
            className="form-control"
            id='name' 
            name='name'
            value={name}
            placeholder='name'
            onChange={onChange}
            />
          </div>

          {/* Input for User Email */}
          <div className="form-group">
            <input 
            type="email"
            className="form-control"
            id='email' 
            name='email'
            value={email}
            placeholder='email'
            onChange={onChange}
            />
          </div> 

          {/* Input for User Password */}
          <div className="form-group">
            <input 
            type="password"
            className="form-control"
            id='password' 
            name='password'
            value={password}
            placeholder='password'
            onChange={onChange}
            />
          </div>

          {/* Input for User Password Confirm */}
          <div className="form-group">
            <input 
            type="password"
            className="form-control"
            id='password2' 
            name='password2'
            value={password2}
            placeholder='confirm password'
            onChange={onChange}
            />
          </div>

          <div className="form-group">
            <button type='submit' className='btn btn-block'>Submit</button>
          </div>

        </form>
      </section>

    </section>
  )
}

export default Register