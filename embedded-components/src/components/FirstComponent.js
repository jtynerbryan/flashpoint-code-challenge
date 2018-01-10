import React from 'react';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';

const FirstComponent = () => {
  return (
    <div style={{ border: '5px solid black', width: '80%', margin: '50px auto', padding: '20px' }}>
      <h2>I am a Component</h2>
      <SecondComponent />
      <ThirdComponent />
    </div>
  );
};

export default FirstComponent;
