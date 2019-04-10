import React from "react";
import Recaptcha from "react-google-recaptcha";

const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY;

const FormCaptcha = () => <Recaptcha sitekey={RECAPTCHA_KEY} />;

export default FormCaptcha;
