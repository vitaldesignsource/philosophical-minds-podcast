"use client";

import { FormEvent, useMemo, useState } from "react";

export function NewsletterForm() {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");
  const challenge = useMemo(() => ({ label: "7 + 4", value: "11" }), []);

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
      className="newsletter-form"
      action="https://formsubmit.co/philosophicalmindspodcast@gmail.com"
      method="POST"
      onSubmit={handleSubmit}
      noValidate
    >
      <input type="hidden" name="_subject" value="New Philosophical Minds newsletter request" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="true" />
      <input type="text" name="_honey" className="form-trap" tabIndex={-1} autoComplete="off" />
      <label>
        <span>Name</span>
        <input name="name" type="text" placeholder="Your name" autoComplete="name" />
      </label>
      <label>
        <span>Email address</span>
        <input name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
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
          aria-describedby={error ? "newsletter-human-error" : undefined}
          required
        />
      </label>
      {error && (
        <p className="form-error" id="newsletter-human-error" role="alert">
          {error}
        </p>
      )}
      <button type="submit">Request Updates</button>
      <p className="form-note">
        Sends to philosophicalmindspodcast@gmail.com. The first submission may ask the owner to confirm the address.
      </p>
    </form>
  );
}
