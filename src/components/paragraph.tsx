import React from 'react';
import { CustomComponent } from '../toolbox';

const Paragraph: React.FC<{ attributes: any }> = ({ attributes }) => {
  return <p>{attributes.title}</p>;
};

export default ({
  title: 'Paragraph',
  defaultLayout: { x: 1, y: 0, w: 100, h: 5 },
  defaultContent: {
    type: 'paragraph',
    attributes: { title: 'This is a new Paragraph' },
  },
  render: (attributes: any) => <Paragraph attributes={attributes} />,
} as unknown) as CustomComponent;
