import { GetStaticProps, GetStaticPaths } from "next";
import ArticlePage from "../components/article";
import codeHighlight from "../util/codeHighlight";
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'

const source: string = "https://raw.githubusercontent.com/bart747/notebook/main/articles/"

interface ArticleProps {
  title: string;
  htmlContent: string;
}

function article(props: ArticleProps) {
  return <ArticlePage title={props.title} htmlContent={props.htmlContent} />;
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const fileName = `${params.mdslug}.md`;
  const res = await fetch(`${source}${fileName}`);
  const text = await res.text();

  // 'unified' is an interface for parsing, inspecting, transforming,
  // and serializing content through syntax trees.
  const MDtoHTML: any = await unified()
    // parse Markdown
    .use(remarkParse)
    // process HTML
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(text.replace(/\`\`\`([\s\S]+?)\`\`\`/g, codeHighlight))

  const htmlContent = MDtoHTML.value
  const title = text.split("\n")[0].replace("# ", "");

  return {
    props: {
      htmlContent,
      title,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { mdslug: "complexity" } },
      { params: { mdslug: "crowd" } },
      { params: { mdslug: "resilient-ui" } },
      { params: { mdslug: "future" } },
      { params: { mdslug: "henry-ford-for-makers" } },
      { params: { mdslug: "fonts-linux" } },
    ],
    fallback: false,
  };
};

export default article;
