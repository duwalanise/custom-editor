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

interface IComponent {
  layouts: Layout[];
  contents: IContent[];
}
interface SmartEditorProps {
  editorComponents: IComponent;
  onChange: (newComponent: IComponent) => void;
}

const ResponsiveGridLayout = WidthProvider(Responsive);

const SmartEditor: React.SFC<SmartEditorProps> = ({
  onChange,
  editorComponents,
}) => {
  const [showOption, setShowOptions] = useState<boolean>(false);
  const [active, setActive] = useState<string | null>(null);
  // const [layouts, setLayouts] = useState<Layout[]>(editorComponents.layouts);
  // const [contents, setContents] = useState<IContent[]>(
  //   editorComponents.contents,
  // );
  const { layouts, contents } = editorComponents;

  // useEffect(() => {
  //   setLayouts(editorComponents.layouts);
  //   setContents(editorComponents.contents);
  // }, [editorComponents]);

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
    onChange({
      layouts: layouts.filter((l) => l.i !== contentToRemove.id),
      contents: contents.filter((c) => c.id !== contentToRemove.id),
    });
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

    onChange({
      layouts: layouts.concat(newLayout),
      contents: contents.concat(newContent),
    });
  };

  const handleLayoutChange = (layout: Layout[], allLayouts: Layouts) => {
    onChange({
      layouts: layout,
      contents: contents,
    });
  };

  const onChangeContent = (newContent: IContent) => {
    onChange({
      layouts: layouts,
      contents: contents.map((c) => {
        return c.id === newContent.id ? newContent : c;
      }),
    });
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
