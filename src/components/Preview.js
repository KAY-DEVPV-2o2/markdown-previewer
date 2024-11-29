import React from 'react';
import { marked } from 'marked';

const Preview = ({ content }) => {
  // Configure marked options to interpret carriage returns as <br> elements
  marked.setOptions({
    gfm: true,
    breaks: true  // Enables interpreting line breaks as <br> elements
  });

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
