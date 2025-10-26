import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ language = "javascript", code }: CodeBlockProps) {
  return (
    <SyntaxHighlighter
      language={language}
      style={atomOneDark}
      showInlineLineNumbers
    >
      {code}
    </SyntaxHighlighter>
  );
}
