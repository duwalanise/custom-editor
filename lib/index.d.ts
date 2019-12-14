import React from 'react';
import { Layouts, Layout } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
interface IContent {
    id: string;
    type: string;
    attributes: any;
}
interface SmartEditorProps {
    editorComponents: {
        layout: Layout;
        content: IContent;
    }[];
    onLayoutChange: (layout: Layout[], allLayouts: Layouts) => void;
}
declare const SmartEditor: React.SFC<SmartEditorProps>;
export { SmartEditor };
//# sourceMappingURL=index.d.ts.map