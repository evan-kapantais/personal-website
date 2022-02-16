import * as React from "react";
import { Link } from "gatsby";

import Seo from "../components/seo";

import * as s from "../styles/notFound.module.css";

const NotFoundPage = () => {
  return (
    <div className={s.page}>
      <Seo title="404: Not Found" />
      <section>
        <h1>
          404: Not Found<span className={s.cursor}>_</span>
        </h1>
        <p>The page you&#39;re looking for doesn&#39;t exist — sad.</p>
        <Link to="/">Let&#39;s go back home.</Link>
      </section>
    </div>
  );
};

export default NotFoundPage;
