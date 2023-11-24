import React from 'react';

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-4 bg-white rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form>
          <input className="mb-2 w-full px-3 py-2 border rounded-md" type="text" placeholder="Username" />
          <input className="mb-2 w-full px-3 py-2 border rounded-md" type="password" placeholder="Password" />
          <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-md">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;