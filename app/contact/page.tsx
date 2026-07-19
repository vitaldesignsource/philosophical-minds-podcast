import { ContactForm } from "@/components/ContactForm";
import { SiteHeader } from "@/components/SiteHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Send feedback, guest requests, questions, concerns, and collaboration notes to Philosophical Minds.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <SiteHeader />
        <p className="eyebrow">Drop Us a Line</p>
        <h1>Contact Philosophical Minds</h1>
        <p>
          Feedback, questions, concerns, guest requests, and thoughtful notes from the philosophical circle are welcome.
        </p>
      </section>

      <section className="route-section contact-section">
        <div className="contact-layout">
          <div className="contact-copy">
            <p className="eyebrow">Feedback</p>
            <h2>Questions or Concerns?</h2>
            <p>
              Guest request? Who would you like to hear on the show? Drop us a line and share your thoughts.
            </p>
            <p>
              Use the form for listener notes, potential guest suggestions, topic ideas, project inquiries, and any
              additional context that would help the message reach the right place.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
