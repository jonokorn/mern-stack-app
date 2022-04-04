import {useState, useEffect} from 'react'
import {FaUser} from 'react-icons/fa'

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const { name, email, password, password2 } = formData

  const onChange = () => {

  }
  return (
    <section className='heading'>
      <h1>Register</h1>
      <section className='form'>
        <form>

          {/* Input for Username */}
          <div className="form-group">
            <input 
            type="text"
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
            type="text"
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

        </form>
      </section>

    </section>
  )
}

export default Register