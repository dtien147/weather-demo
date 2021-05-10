import React from 'react';
import './index.css';

export default function Input(props) {
  const { onChange, value, defaultValue, placeholder, dataTestId } = props;

  return (
    <div className="input-container">
      <input
        className="input"
        onChange={onChange}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        data-testid={dataTestId}
      />
    </div>
  );
}
