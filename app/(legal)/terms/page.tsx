import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — Verdorian',
  description: 'The terms that govern verdorian.com and Verdorian Technologies LLC engagements.',
  alternates: { canonical: 'https://verdorian.com/terms' },
}

export default function TermsPage() {
  return (
    <>
      <h1>Terms of Service</h1>
      <p className="legal-updated">Last updated: July 4, 2026</p>

      <p>
        These terms cover your use of verdorian.com and, at a high level, how engagements
        with Verdorian Technologies LLC (&ldquo;Verdorian,&rdquo; &ldquo;we,&rdquo;
        &ldquo;us&rdquo;) work. Every paid engagement is governed by its own written
        agreement or statement of work; if that document conflicts with these terms, the
        engagement document wins.
      </p>

      <h2>The website</h2>
      <p>
        The content on this site is provided for general information. It describes our
        services and pricing as of the date shown and may change. Submitting the contact
        form or booking a fit call does not by itself create an engagement.
      </p>

      <h2>The Test-Drive Pilot</h2>
      <ul>
        <li>The pilot starts with a $500 fee, credited toward your build if you proceed.</li>
        <li>
          Before we build, we agree in writing on the measurable target the automation has
          to hit during the trial period.
        </li>
        <li>
          The pilot runs on Verdorian&apos;s infrastructure for the trial period. If the
          agreed target is met, the build fee becomes due and ownership transfers per your
          engagement agreement. If it is not met, you owe nothing further and the pilot is
          decommissioned.
        </li>
      </ul>

      <h2>Projects and retainers</h2>
      <p>
        Builds are quoted as fixed prices before work begins. Scope changes are agreed in
        writing before they are built. Monthly care retainers cover the monitoring,
        maintenance, and improvement work described in your agreement and can be cancelled
        with notice as stated there.
      </p>

      <h2>Intellectual property</h2>
      <p>
        Once a build is paid for, you own the delivered system as set out in your engagement
        agreement. We retain ownership of our pre-existing tools, templates, and know-how
        used to build it.
      </p>

      <h2>Disclaimers</h2>
      <p>
        The site and its content are provided &ldquo;as is.&rdquo; We describe our services
        honestly and avoid inflated claims — and, equally, nothing on this site is a
        guarantee of specific business results outside the written targets we agree to in an
        engagement.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, Verdorian&apos;s total liability arising out
        of the use of this website is limited to $100; liability arising out of a paid
        engagement is limited as stated in that engagement&apos;s agreement.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of the State of Tennessee, USA, without regard
        to conflict-of-law rules.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms:{' '}
        <a href="mailto:sm@verdorian.com">sm@verdorian.com</a>
      </p>
    </>
  )
}
