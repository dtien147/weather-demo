import React, { useState } from 'react';
import { useDebounce, useSearch } from 'hooks';
import Input from '../Input';
import './index.css';
import SelectList from '../SelectList';

const TEST_ID = 'search';

export default function Search(props) {
  const {
    onSelect
  } = props;

  const [text, setText] = useState('');

  const debouncedText = useDebounce(text);
  const {
    loading,
    cities,
    error,
  } = useSearch(debouncedText);

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const handleSelectCity = (city) => {
    setText('');
    onSelect(city);
  };

  return (
    <div className="search-container" data-testid={TEST_ID}>
      <Input onChange={handleChangeText} value={text} placeholder="Search Location" dataTestId="search-input" />
      {error && !loading && <div className="error-message">
        {error}
      </div>}
      { !error && !loading && cities && <SelectList data={cities} onSelect={handleSelectCity} />}
    </div>
  );
}

Search.testId = TEST_ID;
