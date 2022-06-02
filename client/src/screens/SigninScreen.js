import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userSignin } from '../redux/actions/signinActions'
import { Message } from '../components'

const SigninScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const user = useSelector(state => state.user)
  const { userDetails, error } = user

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(userSignin(email, password))
  }

  return (
    <>
      {
        error ? <Message variant="danger" message={error} /> : userDetails._id && <Message variant="info" message="Logged in successfully!" />
      }
      <div>
        <form className="form" onSubmit={submitHandler}>
          <div>
            <h1>Sign In</h1>
          </div>

          <div>
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" placeholder="Enter email" required onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div>
            <label htmlFor="password">Email address</label>
            <input type="password" id="password" placeholder="Enter password" required onChange={(e) => setPassword(e.target.value)} />
          </div>

          <div>
            <label />
            <button type="submit" className="primary">Sign In</button>
          </div>

          <div>
            <label />
            <div>
              New customer? <Link to="/register">Create your account</Link>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default SigninScreen
