import React from "react";
import { Link } from "gatsby";

import * as styles from "../styles/postcard.module.css";

const PostCard = ({ post }) => {
  const title = post.frontmatter.title || post.fields?.slug;

  console.log(post);

  return (
    <li key={post.fields?.slug} className={styles.post}>
      <article itemScope itemType="http://schema.org/Article">
        <header className={styles.header}>
          <div>
            <h2 className={styles.title}>
              <Link to={post.fields?.slug} itemProp="url">
                <span itemProp="headline">{title}</span>
              </Link>
            </h2>
            <small className={styles.date}>
              {post.frontmatter.date} • {post.timeToRead} minute read
            </small>
          </div>
          <ol>
            {post.frontmatter.tags.map(tag => (
              <li key={post.slug} className={styles.tag}>
                <Link to={`/scribblings/tags/${tag}`}>#{tag}</Link>
              </li>
            ))}
          </ol>
        </header>
        <section>
          <p
            dangerouslySetInnerHTML={{
              __html: post.frontmatter.description || post.excerpt,
            }}
            itemProp="description"
            className={styles.excerpt}
          />
        </section>
      </article>
    </li>
  );
};

export default PostCard;
