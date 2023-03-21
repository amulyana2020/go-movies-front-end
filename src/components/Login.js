import React, {useState} from 'react';
import {
  useNavigate,
  useOutletContext,
} from 'react-router-dom';
import Input from '../forms/Input';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {setJwtToken} = useOutletContext();
  const {setAlertClassName} = useOutletContext();
  const {setAlertMessage} = useOutletContext();

  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();

    if (email === 'admin@admin.com') {
      setJwtToken('a');
      setAlertClassName('d-none');
      setAlertMessage('');
      navigate('/');
    } else {
      setAlertClassName('alert-danger');
      setAlertMessage('Invalid credentials');
    }

    console.log(email, password);
  };

  return (
    <div className='col-md-6 offset-md-3'>
      <h2>Login</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <Input
          type='email'
          title='Email Address'
          name='email'
          className='form-control'
          autoComplete='email-new'
          onChange={event =>
            setEmail(event.target.value)
          }
        />
        <Input
          type='password'
          title='Password'
          name='password'
          className='form-control'
          autoComplete='password-new'
          onChange={event =>
            setPassword(event.target.value)
          }
        />
        <input
          type='submit'
          value='Login'
          className='btn btn-primary'
        />
      </form>
    </div>
  );
};

export default Login;
