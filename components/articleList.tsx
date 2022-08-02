import Link from "next/link";

// icon source: https://iconoir.com/

const articles = [
  {
    slug: "fonts-linux",
    title: "Font Settings in Linux Distros Suck – Write Your Own font.conf",
    excerpt: `There are good, free, and open-source typefaces that blend better in the web context than many default choices.`,
    icon: `
      <svg width="19" height="19" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.5 6L10 18.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M6.5 8.5L3 12L6.5 15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M17.5 8.5L21 12L17.5 15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `,
  },
  {
    slug: "crowd",
    title: "Old Programming Wisdom Beats Crowdsourced Advice",
    excerpt: `
    An average set of methods of the top 50% of professionals is a way different thing
    than what you get by analyzing how the top 10% operates.`,
    icon: `
      <svg width="19" height="19" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21V7C12 5.89543 12.8954 5 14 5H21.4C21.7314 5 22 5.26863 22 5.6V18.7143" stroke="currentColor"   stroke-linecap="round"/>
      <path d="M12 21V7C12 5.89543 11.1046 5 10 5H2.6C2.26863 5 2 5.26863 2 5.6V18.7143" stroke="currentColor"   stroke-linecap="round"/>
      <path d="M14 19L22 19" stroke="currentColor"   stroke-linecap="round"/>
      <path d="M10 19L2 19" stroke="currentColor"   stroke-linecap="round"/>
      <path d="M12 21C12 19.8954 12.8954 19 14 19" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 21C12 19.8954 11.1046 19 10 19" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `,
  },
  {
    slug: "future",
    title: "Kinda Predicting the Future: the Internet and the Lindy Effect",
    excerpt: `
      No one knows the future, but there are some pretty clear patterns worth exploring.
      One of them is human nature and Lindy Effect. Powerful things when combined.`,
    icon: `
      <svg width="19" height="19" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 2L15 2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 10L12 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 22C16.4183 22 20 18.4183 20 14C20 9.58172 16.4183 6 12 6C7.58172 6 4 9.58172 4 14C4 18.4183 7.58172 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `,
  },
  {
    slug: "resilient-ui",
    title: "5 Notes on How to Design a Resilient UI",
    excerpt: `
      ...It brings us to the problem of editing an already working thing. In the wild.
      It happens all the time. Don't think you can predict the future.
      You need to design your software with ease of modification in mind.`,
    icon: `
      <svg width="19" height="19" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 14L16 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8 10L10 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8 18L12 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10 3H6C4.89543 3 4 3.89543 4 5V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V5C20 3.89543 19.1046 3 18 3H14.5M10 3V1M10 3V5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `,
  },
  {
    slug: "complexity",
    title:
      "We're so Bad at Judging Complexity, yet We Like to Predict (Getting Perspective on Complexity)",
    excerpt: `
      Living in a bubble, the unavoidable one, makes us misjudge what are the most complex things we have to face.`,
    icon: `
      <svg width="19" height="19" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="21" width="7" height="5" rx="0.6" transform="rotate(-90 2 21)" stroke="currentColor" stroke-width="1.5"/>
      <rect x="17" y="15.5" width="7" height="5" rx="0.6" transform="rotate(-90 17 15.5)" stroke="currentColor" stroke-width="1.5"/>
      <rect x="2" y="10" width="7" height="5" rx="0.6" transform="rotate(-90 2 10)" stroke="currentColor" stroke-width="1.5"/>
      <path d="M7 17.5H10.5C11.6046 17.5 12.5 16.6046 12.5 15.5V8.5C12.5 7.39543 11.6046 6.5 10.5 6.5H7" stroke="currentColor" stroke-width="1.5"/>
      <path d="M12.5 12H17" stroke="currentColor" stroke-width="1.5"/>
      </svg>    
    `,
  },
  {
    slug: "henry-ford-for-makers",
    title: "Henry Ford for Makers: Quotes on Design",
    excerpt: `
      “Nearly everything that we make is much more complex than it needs to be”`,
    icon: `
      <svg width="19" height="19" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 20.2895V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V15C21 16.1046 20.1046 17 19 17H7.96125C7.35368 17 6.77906 17.2762 6.39951 17.7506L4.06852 20.6643C3.71421 21.1072 3 20.8567 3 20.2895Z" stroke="currentColor"  />
      <path d="M10.5 10H8.5C7.94772 10 7.5 9.55228 7.5 9V8C7.5 7.44772 7.94772 7 8.5 7H9.5C10.0523 7 10.5 7.44772 10.5 8V10ZM10.5 10C10.5 11 9.5 12 8.5 13" stroke="currentColor"   stroke-linecap="round"/>
      <path d="M16.5 10H14.5C13.9477 10 13.5 9.55228 13.5 9V8C13.5 7.44772 13.9477 7 14.5 7H15.5C16.0523 7 16.5 7.44772 16.5 8V10ZM16.5 10C16.5 11 15.5 12 14.5 13" stroke="currentColor"   stroke-linecap="round"/>
      </svg>
    `,
  },
];

const svgArrow: string = `
  <svg width="19" height="19" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 12H18.5M18.5 12L12.5 6M18.5 12L12.5 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;

const listItems = articles.map((article) => (
  <li key={article.slug} className="mb-4 list-none ml-0">
    <Link href={article.slug}>
      <a className="no-underline font-normal">
        <span
          className="inline-block align-middle text-brand-blue"
          dangerouslySetInnerHTML={{ __html: article.icon }}
        ></span>
        <br />
        <h3 className="text-base m-0">
          {article.title}
          &ensp;
          <span
            className="inline-block align-middle text-brand-blue"
            dangerouslySetInnerHTML={{ __html: svgArrow }}
          ></span>
        </h3>
        <p className="text-sm text-gray-600 mt-2">{article.excerpt}</p>
      </a>
    </Link>
  </li>
));

function ArticleList() {
  return (
    <section className="article-list">
      <h2 className="text-base">Articles:</h2>
      <ul>{listItems}</ul>
    </section>
  );
}

export default ArticleList;
