import React, { useState } from 'react';
import { CustomComponent, CustomComponentRenderProps } from '../toolbox';
import { uuid } from 'uuidv4';

interface checkItem {
  id?: string;
  val: string;
  checked: boolean;
}

const CheckItem: React.FC<{
  item: checkItem;
  handleKeyDown: any;
  onChange: any;
  onCheck: any;
}> = ({ item, handleKeyDown, onChange, onCheck }) => (
  <div className="checkbox-wrapper">
    <input
      type="checkbox"
      className="sc-checkbox"
      checked={item.checked}
      onChange={onCheck(item)}
    />
    <input
      type="text"
      value={item.val}
      className="sc-input-text"
      placeholder="type check item"
      onKeyUp={handleKeyDown(item)}
      onChange={onChange(item)}
    />
  </div>
);

const Todo: React.FC<CustomComponentRenderProps> = ({
  content,
  isActive,
  onChangeContent,
}) => {
  const [list, setList] = useState<checkItem[]>(content.attributes.list || []);
  const [newItem, setNewItem] = useState<checkItem>({
    val: '',
    checked: false,
  });

  const onChange = (item: checkItem) => (ev: any) => {
    if (item.id) {
      setList(
        list.map((itm) => ({
          ...itm,
          val: itm.id === item.id ? ev.target.value : itm.val,
        })),
      );
    } else {
      setNewItem({ ...newItem, val: ev.target.value });
    }
  };

  const onCheck = (item: checkItem) => (ev: any) => {
    if (item.id) {
      setList(
        list.map((itm) => ({
          ...itm,
          checked: itm.id === item.id ? ev.target.checked : itm.checked,
        })),
      );
    } else {
      setNewItem({ ...newItem, checked: ev.target.checked });
    }
  };

  const handleKeyDown = (item: checkItem) => (ev: any) => {
    if (ev.keyCode === 13) {
      if (item.id) {
        ev.target.blur();
      } else {
        setList(
          list.concat({
            id: uuid(),
            val: newItem.val,
            checked: newItem.checked,
          }),
        );
        setNewItem({ val: '', checked: false });
      }
      onChangeContent({
        ...content,
        attributes: { ...content.attributes, list },
      });
    }
  };

  return (
    <>
      {list.map((item) => (
        <CheckItem
          key={item.id}
          item={item}
          handleKeyDown={handleKeyDown}
          onChange={onChange}
          onCheck={onCheck}
        />
      ))}
      <CheckItem
        item={newItem}
        handleKeyDown={handleKeyDown}
        onChange={onChange}
        onCheck={onCheck}
      />
    </>
  );
};

export default ({
  title: 'Todo',
  defaultLayout: { w: 100, h: 3 },
  defaultContent: {
    type: 'Todo',
    attributes: { title: 'This is a new Heading' },
  },
  render: Todo,
} as unknown) as CustomComponent;
