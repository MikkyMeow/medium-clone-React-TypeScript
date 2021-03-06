import axios from 'axios';
import useFetch from 'hooks/useFetch';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Auth: React.FC = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  // @ts-ignore
  const [{ response, isLoading, error }, doFetch] = useFetch('');

  console.log('fetch', response, isLoading, error);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //@ts-ignore
    doFetch({
      method: 'post',
      data: {
        user: {
          email: 'qq@qq.com',
          password: '123',
        },
      },
    });
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (!isSubmitting) return;
    document.title = login;
    axios('https://conduit.productionready.io/api/users/login', {
      method: 'post',
      data: {
        user: {
          email: login,
          password: password,
        },
      },
    })
      .then((res) => {
        console.log('res', res);
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.log('error', error);
        setIsSubmitting(false);
      });
  }, [login, password, isSubmitting]);

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Login</h1>
            <p className="text-xs-center">
              <Link to="/">description</Link>
            </p>
            <form onSubmit={handleSubmit}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Username"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    autoComplete="username"
                    placeholder="Email"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    autoComplete="current-password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </fieldset>
                <button
                  className="btn btn-lg btn-primary pull-xs-right"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
