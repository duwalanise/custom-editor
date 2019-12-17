import React, { useState } from 'react';
import { CustomComponent, CustomComponentRenderProps } from '../toolbox';

const Heading: React.FC<CustomComponentRenderProps> = ({
  content,
  isActive,
  onChangeContent,
}) => {
  const [title, setTitle] = useState<string>(content.attributes.title);
  const handleChange = (ev: any) => {
    setTitle(ev.target.value);
  };
  const hanldeKeyDown = (ev: any) => {
    if (ev.keyCode === 13) {
      onChangeContent({
        ...content,
        attributes: { ...content.attributes, title },
      });
    }
  };
  if (isActive) {
    return (
      <textarea
        value={title}
        onChange={handleChange}
        onKeyDown={hanldeKeyDown}
        style={{ fontSize: '2em', fontWeight: 'bold' }}
      />
    );
  }
  return <h1>{content.attributes.title}</h1>;
};

export default ({
  title: 'Heading',
  defaultLayout: { w: 100, h: 3 },
  defaultContent: {
    type: 'heading',
    attributes: { title: 'This is a new Heading' },
  },
  render: Heading,
} as unknown) as CustomComponent;
