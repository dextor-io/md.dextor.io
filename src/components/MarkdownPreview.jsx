import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import remarkSuperscript from "remark-supersub";

const MarkdownPreview = ({ markdown }) => {
  return (
    <div className="w-full">
      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">Preview</label>
      </div>
      <div className="prose max-w-none p-6 h-[calc(100vh-250px)] border-2 rounded-lg shadow-sm bg-white overflow-y-auto">
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkBreaks, remarkSuperscript]}
          className="markdown-body"
          components={{
            h1: ({ node, ...props }) => (
              <h1 className="text-2xl font-bold mb-4" {...props} />
            ),
            h2: ({ node, ...props }) => (
              <h2 className="text-xl font-bold mt-6 mb-3" {...props} />
            ),
            h3: ({ node, ...props }) => (
              <h3 className="text-lg font-bold mt-4 mb-2" {...props} />
            ),
            p: ({ node, ...props }) => (
              <p className="mb-4 leading-relaxed text-gray-700" {...props} />
            ),
            strong: ({ node, ...props }) => (
              <strong className="font-bold" {...props} />
            ),
            em: ({ node, ...props }) => <em className="italic" {...props} />,
            del: ({ node, ...props }) => (
              <del className="line-through" {...props} />
            ),
            hr: ({ node, ...props }) => (
              <hr className="my-8 border-t-2 border-gray-200" {...props} />
            ),
            a: ({ node, ...props }) => (
              <a
                className="text-blue-600 hover:text-blue-800 underline"
                {...props}
              />
            ),
            img: ({ node, ...props }) => (
              <img
                className="max-w-full h-auto rounded-lg shadow-md my-4"
                {...props}
              />
            ),
            blockquote: ({ node, ...props }) => (
              <blockquote
                className="border-l-4 border-gray-200 pl-4 py-2 my-4 bg-gray-50 rounded"
                {...props}
              />
            ),
            ul: ({ node, ordered, depth = 0, ...props }) => (
              <ul
                className={`mb-4 space-y-1 list-disc ml-${depth * 4} pl-4`}
                {...props}
              />
            ),
            ol: ({ node, depth = 0, ...props }) => (
              <ol
                className={`list-decimal mb-4 space-y-1 ml-${depth * 4} pl-4`}
                {...props}
              />
            ),
            li: ({ node, ordered, depth = 0, ...props }) => (
              <li className={`ml-${depth * 4} relative`} {...props} />
            ),
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline ? (
                <pre className="bg-gray-50 p-3 rounded overflow-x-auto my-3">
                  <code className={`${className} block text-sm`} {...props}>
                    {children}
                  </code>
                </pre>
              ) : (
                <code
                  className="bg-gray-50 px-1.5 py-0.5 rounded text-sm font-mono"
                  {...props}
                >
                  {children}
                </code>
              );
            },
            table: ({ node, ...props }) => (
              <div className="overflow-x-auto my-4">
                <table
                  className="min-w-full border border-gray-200 rounded"
                  {...props}
                />
              </div>
            ),
            th: ({ node, ...props }) => (
              <th
                className="border border-gray-200 px-3 py-2 bg-gray-50"
                {...props}
              />
            ),
            td: ({ node, ...props }) => (
              <td className="border border-gray-200 px-3 py-2" {...props} />
            ),
            input: ({ node, type, checked, ...props }) => {
              if (type === "checkbox") {
                return (
                  <input
                    type="checkbox"
                    checked={checked}
                    className="mr-2 rounded border-gray-300"
                    readOnly
                    {...props}
                  />
                );
              }
              return <input {...props} />;
            },
            sup: ({ node, ...props }) => (
              <sup className="text-xs align-super" {...props} />
            ),
          }}
        >
          {markdown?.trim() || ""}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownPreview;
