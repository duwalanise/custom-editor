import { IContent } from './index';
import { Layout } from 'react-grid-layout';
import Paragraph from './components/paragraph';
import Heading from './components/heading';
import Video from './components/video';
import Todo from './components/todo';
import File from './components/files';
import Image from './components/image';
import FroalaEditor from './components/editor';

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
  Paragraph,
  Heading,
  Video,
  Todo,
  FroalaEditor,
  File,
  Image,
};

export default (type: string) => {
  return CustomComponents[type];
};
