import React from 'react';
import { Layout, Layouts } from 'react-grid-layout';
import { SmartEditor } from '../../lib/index.js';

import './App.css';
import '../../lib/index.css';

const App: React.FC = () => {
  const onChange = (currentContent: any) => {
    console.log(currentContent);
  };
  return (
    <div className="App">
      <SmartEditor
        editorComponents={{ layouts: [], contents: [] }}
        onChange={onChange}
      />
    </div>
  );
};

export default App;
