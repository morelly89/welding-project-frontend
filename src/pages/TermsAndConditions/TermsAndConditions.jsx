import "./TermsAndConditions.css";

function TermsAndConditions() {
  return (
    <main className="terms">
      <div className="terms__container">
        <h1 className="terms__title">Terms and Conditions</h1>

        <p className="terms__updated">Last updated: November 15, 2026</p>

        <p className="terms__intro">
          Welcome to Morelly Welding. These Terms and Conditions explain the
          rules for using our website, creating an account, and submitting
          welding or fabrication inquiries. Please read them before registering
          or using our services.
        </p>

        <section className="terms__section">
          <h2>1. Use of Our Website</h2>
          <p>
            Morelly Welding provides information about welding, metal
            fabrication, completed projects, and opportunities to submit custom
            project inquiries.
          </p>
          <p>
            You agree to use this website lawfully and not to interfere with its
            operation, security, or other users.
          </p>
        </section>

        <section className="terms__section">
          <h2>2. User Accounts</h2>
          <p>
            When creating an account, you agree to provide accurate information
            and maintain the confidentiality of your login credentials.
          </p>
          <p>
            You are responsible for activity conducted through your account.
            Please contact us if you believe your account has been accessed
            without authorization.
          </p>
        </section>

        <section className="terms__section">
          <h2>3. Welding and Fabrication Requests</h2>
          <p>
            Submitting a project request does not guarantee acceptance, pricing,
            availability, or completion of the proposed work.
          </p>
          <p>
            Any project specifications, pricing, timelines, payment
            arrangements, and other obligations must be agreed upon separately
            before work begins.
          </p>
        </section>

        <section className="terms__section">
          <h2>4. Website Content and Intellectual Property</h2>
          <p>
            Unless otherwise indicated, original photographs, written content,
            designs, and other materials created for Morelly Welding remain the
            property of their respective owners.
          </p>
          <p>
            You may not reproduce or commercially distribute protected website
            materials without permission from the applicable rights holder,
            except as allowed by law.
          </p>
        </section>

        <section className="terms__section">
          <h2>5. Project Information</h2>
          <p>
            You agree to submit project information that you are authorized to
            share. Please do not submit confidential designs or sensitive
            personal information without first arranging an appropriate method
            of communication.
          </p>
        </section>

        <section className="terms__section">
          <h2>6. Website Availability</h2>
          <p>
            We aim to maintain a reliable and functional website, but
            uninterrupted access is not guaranteed. Features may be modified,
            suspended, or temporarily unavailable due to maintenance or
            technical issues.
          </p>
        </section>

        <section className="terms__section">
          <h2>7. Information and Disclaimers</h2>
          <p>
            Website content is provided for general informational and portfolio
            purposes. Project examples and welding information are not a
            substitute for project-specific engineering, safety assessments, or
            professional advice.
          </p>
          <p>
            Nothing in these Terms excludes responsibilities or legal rights
            that cannot lawfully be excluded.
          </p>
        </section>

        <section className="terms__section">
          <h2>8. Changes to These Terms</h2>
          <p>
            These Terms may be updated as the website develops. Material changes
            will be communicated when required by applicable law. The date at
            the top indicates when this version was last updated.
          </p>
        </section>

        <section className="terms__section">
          <h2>9. Contact</h2>
          <p>
            If you have questions about these Terms, please contact Morelly
            Welding through the contact information provided on this website.
          </p>
        </section>
      </div>
    </main>
  );
}

export default TermsAndConditions;
