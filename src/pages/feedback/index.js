import React from "react";

import { Layout, Section } from "../../components";
import { Paragraph } from "../../components/Typography";

const Feedback = () => (
  <Layout>
    <div style={{ marginTop: "50px" }} />
    <Section title="I'd love your feedback!" styleType="default">
      <Paragraph>
        Welcome! Please fill out this form below and I'll be in touch as soon as
        possible to setup a 90-minute discover session!
      </Paragraph>
    </Section>
  </Layout>
);

export default Feedback;
