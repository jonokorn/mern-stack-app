import {useState, useEffect} from 'react'
import {FaSignInAlt} from 'react-icons/fa'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const { name, email, password, password2 } = formData

  const onChange = (e) => {
    setFormData((prevState) => ( {
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section className='heading'>
      <h1>Login</h1>
      <section className='form'>
        <form onSubmit={onSubmit}>

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

          <div className="form-group">
            <button type='submit' className='btn btn-block'>Submit</button>
          </div>

        </form>
      </section>

    </section>
  )
}

export default Login