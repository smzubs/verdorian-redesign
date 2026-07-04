import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Verdorian',
  description: 'How Verdorian Technologies LLC collects, uses, and protects your information.',
  alternates: { canonical: 'https://verdorian.com/privacy' },
}

export default function PrivacyPage() {
  return (
    <>
      <h1>Privacy Policy</h1>
      <p className="legal-updated">Last updated: July 4, 2026</p>

      <p>
        Verdorian Technologies LLC (&ldquo;Verdorian,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;)
        operates verdorian.com. This policy describes what we collect, why, and the choices
        you have. The short version: we collect only what you send us, we use it only to
        respond to you and deliver our services, and we never sell it.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>Contact form:</strong> your name, email address, and the task or tools you
          describe. You choose what to share.
        </li>
        <li>
          <strong>Email:</strong> anything you send to sm@verdorian.com.
        </li>
        <li>
          <strong>Basic technical data:</strong> our hosting provider (Vercel) records
          standard server logs such as IP address and browser type to run and secure the
          site. We do not run advertising trackers.
        </li>
      </ul>

      <h2>How we use it</h2>
      <ul>
        <li>To reply to your inquiry and schedule your fit call.</li>
        <li>To scope, build, and support the automation work you engage us for.</li>
        <li>To keep the site secure and reliable.</li>
      </ul>

      <h2>What we don&apos;t do</h2>
      <ul>
        <li>We do not sell or rent your information to anyone.</li>
        <li>We do not send marketing email you didn&apos;t ask for.</li>
        <li>We do not use your business data for anything beyond the work you hired us for.</li>
      </ul>

      <h2>Client project data</h2>
      <p>
        When we build or run automations for you, we access only the systems and data needed
        for that work, under the terms we agree to in your engagement. Pilot automations run
        on our infrastructure until you purchase them; if you walk away, the pilot is shut
        down and your data connected to it is removed.
      </p>

      <h2>Service providers</h2>
      <p>
        We use a small set of infrastructure providers to operate the site and deliver our
        services (hosting, email delivery, databases). They process data on our behalf and
        are not permitted to use it for their own purposes.
      </p>

      <h2>Retention &amp; your choices</h2>
      <p>
        We keep inquiry emails and form submissions for as long as needed to work with you.
        Ask us at <a href="mailto:sm@verdorian.com">sm@verdorian.com</a> to see, correct, or
        delete the information we hold about you, and we will.
      </p>

      <h2>Contact</h2>
      <p>
        Verdorian Technologies LLC · Tennessee, USA ·{' '}
        <a href="mailto:sm@verdorian.com">sm@verdorian.com</a>
      </p>
    </>
  )
}
