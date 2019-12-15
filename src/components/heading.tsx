import React from 'react';
import { CustomComponent } from '../toolbox';

const Heading: React.FC<{ attributes: any }> = ({ attributes }) => {
  return <h1>{attributes.title}</h1>;
};

export default ({
  title: 'Heading',
  defaultLayout: { x: 1, y: 0, w: 100, h: 5 },
  defaultContent: {
    type: 'heading',
    attributes: { title: 'This is a new Heading' },
  },
  render: (attributes: any) => <Heading attributes={attributes} />,
} as unknown) as CustomComponent;
