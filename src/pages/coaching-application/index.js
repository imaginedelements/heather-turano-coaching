import React from "react";

import { Layout, Section } from "../../components";
import { Paragraph } from "../../components/Typography";

const CoachingApplication = () => (
  <Layout>
    <div style={{ marginTop: "50px" }} />
    <Section title="Coaching Application" styleType="default">
      <Paragraph>
        Welcome! Please fill out this form below and I'll be in touch as soon as
        possible to setup a 90-minute discover session!
      </Paragraph>
      <Paragraph>- Heather</Paragraph>
    </Section>
  </Layout>
);

export default CoachingApplication;
