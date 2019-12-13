import React from 'react';
import { Hello } from '../../lib';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Hello text="Test Library" />
    </div>
  );
};

export default App;
