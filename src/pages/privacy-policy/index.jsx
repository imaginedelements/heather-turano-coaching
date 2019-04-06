import React from "react";

import { Layout } from "../../components-gatsby";

import { Text } from "../../components/typography";

import { Section } from "../../components-app/layouts";

const PrivacyPolicy = () => (
  <Layout>
    <div style={{ marginTop: "50px" }} />
    <Section title="Privacy Policy" styleType="alt">
      <Text size="lg">
        Your privacy is important to us. It is Heather Turano Coaching LLC&aps;s
        policy to respect your privacy regarding any information we may collect
        from you across our website,{" "}
        <a href="http://heatherturanocoaching.com">
          http://heatherturanocoaching.com
        </a>
        , and other sites we own and operate.
      </Text>
      <Text size="lg">
        We only ask for personal information when we truly need it to provide a
        service to you. We collect it by fair and lawful means, with your
        knowledge and consent. We also let you know why we’re collecting it and
        how it will be used.
      </Text>
      <Text size="lg">
        We only retain collected information for as long as necessary to provide
        you with your requested service. What data we store, we’ll protect
        within commercially acceptable means to prevent loss and theft, as well
        as unauthorised access, disclosure, copying, use or modification.
      </Text>
      <Text size="lg">
        We don’t share any personally identifying information publicly or with
        third-parties, except when required to by law.
      </Text>
      <Text size="lg">
        Our website may link to external sites that are not operated by us.
        Please be aware that we have no control over the content and practices
        of these sites, and cannot accept responsibility or liability for their
        respective privacy policies.
      </Text>
      <Text size="lg">
        You are free to refuse our request for your personal information, with
        the understanding that we may be unable to provide you with some of your
        desired services.
      </Text>
      <Text size="lg">
        Your continued use of our website will be regarded as acceptance of our
        practices around privacy and personal information. If you have any
        questions about how we handle user data and personal information, feel
        free to contact us.
      </Text>
      <Text size="lg">This policy is effective as of 6 March 2019.</Text>
    </Section>
  </Layout>
);

export default PrivacyPolicy;
