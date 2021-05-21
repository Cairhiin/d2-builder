import React, { useEffect, useState } from 'react';
import register from '../../api/auth/register';

const RegisterView = ({ user="Guest", isLoggedIn, error }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const results = async () => {
      const newUser = await register({ username: 'test', password: 'test', email: 'test' });
      setData(newUser);
    }
    results();

  }, [setData]);

  return (
    <div>
      { data.username }, you're registered!
    </div>
  );
}

export default RegisterView;
