/// <reference types="react" />
import { IContent } from './index';
import { Layout } from 'react-grid-layout';
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
export declare const CustomComponents: CustomComponents;
declare const _default: (type: string) => CustomComponent;
export default _default;
//# sourceMappingURL=toolbox.d.ts.map