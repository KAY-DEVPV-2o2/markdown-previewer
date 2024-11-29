import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Markdown Previewer', () => {
  test('renders Editor and Preview containers', () => {
    render(<App />);
    const editorElement = screen.getByText(/Editor/i);
    const previewElement = screen.getByText(/Preview/i);

    expect(editorElement).toBeInTheDocument();
    expect(previewElement).toBeInTheDocument();
  });

  test('textarea has correct initial content', () => {
    render(<App />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveValue(
      `\n# Markdown Previewer\n\n## Subheading\n[FreeCodeCamp](https://www.freecodecamp.org/)\n\n\`Inline code\`\n\n\`\`\`\nCode block\n\`\`\`\n\n- List item 1\n- List item 2\n\n> Blockquote\n\n![React Logo](https://reactjs.org/logo-og.png)\n\n**Bold text**`
    );
  });

  test('updates preview as user types', () => {
    render(<App />);
    const textarea = screen.getByRole('textbox');
    fireEvent.change(textarea, { target: { value: '# New Heading' } });
    const preview = screen.getByText(/New Heading/i);

    expect(preview).toBeInTheDocument();
  });

  test('renders Markdown as HTML in preview', () => {
    render(<App />);
    const preview = screen.getByTestId('preview');
    expect(preview.innerHTML).toContain('<h1>Markdown Previewer</h1>');
  });
});
