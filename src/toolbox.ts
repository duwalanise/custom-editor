import { IContent } from './index';
import { Layout } from 'react-grid-layout';
import paragraph from './components/paragraph';
import heading from './components/heading';

export interface CustomComponentRenderProps {
  content: IContent;
  isActive?: boolean;
  onChangeContent: (content: IContent) => void;
}

export interface CustomComponent {
  title: string;
  defaultLayout: Partial<Layout>;
  defaultContent: Partial<IContent>;
  render: React.ComponentType<CustomComponentRenderProps>;
}

interface CustomComponents {
  [key: string]: CustomComponent;
}

// add custom created components over here
export const CustomComponents: CustomComponents = {
  paragraph,
  heading,
};

export default (type: string) => {
  return CustomComponents[type];
};
