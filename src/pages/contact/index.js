import React from "react";

import { Layout } from "../../components-gatsby";

import { Section, SectionItem } from "../../components-app/layouts";

import {
  FormControl,
  Form,
  FormLayout,
  FormContainer
} from "../../components/forms";
import { FormField } from "../../components/inputs";
import { Button } from "../../components/buttons";
import { Text, Label } from "../../components/typography";

const Contact = () => (
  <Layout>
    <Section title="That time when you want to get in touch">
      <SectionItem>
        <Text size="lg">
          All business inquiries, questions, requests, general frustrations, and
          wild outpourings of appreciation (lol) can be directed to:
        </Text>
      </SectionItem>
      <SectionItem>
        <a
          href="mailto:me@heatherturanocoaching.com"
          style={{ textAlign: "center" }}
        >
          <Label size="xl" color="secondary-0">
            me@heatherturanocoaching.com
          </Label>
        </a>
      </SectionItem>
    </Section>
    <Section title="Looking for something else?" styleType="alt">
      <Text size="lg">
        To inquire about other services I offer, please fill out the form below
        and we will get back to you in a jiffy! Speaking engagements, workshops,
        retreats, yoga and meditation classes, pie eating contests, you get the
        idea…
      </Text>
      <FormContainer styleType="standalone">
        <FormControl
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            message: ""
          }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
            // handleSubmit(values);
          }}
        >
          {({ isSubmitting, handleSubmit }) => (
            <Form>
              <FormLayout styleType="stacked">
                <FormField type="text" name="firstName" label="First name" />
                <FormField type="text" name="lastName" label="Last name" />
                <FormField
                  type="email"
                  name="email"
                  label="Email address"
                  placeholder="you@email.com"
                />
                <FormField
                  type="textarea"
                  name="message"
                  label="Your message"
                  placeholder="What's on your mind? How can I help you?"
                />
                <Button
                  styleType="secondary"
                  label="Let's get this party started!"
                  htmlType="submit"
                  onSubmit={handleSubmit}
                  loading={isSubmitting}
                />
              </FormLayout>
            </Form>
          )}
        </FormControl>
      </FormContainer>
    </Section>
  </Layout>
);

export default Contact;
