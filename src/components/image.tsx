import React from 'react';
import ReactFilepicker from 'react-filepicker';
import { CustomComponent, CustomComponentRenderProps } from '../toolbox';

// const apiKey = 'AKrh6bR0mSMemDJxv7bXmz';

interface IFile {
  url: string;
  filename: string;
  mimetype: string;
}

const Image: React.FC<CustomComponentRenderProps> = ({
  content,
  isActive,
  onChangeContent,
}) => {
  const image = content.attributes.image;

  const onSuccess = (newImage: IFile) => {
    onChangeContent({
      ...content,
      attributes: {
        ...content.attributes,
        image: {
          url: newImage.url,
          filename: newImage.filename,
          mimetype: newImage.mimetype,
        },
      },
    });
  };

  if (!image || isActive) {
    return (
      <ReactFilepicker
        apikey={process.env.REACT_APP_FILESTACK_API_KEY}
        onSuccess={onSuccess}
        buttonText="Upload"
        buttonClass={`upload-file-button ${!!image && 'hide-button'}`}
        options={{
          mimetypes: ['image/*'],
        }}
      />
    );
  }

  return <img className="file-image-tag" src={image.url} alt="" />;
};

export default ({
  title: 'Image',
  defaultLayout: { w: 20, h: 4 },
  defaultContent: {
    type: 'Image',
    attributes: {},
  },
  render: Image,
} as unknown) as CustomComponent;
