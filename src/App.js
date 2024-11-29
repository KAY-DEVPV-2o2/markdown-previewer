import React, { useState } from 'react';
import marked from 'marked';
import './App.css';

function App() {
  // Initial markdown text with a variety of elements for testing
  const initialMarkdown = `# Heading 1
## Heading 2
[Link to FreeCodeCamp](https://www.freecodecamp.org)
\`Inline code\`
\`\`\`
Code block
\`\`\`
- List item 1
- List item 2
> Blockquote
![Image](https://via.placeholder.com/150)
**Bold text**`;

  const [markdown, setMarkdown] = useState(initialMarkdown);

  // Function to update the preview as user types
  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  // Custom function to add <br> for carriage returns
  const renderMarkdownWithLineBreaks = (markdownText) => {
    const rawHTML = marked.parse(markdownText);
    // Replace carriage returns with <br />
    return rawHTML.replace(/(?:\r\n|\n|\r)/g, '<br />');
  };

  return (
    <div className="App">
      <textarea
        id="editor"
        value={markdown}
        onChange={handleChange}
        placeholder="Type your markdown here..."
      />
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: renderMarkdownWithLineBreaks(markdown) }}
      />
    </div>
  );
}

export default App;
