import React, { memo, useRef } from 'react';
import styles from './SearchHeader.module.css';

const SearchHeader = memo(({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };
  const onClickHandler = () => {
    handleSearch();
  };

  const onKeyPressHandler = event => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.logoImg} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>MoonTube</h1>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type="search"
        placeholder="Search..."
        onKeyPress={onKeyPressHandler}
      />
      <button className={styles.button} type="submit" onClick={onClickHandler}>
        <img className={styles.btnImg} src="/images/search.png" alt="search" />
      </button>
    </header>
  );
});

export default SearchHeader;
