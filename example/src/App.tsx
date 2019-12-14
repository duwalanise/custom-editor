import React from 'react';
import { Layout, Layouts } from 'react-grid-layout';
import { SmartEditor } from '../../lib/index.js';

import './App.css';
import '../../lib/index.css';

const App: React.FC = () => {
  const onLayoutChange = (currentLayout: Layout[], allLayouts: Layouts) => {
    console.log(currentLayout);
  };
  return (
    <div className="App">
      <SmartEditor
        editorComponents={[
          {
            layout: { i: 'b', x: 1, y: 0, w: 100, h: 5 },
            content: {
              id: 'b',
              type: 'paragraph',
              attributes: { title: 'First Component' },
            },
          },
        ]}
        onLayoutChange={onLayoutChange}
      />
    </div>
  );
};

export default App;
