import React from 'react';
import { Card } from '../../../components';

import './contactSection.scss';

export default function ContactSection({ id }) {
  return (
    <div id={id}>
      <h3>Contact Me</h3>
      <Card>
        <form className="contact-form">
          <input type="text" placeholder="Subject" name="subject" />

          <textarea
            name="message"
            rows="10"
            cols="30"
            placeholder="Write your Message here..."
          />
          <button
            onClick={e => {
              e.preventDefault();
            }}
          >
            Submit
          </button>
        </form>
      </Card>
    </div>
  );
}
