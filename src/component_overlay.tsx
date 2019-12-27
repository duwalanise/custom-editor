import React, { useState } from 'react';
import { CustomComponent } from './toolbox';
import { IContent } from '.';
import ComponentOptions from './container/component_options';

interface ComponentOverlayProps {
  component: CustomComponent;
  content: IContent;
  isActive: boolean;
  onAdd: (component: CustomComponent) => () => void;
  onRemove: (content: IContent) => () => void;
  onChangeContent: (content: IContent) => void;
}

const ComponentOverlay: React.FC<ComponentOverlayProps> = ({
  component,
  content,
  onRemove,
  onAdd,
  isActive,
  onChangeContent,
}) => {
  const [showOption, setShowOption] = useState<boolean>(false);
  const onAddComponent = (comp: CustomComponent) => (e: any) => {
    e.stopPropagation();
    setShowOption(false);
    onAdd(comp)();
  };

  return (
    <div className="component-overlay">
      <component.render
        content={content}
        isActive={isActive}
        onChangeContent={onChangeContent}
      />
      <div className="actions" onClick={(e) => e.stopPropagation()}>
        <span className="drag-me">
          <img src={require('./images/drag.png')} alt="" />
        </span>
        <span onClick={() => setShowOption(!showOption)}>
          <img src={require('./images/add.png')} alt="" />
        </span>
        <span onClick={onRemove(content)}>
          <img src={require('./images/close.png')} alt="" />
        </span>
      </div>
      {showOption && <ComponentOptions onSelect={onAddComponent} />}
    </div>
  );
};

export default ComponentOverlay;
