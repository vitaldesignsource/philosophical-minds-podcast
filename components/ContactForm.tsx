"use client";

import { FormEvent, useMemo, useState } from "react";

export function ContactForm() {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");
  const challenge = useMemo(() => ({ label: "9 + 3", value: "12" }), []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const form = event.currentTarget;
    const humanInput = form.elements.namedItem("human_check");

    if (humanInput instanceof HTMLInputElement) {
      humanInput.setCustomValidity("");
    }

    if (answer.trim() !== challenge.value) {
      event.preventDefault();
      setError("Please answer the human check before sending.");
      if (humanInput instanceof HTMLInputElement) {
        humanInput.setCustomValidity("Please answer the human check before sending.");
        humanInput.reportValidity();
      }
      return;
    }

    setError("");
    if (!form.checkValidity()) {
      event.preventDefault();
      form.reportValidity();
    }
  }

  return (
    <form
      className="contact-form"
      action="https://formsubmit.co/philosophicalmindspodcast@gmail.com"
      method="POST"
      onSubmit={handleSubmit}
      noValidate
    >
      <input type="hidden" name="_subject" value="New Philosophical Minds contact message" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="true" />
      <input type="text" name="_honey" className="form-trap" tabIndex={-1} autoComplete="off" />

      <label>
        <span>Name</span>
        <input name="name" type="text" placeholder="Your name" autoComplete="name" required />
      </label>
      <label>
        <span>Email for reply</span>
        <input name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
      </label>
      <label>
        <span>Message</span>
        <textarea name="message" placeholder="Share your thoughts, questions, or concerns." rows={6} required />
      </label>
      <label>
        <span>Guest request</span>
        <input name="guest_request" type="text" placeholder="Who would you like to hear on the show?" />
      </label>
      <label>
        <span>Additional info</span>
        <textarea name="additional_info" placeholder="Links, context, project notes, or anything else useful." rows={4} />
      </label>
      <label>
        <span>Human check: what is {challenge.label}?</span>
        <input
          name="human_check"
          value={answer}
          onChange={(event) => {
            event.target.setCustomValidity("");
            setAnswer(event.target.value);
          }}
          inputMode="numeric"
          placeholder="Answer"
          aria-invalid={Boolean(error)}
          aria-describedby={error ? "contact-human-error" : undefined}
          required
        />
      </label>
      {error && (
        <p className="form-error" id="contact-human-error" role="alert">
          {error}
        </p>
      )}
      <button type="submit">Send Message</button>
      <p className="form-note">Messages are sent to philosophicalmindspodcast@gmail.com.</p>
    </form>
  );
}
