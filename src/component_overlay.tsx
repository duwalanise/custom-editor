import React from 'react';
import { CustomComponent } from './toolbox';
import { IContent } from '.';

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
}) => (
  <div className="component-overlay">
    {component.render(content.attributes)}
    <div className="actions">
      <span className="drag-me">#</span>
      <span onClick={onAdd(component)}>+</span>
      <span onClick={onRemove(content)}>X</span>
    </div>
  </div>
);

export default ComponentOverlay;
