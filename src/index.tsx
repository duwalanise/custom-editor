import React, { useState, useEffect } from 'react';
import { uuid } from 'uuidv4';
import { Responsive, WidthProvider, Layouts, Layout } from 'react-grid-layout';

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

interface IContent {
  id: string;
  type: string;
  attributes: any;
}
interface SmartEditorProps {
  editorComponents: {
    layout: Layout;
    content: IContent;
  }[];
  onLayoutChange: (layout: Layout[], allLayouts: Layouts) => void;
}

const ResponsiveGridLayout = WidthProvider(Responsive);

const SmartEditor: React.SFC<SmartEditorProps> = ({
  onLayoutChange,
  editorComponents,
}) => {
  const [layouts, setLayouts] = useState<Layout[]>([]);
  const [contents, setContents] = useState<IContent[]>([]);

  useEffect(() => {
    let accumulator: { layouts: Layout[]; contents: IContent[] } = {
      layouts: [],
      contents: [],
    };

    accumulator = editorComponents.reduce(
      (acc, ec) => {
        acc.layouts.push(ec.layout);
        acc.contents.push(ec.content);
        return acc;
      },
      { ...accumulator },
    );

    setLayouts(accumulator.layouts);
    setContents(accumulator.contents);
  }, []);

  const getLayout = (layouts: Layout[]): Layouts => {
    return {
      lg: layouts,
      md: layouts,
      sm: layouts,
      xs: layouts,
      xxs: layouts,
    };
  };

  return (
    <ResponsiveGridLayout
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 100, md: 80, sm: 60, xs: 40, xxs: 20 }}
      verticalCompact={false}
      className="editor-layout"
      layouts={getLayout(layouts)}
      rowHeight={20}
      onLayoutChange={onLayoutChange}
      draggableHandle=".drag-me"
    >
      {contents.map((content) => (
        <div key={content.id}>
          {content.attributes.title}
          {/* <ComponentOverlay
            onRemove={onRemoveComponent}
            onAdd={onAddComponent}
            component={componentMapper(content.type)}
            content={content}
          /> */}
        </div>
      ))}
    </ResponsiveGridLayout>
  );
};

export { SmartEditor };
