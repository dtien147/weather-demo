import React from 'react';
import './index.css';

const TEST_ID = 'select-list-item';

export default function SelectListItem(props) {
  const {
    onSelect,
    data,
  } = props;

  return (
    <div
      className="select-list-item"
      onClick={() => onSelect(data)}
      data-testid={TEST_ID}
    >
      {data.name}
    </div>
  );
}

SelectListItem.testId =TEST_ID;
