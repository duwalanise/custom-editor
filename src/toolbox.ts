import { IContent } from './index';
import { Layout } from 'react-grid-layout';

export interface CustomComponent {
  title: string;
  defaultLayout: Partial<Layout>;
  defaultContent: Partial<IContent>;
  render: (attributes: any) => React.Component;
}

interface CustomComponents {
  [key: string]: CustomComponent;
}

// add custom created components over here
export const CustomComponents: CustomComponents = {
  paragraph: {
    title: 'Paragraph',
    defaultLayout: { x: 1, y: 0, w: 100, h: 5 },
    defaultContent: { type: 'paragraph', attributes: { title: 'Hello there' } },
    render: (attributes: any) => {
      return attributes.title;
    },
  },
};

export default (type: string) => {
  return CustomComponents[type];
};
