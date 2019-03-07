import React from "react";
import Helmet from "react-helmet";

import Layout from "../components/Layout";

export const Home = () => (
  <Layout>
    <Helmet
      title="Home | Heather Turano Coaching"
      bodyAttributes={{ class: "" }}
    />
    <div>Home Page Here (Turn into template)</div>
  </Layout>
);

export default Home;
