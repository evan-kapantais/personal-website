import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

import * as styles from "../styles/contact.module.css";

const ContactPage = () => {
  return (
    <Layout>
      <Seo title="Contact" />
      <div className={styles.container}>
        <h1>
          If you have an exciting project in mind or just want to say hi, feel
          free to send me an email at{" "}
          <a href="mailto:evankapantais@gmail.com" className="link">
            evankapantais@gmail.com
          </a>
          , or visit my social media right below.
        </h1>
      </div>
    </Layout>
  );
};

export default ContactPage;
