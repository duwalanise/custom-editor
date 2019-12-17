import { IContent } from './index';
import { Layout } from 'react-grid-layout';
import paragraph from './components/paragraph';
import heading from './components/heading';
import video from './components/video';
import todo from './components/todo';

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
  video,
  todo,
};

export default (type: string) => {
  return CustomComponents[type];
};
