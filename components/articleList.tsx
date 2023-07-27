import Link from "next/link";

const articles = [
  {
    slug: "fonts-linux",
    title: "Font Settings in Linux Distros Suck – Write Your Own font.conf",
    excerpt: `There are good, free, and open-source typefaces that blend better in the web context than many default choices.`,
  },
  {
    slug: "crowd",
    title: "Old Programming Wisdom Beats Crowdsourced Advice",
    excerpt: `
    An average set of methods of the top 50% of professionals is a way different thing
    than what you get by analyzing how the top 10% operates.`,
  },
  {
    slug: "future",
    title: "Kinda Predicting the Future: the Internet and the Lindy Effect",
    excerpt: `
      No one knows the future, but there are some pretty clear patterns worth exploring.
      One of them is human nature and Lindy Effect. Powerful things when combined.`,
  },
  {
    slug: "resilient-ui",
    title: "5 Notes on How to Design a Resilient UI",
    excerpt: `
      ...It brings us to the problem of editing an already working thing. In the wild.
      It happens all the time. Don't think you can predict the future.
      You need to design your software with ease of modification in mind.`,
  },
  {
    slug: "complexity",
    title:
      "We're so Bad at Judging Complexity, yet We Like to Predict (Getting Perspective on Complexity)",
    excerpt: `
      Living in a bubble, the unavoidable one, makes us misjudge what are the most complex things we have to face.`,
  },
  {
    slug: "henry-ford-for-makers",
    title: "Henry Ford for Makers: Quotes on Design",
    excerpt: `
      “Nearly everything that we make is much more complex than it needs to be”`,
  },
];

const svgArrow: string = `
  <svg width="19" height="19" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 12H18.5M18.5 12L12.5 6M18.5 12L12.5 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;

const listItems = articles.map((article) => (
  <li key={article.slug} className="mb-8 list-none ml-0">
    <Link href={article.slug} passHref className="no-underline font-normal">
      <h3 className="text-base m-0">
        {article.title}
        &ensp;
        <span
          className="inline-block align-middle text-brand-blue"
          dangerouslySetInnerHTML={{ __html: svgArrow }}
        ></span>
      </h3>
      <p className="text-sm text-gray-400 mt-2">{article.excerpt}</p>
    </Link>
  </li>
));

function ArticleList() {
  return (
    <section className="article-list my-10 max-w-xl">
      <h2 className="text-base mb-8">Articles:</h2>
      <ul>{listItems}</ul>
    </section>
  );
}

export default ArticleList;
