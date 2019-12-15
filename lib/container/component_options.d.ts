import React from 'react';
import { CustomComponent } from '../toolbox';
interface ComponentOptionsProps {
    onSelect: (component: CustomComponent) => () => void;
}
declare const ComponentOptions: React.FC<ComponentOptionsProps>;
export default ComponentOptions;
//# sourceMappingURL=component_options.d.ts.map