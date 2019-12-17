import React from 'react';
import { CustomComponents, CustomComponent } from '../toolbox';

interface ComponentOptionsProps {
  onSelect: (component: CustomComponent) => (e: any) => void;
}

const ComponentOptions: React.FC<ComponentOptionsProps> = ({ onSelect }) => {
  return (
    <ul className="component-options">
      {Object.keys(CustomComponents).map((comp) => (
        <li key={comp} onClick={onSelect(CustomComponents[comp])}>
          {comp}
        </li>
      ))}
    </ul>
  );
};

export default ComponentOptions;
