import React, { useState } from 'react';
import { CustomComponent, CustomComponentRenderProps } from '../toolbox';
import { IContent } from '..';

const Paragraph: React.FC<CustomComponentRenderProps> = ({
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
        style={{ fontSize: '1em' }}
      />
    );
  }
  return <p>{content.attributes.title}</p>;
};

export default ({
  title: 'Paragraph',
  defaultLayout: { w: 100, h: 2 },
  defaultContent: {
    type: 'Paragraph',
    attributes: { title: 'This is a new Paragraph' },
  },
  render: Paragraph,
} as unknown) as CustomComponent;
