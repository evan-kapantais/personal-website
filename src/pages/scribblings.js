import * as React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import PostCard from "../components/PostCard";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allMarkdownRemark.nodes;

  // Remove this
  const tags = ["devlog", "webscraping", "react", "css", "howto", "api"];

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    );
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      {/* <section className="banner">
        <h1>
          {" "}
          <span>Scribblings</span> : writing about stuff I'm learning and
          working on.
        </h1>
      </section>
      <section className="options">
        <div>
          <h2>Filter by Category</h2>
          <ul className="tags">
            {tags.map(tag => (
              <li key={tag}>
                <Link to={`/scribblings/tags/${tag}`} className="tag">
                  #{tag}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Sort by</h2>
          <select name="sort" id="sort">
            <option value="date-desc">Publish Date (DESC)</option>
            <option value="date-asc">Publish Date (ASC)</option>
          </select>
        </div>
      </section>
      <section className="posts">
        <ol>
          {posts.map(post => (
            <PostCard post={post} />
          ))}
        </ol>
      </section> */}
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tags
        }
        timeToRead
      }
    }
  }
`;
