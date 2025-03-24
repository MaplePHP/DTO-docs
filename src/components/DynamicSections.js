import React from "react";
import CodeBlock from "@theme/CodeBlock";
import ReactMarkdown from "react-markdown"; // Use react-markdown

export default function DynamicSections({sections}) {
  const [sortedSections] = React.useState(sections);
  /*
  // Sort by name
  const sortedSections = React.useMemo(() => [...sections].sort((a, b) =>
      a.title.localeCompare(b.title)
  ));
   */

  return (
    <div>
      <nav>
        <ul className={"column-list mb-2 column-gap"}>
          {sortedSections.map((section) => (
            <li key={section.title}>
              <a href={`#${section.title.toLowerCase().replace(/\s+/g, "-")}`}>
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {sortedSections.map((section) => (
        <div className={"item"} key={section.title} id={section.title.toLowerCase().replace(/\s+/g, "-")}>
          <h2>{section.title}</h2>
          <ReactMarkdown>{section.content}</ReactMarkdown>
          {section?.args && (
            <>
              <h3 className={"text-md"}>Arguments</h3>
              <ReactMarkdown>{section.args}</ReactMarkdown>
            </>
          )}
          <CodeBlock language="php">{section.code.trim()}</CodeBlock>
          {section?.result && (
            <>
              <h3 className={"text-md"}>Result:</h3>
              <pre>{section.result.trim()}</pre>
            </>
          )}

        </div>
      ))}
    </div>
  );
}
