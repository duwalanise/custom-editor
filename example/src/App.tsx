import React, { useState } from 'react';
import { Layout, Layouts } from 'react-grid-layout';
import { SmartEditor } from '../../lib/index.js';

import './App.css';
import '../../lib/index.css';

const App: React.FC = () => {
  const [editorComponents, setEditorComponents] = useState({
    layouts: [],
    contents: [],
  });
  const onChange = (currentContent: any) => {
    console.log(currentContent);
    setEditorComponents(currentContent);
  };
  return (
    <div className="App">
      <SmartEditor editorComponents={editorComponents} onChange={onChange} />
    </div>
  );
};

export default App;
