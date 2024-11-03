import { useState } from "react";
import MarkdownEditor from "./components/MarkdownEditor";
import MarkdownPreview from "./components/MarkdownPreview";
import packageJson from "../package.json";

function App() {
  const [markdown, setMarkdown] = useState(`# Markdown Preview

## Basic Syntax

### Headings
# Heading 1
## Heading 2 
### Heading 3

### Emphasis
*Italic text* or _italic text_
**Bold text** or __bold text__
***Bold and italic*** or ___bold and italic___

### Lists
Unordered list:
- Item 1
- Item 2
    * Nested item
    * Another nested item
- Item 3

Ordered list:
1. First item
2. Second item
    1. Nested ordered item
    2. Another nested item
3. Third item

### Links and Images
[Visit GitHub](https://github.com)
![Sample Image](https://picsum.photos/200)

### Blockquotes
> This is a blockquote
> Multiple lines
>> Nested blockquote
> With *formatted* **text** inside

### Code
Inline \`code\` example with \`const x = 42;\`

\`\`\`javascript
// Code block
function hello() {
  console.log("Hello, World!");
}
\`\`\`

### Tables
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
| *Italic* | **Bold** | \`Code\` |

### Task Lists
- [x] Completed task
- [ ] Incomplete task
- [x] Task with **bold** text
- [ ] Task with *italic* text

### Horizontal Rule

---

### Footnotes
Here's a sentence with a footnote[^1].
And another footnote[^2].

[^1]: This is the first footnote.
[^2]: This is the second footnote with *formatting*.

### Strikethrough
~~Strikethrough text~~
~~Combined with **bold** and *italic*~~

### Superscript
X^2^ + Y^2^ = Z^2^

### Combined Examples
> A blockquote with a [link](https://example.com), some **bold text**,
> and a \`code snippet\` all in one.

1. List with mixed elements:
    - [ ] Unchecked task
    - [x] Checked task with ~~strikethrough~~
    - Item with *italic* and \`code\`
    - **Bold** item with [link](https://example.com)

\`\`\`python
# Code block with syntax highlighting
def greet(name):
    return f"Hello, {name}!"
\`\`\`

| Mixed | Formatting | Table |
|-------|------------|-------|
| *Italic* | **Bold** | \`Code\` |
| ~~Strike~~ | [Link](https://example.com) | > Quote |
`);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12 font-helveticaBold text-black">
          Markdown Editor ✨
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 md:order-1 order-2">
            <MarkdownEditor markdown={markdown} setMarkdown={setMarkdown} />
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 md:order-2 order-1">
            <MarkdownPreview markdown={markdown} />
          </div>
        </div>

        <footer className="border-t border-gray-200 mt-auto">
          <div className="max-w-7xl mx-auto py-8 px-4">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              <div className="flex items-center space-x-2">
                <p className="text-gray-600 text-lg">
                  Made with{" "}
                  <span className="text-red-500 animate-pulse">❤️</span> by{" "}
                  <a
                    href="https://labs.dextor.io/"
                    className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    Dextor Labs
                  </a>
                </p>
              </div>

              <div className="flex items-center space-x-6">
                <a
                  href="https://github.com/dextor-io/engrave.dextor.io"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                  aria-label="GitHub Repository"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                  </svg>
                </a>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-sm font-medium">
                  v{packageJson.version}
                </span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
