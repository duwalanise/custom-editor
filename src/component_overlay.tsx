import React, { useState } from 'react';
import { CustomComponent } from './toolbox';
import { IContent } from '.';
import ComponentOptions from './container/component_options';

interface ComponentOverlayProps {
  component: CustomComponent;
  content: IContent;
  onAdd: (component: CustomComponent) => () => void;
  onRemove: (content: IContent) => () => void;
}

const ComponentOverlay: React.FC<ComponentOverlayProps> = ({
  component,
  content,
  onRemove,
  onAdd,
}) => {
  const [showOption, setShowOption] = useState<boolean>(false);

  const onAddComponent = (comp: CustomComponent) => () => {
    setShowOption(false);
    onAdd(comp)();
  };
  return (
    <div className="component-overlay">
      {component.render(content.attributes)}
      <div className="actions">
        <span className="drag-me">#</span>
        <span onClick={() => setShowOption(!showOption)}>+</span>
        <span onClick={onRemove(content)}>X</span>
      </div>
      {showOption && <ComponentOptions onSelect={onAddComponent} />}
    </div>
  );
};

export default ComponentOverlay;
