import React, { useEffect } from 'react';
import { SlTextarea } from '@shoelace-style/shoelace/dist/react';
import { SlInput } from '@shoelace-style/shoelace/dist/react';
import kwesforms from 'kwesforms';
const Contact = () => {
  useEffect(() => {
    kwesforms.init();
  }, []);

  return (
    <div className="pattern">
      <form
        className="contact-form kwes-form"
        action="https://kwesforms.com/api/foreign/forms/LQSdN5jB6CUKo5jcWCpg"
      >
        <h1>SEND ME A MESSAGE</h1>
        <SlTextarea label="Message" name="message" />
        <br />
        <SlInput
          clearable
          label="What is your name?"
          name="name"
          rules="required|max:100"
        />
        <br />

        <button className="fade" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
