import { uuid } from 'uuidv4';
import React, { useState, useEffect } from 'react';
import ComponentOverlay from './component_overlay';
import toolbox, { CustomComponent } from './toolbox';
import { Responsive, WidthProvider, Layouts, Layout } from 'react-grid-layout';

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import ComponentOptions from './container/component_options';

export interface IContent {
  id: string;
  type: string;
  attributes: any;
}
interface SmartEditorProps {
  editorComponents: {
    layouts: Layout[];
    contents: IContent[];
  };
  onLayoutChange: (layout: Layout[], allLayouts: Layouts) => void;
  onContentChange: (content: IContent[]) => void;
}

const ResponsiveGridLayout = WidthProvider(Responsive);

const SmartEditor: React.SFC<SmartEditorProps> = ({
  onLayoutChange,
  editorComponents,
  onContentChange,
}) => {
  const [showOption, setShowOptions] = useState<boolean>(false);
  const [layouts, setLayouts] = useState<Layout[]>([]);
  const [contents, setContents] = useState<IContent[]>([]);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    // let accumulator: { layouts: Layout[]; contents: IContent[] } = {
    //   layouts: [],
    //   contents: [],
    // };

    // accumulator = editorComponents.reduce(
    //   (acc, ec) => {
    //     acc.layouts.push(ec.layout);
    //     acc.contents.push(ec.content);
    //     return acc;
    //   },
    //   { ...accumulator },
    // );

    setLayouts(editorComponents.layouts);
    setContents(editorComponents.contents);
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

  const onRemoveComponent = (contentToRemove: IContent) => () => {
    setLayouts(layouts.filter((l) => l.i !== contentToRemove.id));
    setContents(contents.filter((c) => c.id !== contentToRemove.id));
  };

  const onAddComponent = (componentToAdd: CustomComponent) => () => {
    const id = uuid();
    const newLayout: Layout = {
      ...componentToAdd.defaultLayout,
      i: id,
      x: 0,
      y: 0,
    } as Layout;
    const newContent: IContent = {
      ...componentToAdd.defaultContent,
      id,
    } as IContent;

    setLayouts(layouts.concat(newLayout));
    setContents(contents.concat(newContent));
  };

  const handleLayoutChange = (layout: Layout[], allLayouts: Layouts) => {
    setLayouts(layout);
    onLayoutChange(layout, allLayouts);
  };

  const onChangeContent = (newContent: IContent) => {
    setContents(
      contents.map((c) => {
        return c.id === newContent.id ? newContent : c;
      }),
    );
    onContentChange(contents);
    setActive(null);
  };

  const handleSetActive = (id: string) => () => {
    setActive(id);
  };

  if (!layouts.length) {
    return (
      <div className="add-component-wrapper">
        <div className="add-component">
          <button
            className="add-btn"
            onClick={() => setShowOptions(!showOption)}
          >
            Add Component
          </button>
          {showOption && <ComponentOptions onSelect={onAddComponent} />}
        </div>
      </div>
    );
  }

  return (
    <ResponsiveGridLayout
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 100, md: 80, sm: 60, xs: 40, xxs: 20 }}
      className="editor-layout"
      layouts={getLayout(layouts)}
      rowHeight={20}
      onLayoutChange={handleLayoutChange}
      draggableHandle=".drag-me"
    >
      {contents.map((content) => (
        <div key={content.id} onClick={handleSetActive(content.id)}>
          <ComponentOverlay
            onRemove={onRemoveComponent}
            onChangeContent={onChangeContent}
            onAdd={onAddComponent}
            isActive={active === content.id}
            component={toolbox(content.type)}
            content={content}
          />
        </div>
      ))}
    </ResponsiveGridLayout>
  );
};

export { SmartEditor };
