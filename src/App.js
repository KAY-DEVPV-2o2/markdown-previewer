import React, { useState } from 'react';
import './App.css';
import Editor from './components/Editor';
import Preview from './components/Preview';
import Footer from './components/Footer';

function App() {
  const initialMarkdown = `
# Welcome to My React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

[FreeCodeCamp](https://www.freecodecamp.org/)

\`Inline code\`

\`\`\`
Code block
\`\`\`

- List item 1
- List item 2

> Blockquote

![React Logo](https://reactjs.org/logo-og.png)

**Bold text**
`;

  const [markdown, setMarkdown] = useState(initialMarkdown);

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div className="app">
      <header>
        <h1 className="app-title">Markdown Previewer</h1>
      </header>
      <main>
        <Editor value={markdown} onChange={handleChange} />
        <Preview content={markdown} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
