import React, { useEffect, useState } from 'react';
import login from '../../api/auth/login';

const LoginView = ({ user="Guest", isLoggedIn, error }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const results = async () => {
      const newUser = await login({ username: 'admin', password: 'admin' });
      setData(newUser);
    }
    results();

  }, [setData]);

  return (
    <div>
      Welcome, { data.username }
    </div>
  );
}

export default LoginView;
