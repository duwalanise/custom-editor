import React from 'react';
import { CustomComponent } from '../toolbox';

const Paragraph: React.FC<{ attributes: any; isActive?: boolean }> = ({
  attributes,
  isActive,
}) => {
  if (isActive) {
    return <input type="text" value={attributes.title} onChange={() => null} />;
  }
  return <p>{attributes.title}</p>;
};

export default ({
  title: 'Paragraph',
  defaultLayout: { x: 1, y: 0, w: 100, h: 5 },
  defaultContent: {
    type: 'paragraph',
    attributes: { title: 'This is a new Paragraph' },
  },
  render: Paragraph,
} as unknown) as CustomComponent;
