import React from 'react';
import { Link } from 'react-router-dom';

const DummyPage = () => {
  return (
    <div>
      <h1>Dummy page</h1>
      <Link to="/">Go back home</Link>
    </div>
  );
};

export default DummyPage;
