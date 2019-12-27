import React, { useState } from 'react';
import { CustomComponent, CustomComponentRenderProps } from '../toolbox';

const Video: React.FC<CustomComponentRenderProps> = ({
  content,
  isActive,
  onChangeContent,
}) => {
  const [title, setTitle] = useState<string>(content.attributes.title);
  const handleChange = (ev: any) => {
    setTitle(ev.target.value);
  };

  const getId = () => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = (content.attributes.title || '').match(regExp);

    return match && match[2].length === 11 ? match[2] : null;
  };

  const hanldeKeyDown = (ev: any) => {
    if (ev.keyCode === 13) {
      onChangeContent({
        ...content,
        attributes: { ...content.attributes, title },
      });
    }
  };
  if (!getId()) {
    return (
      <input
        value={title}
        onChange={handleChange}
        onKeyDown={hanldeKeyDown}
        placeholder="Paste link of youtube video"
      />
    );
  }

  return (
    <iframe
      src={`//www.youtube.com/embed/${getId()}`}
      frameBorder="0"
      allowFullScreen
    ></iframe>
  );
};

export default ({
  title: 'Video',
  defaultLayout: { w: 40, h: 10 },
  defaultContent: {
    type: 'Video',
    attributes: {},
  },
  render: Video,
} as unknown) as CustomComponent;
