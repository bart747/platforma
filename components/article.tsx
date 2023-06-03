import Head from "next/head";
import Footer from "../components/footer";
import Navigation from "../components/navigation";

interface ArticleProps {
  title: string;
  htmlContent: string;
}

function ArticlePage(props: ArticleProps) {
  return (
    <div className="container mx-auto max-w-xl">
      <Head>
        <title>{props.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <article>
        <div dangerouslySetInnerHTML={{__html: props.htmlContent}}></div>
      </article>
      <Footer />
    </div>
  );
}

export default ArticlePage;
