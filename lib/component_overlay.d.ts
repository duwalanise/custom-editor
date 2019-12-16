import React from 'react';
import { CustomComponent } from './toolbox';
import { IContent } from '.';
interface ComponentOverlayProps {
    component: CustomComponent;
    content: IContent;
    isActive: boolean;
    onAdd: (component: CustomComponent) => () => void;
    onRemove: (content: IContent) => () => void;
}
declare const ComponentOverlay: React.FC<ComponentOverlayProps>;
export default ComponentOverlay;
//# sourceMappingURL=component_overlay.d.ts.map