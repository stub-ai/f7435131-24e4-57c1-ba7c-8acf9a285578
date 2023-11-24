import React, { useState, FormEvent } from 'react';
import { useRouter } from 'next/router';

const Login = () => {
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (password === 'W3tact') {
      router.push('/Models');
    } else {
      alert('Incorrect password');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-4 w-80 bg-white rounded shadow-md">
        <h2 className="mb-4 text-2xl font-bold text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <input className="w-full px-3 py-2 mb-2 border rounded-md" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className="w-full px-4 py-2 text-white bg-blue-500 rounded-md">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;