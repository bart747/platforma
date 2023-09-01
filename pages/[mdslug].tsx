import { GetStaticProps, GetStaticPaths } from "next";
import ArticlePage from "../components/article";
import codeHighlight from "../util/codeHighlight";
import {unified} from 'unified'
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
  const fileName: string = `${params.mdslug}.md`;
  const res: any = await fetch(`${source}${fileName}`);
  const text: string = await res.text();

  const MDtoHTML: any = await unified()
    .use(remarkParse)
    .use(remarkRehype, {allowDangerousHtml: true})
    .use(rehypeStringify, {allowDangerousHtml: true})
    .process(text.replace(/\`\`\`([\s\S]+?)\`\`\`/g, codeHighlight))

  const htmlContent: string = MDtoHTML.value
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
