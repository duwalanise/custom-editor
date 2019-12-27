import React, { useState } from 'react';

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

import FroalaEditorComponent from 'react-froala-wysiwyg';

import { CustomComponent, CustomComponentRenderProps } from '../toolbox';

const FroalaEditor: React.FC<CustomComponentRenderProps> = ({
  content,
  isActive,
  onChangeContent,
}) => {
  const [model, setModel] = useState<string>(content.attributes.model);
  const handleModelChange = (newModel: any) => {
    setModel(newModel);
    onChangeContent({
      ...content,
      attributes: { ...content.attributes, model: newModel },
    });
  };
  return (
    <FroalaEditorComponent
      tag="textarea"
      config={{
        placeHolder: 'Type here',
        toolbarInline: true,
        charCounterCount: false,
        toolbarVisibleWithoutSelection: true,
        // toolbarSticky: false,
      }}
      model={model}
      onModelChange={handleModelChange}
    />
  );
};

export default ({
  title: 'FroalaEditor',
  defaultLayout: { w: 50, h: 10 },
  defaultContent: {
    type: 'FroalaEditor',
    attributes: { model: 'This is a new FroalaEditor' },
  },
  render: FroalaEditor,
} as unknown) as CustomComponent;
