import React from 'react';
import { Layout } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
export interface IContent {
    id: string;
    type: string;
    attributes: any;
}
interface IComponent {
    layouts: Layout[];
    contents: IContent[];
}
interface SmartEditorProps {
    editorComponents: IComponent;
    onChange: (newComponent: IComponent) => void;
}
declare const SmartEditor: React.SFC<SmartEditorProps>;
export { SmartEditor };
//# sourceMappingURL=index.d.ts.map