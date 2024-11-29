import React from 'react';

const Editor = ({ value, onChange }) => {
  return (
    <div className="editor-container">
      <h2>Editor</h2>
      <textarea
        id="editor"
        value={value}
        onChange={onChange}
        placeholder="Type your markdown here..."
      />
    </div>
  );
};

export default Editor;
