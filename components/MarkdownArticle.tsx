import type { ReactNode } from "react";

type Block =
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "paragraph"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] }
  | { type: "rule" };

export function MarkdownArticle({ content }: { content: string }) {
  return <div className="journal-article__body">{parseMarkdown(content).map(renderBlock)}</div>;
}

function parseMarkdown(content: string): Block[] {
  const blocks: Block[] = [];
  const lines = content.split("\n");
  let paragraph: string[] = [];
  let quote: string[] = [];
  let list: string[] = [];

  const flushParagraph = () => {
    const text = paragraph.join(" ").trim();
    if (text) blocks.push({ type: "paragraph", text });
    paragraph = [];
  };

  const flushQuote = () => {
    const text = quote.join(" ").trim();
    if (text) blocks.push({ type: "quote", text });
    quote = [];
  };

  const flushList = () => {
    if (list.length > 0) blocks.push({ type: "list", items: list });
    list = [];
  };

  const flushAll = () => {
    flushParagraph();
    flushQuote();
    flushList();
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      flushAll();
      continue;
    }

    if (line === "---") {
      flushAll();
      blocks.push({ type: "rule" });
      continue;
    }

    const heading = /^(#{1,6})\s+(.+)$/.exec(line);
    if (heading) {
      flushAll();
      blocks.push({
        type: "heading",
        level: heading[1].length === 1 ? 2 : 3,
        text: stripInlineMarkers(heading[2]),
      });
      continue;
    }

    if (line.startsWith(">")) {
      flushParagraph();
      flushList();
      quote.push(line.replace(/^>\s?/, ""));
      continue;
    }

    if (line.startsWith("* ")) {
      flushParagraph();
      flushQuote();
      list.push(line.slice(2).trim());
      continue;
    }

    flushQuote();
    flushList();
    paragraph.push(line);
  }

  flushAll();
  return blocks;
}

function renderBlock(block: Block, index: number) {
  if (block.type === "heading") {
    const Heading = block.level === 2 ? "h2" : "h3";
    return <Heading key={index}>{renderInline(block.text)}</Heading>;
  }

  if (block.type === "quote") {
    return <blockquote key={index}>{renderInline(block.text)}</blockquote>;
  }

  if (block.type === "list") {
    return (
      <ul key={index}>
        {block.items.map((item) => (
          <li key={item}>{renderInline(item)}</li>
        ))}
      </ul>
    );
  }

  if (block.type === "rule") {
    return <hr key={index} />;
  }

  return <p key={index}>{renderInline(block.text)}</p>;
}

function stripInlineMarkers(text: string) {
  return text.replace(/\*\*/g, "").replace(/\*/g, "");
}

function renderInline(text: string, keyPrefix = "inline"): ReactNode[] {
  const nodes: ReactNode[] = [];
  let index = 0;
  let part = 0;

  while (index < text.length) {
    const boldStart = text.indexOf("**", index);
    const italicStart = text.indexOf("*", index);
    const useBold = boldStart !== -1 && (italicStart === -1 || boldStart <= italicStart);
    const start = useBold ? boldStart : italicStart;
    const marker = useBold ? "**" : "*";

    if (start === -1) {
      nodes.push(text.slice(index));
      break;
    }

    if (start > index) {
      nodes.push(text.slice(index, start));
    }

    const end = text.indexOf(marker, start + marker.length);
    if (end === -1) {
      nodes.push(text.slice(start));
      break;
    }

    const inner = text.slice(start + marker.length, end);
    const key = `${keyPrefix}-${part}`;
    nodes.push(useBold ? <strong key={key}>{renderInline(inner, key)}</strong> : <em key={key}>{inner}</em>);
    index = end + marker.length;
    part += 1;
  }

  return nodes;
}
