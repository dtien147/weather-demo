import React from 'react';
import './index.css';
import SelectListItem from '../SelectListItem';

export default function SelectList(props) {
  const {
    onSelect,
    data,
  } = props;

  return (
    <div className="select-list">
      {data.slice(0, 10).map(item => (
        <SelectListItem
          key={item.id}
          data={item}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
