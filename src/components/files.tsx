import React, { useState } from 'react';
import ReactFilepicker from 'react-filepicker';
import { CustomComponent, CustomComponentRenderProps } from '../toolbox';

interface IFile {
  url: string;
  filename: string;
  mimetype: string;
}

const File: React.FC<CustomComponentRenderProps> = ({
  content,
  isActive,
  onChangeContent,
}) => {
  const file = content.attributes.file;

  const onSuccess = (newFile: IFile) => {
    onChangeContent({
      ...content,
      attributes: {
        ...content.attributes,
        file: {
          url: newFile.url,
          filename: newFile.filename,
          mimetype: newFile.mimetype,
        },
      },
    });
  };

  if (!file) {
    return (
      <ReactFilepicker
        apikey={process.env.REACT_APP_FILESTACK_API_KEY}
        onSuccess={onSuccess}
        buttonText="Upload"
        buttonClass="upload-file-button"
      />
    );
  }

  return (
    <div>
      <a href={file.url}>{file.filename}</a>
    </div>
  );
};

export default ({
  title: 'File',
  defaultLayout: { w: 20, h: 4 },
  defaultContent: {
    type: 'File',
    attributes: {},
  },
  render: File,
} as unknown) as CustomComponent;