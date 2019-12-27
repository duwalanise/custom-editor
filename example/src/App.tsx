import React from 'react';
import { Layout, Layouts } from 'react-grid-layout';
import { SmartEditor } from '../../lib/index.js';

import './App.css';
import '../../lib/index.css';

const App: React.FC = () => {
  const onLayoutChange = (currentLayout: Layout[], allLayouts: Layouts) => {
    // console.log(currentLayout);
  };

  const onContentChange = (currentContent: any) => {
    console.log(currentContent);
  };
  return (
    <div className="App">
      <SmartEditor
        editorComponents={[]}
        onLayoutChange={onLayoutChange}
        onContentChange={onContentChange}
      />
    </div>
  );
};

export default App;
