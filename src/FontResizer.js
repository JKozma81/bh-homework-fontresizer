import React from 'react';

export default function FontResizer(props) {
  return (
    <>
      <button data-btn="up" onClick={e => props.handleClick(e)}>
        +
      </button>
      <button data-btn="down" onClick={e => props.handleClick(e)}>
        -
      </button>
    </>
  );
}
