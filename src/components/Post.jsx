import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function Post() {
  const status = 200;

  const navigate = useNavigate();

  const onClick = () => {
    navigate('/about')
  }

  if (status === 404) {
    return <Navigate to='/404' />
  }
  return (
    <div>
      <h1>Post</h1>
      <button onClick={onClick}>Click</button>
    </div>
  )
}

export default Post