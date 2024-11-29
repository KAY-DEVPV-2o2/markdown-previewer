import React from 'react';
import { marked } from 'marked';

const Preview = ({ content }) => {
  // Use `dangerouslySetInnerHTML` to render raw HTML from markdown
  return (
    <div className="preview-container">
      <h2>Preview</h2>
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(content) }}
      />
    </div>
  );
};

export default Preview;
