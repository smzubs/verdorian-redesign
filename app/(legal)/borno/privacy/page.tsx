import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Borno Privacy Policy — Verdorian',
  description:
    'How the Borno iOS game handles your data. The short version: it is an offline game, your progress stays on your device, and we run no ads, analytics, or tracking.',
  alternates: { canonical: 'https://verdorian.com/borno/privacy' },
}

export default function BornoPrivacyPage() {
  return (
    <>
      <h1>Borno Privacy Policy</h1>
      <p className="legal-updated">Last updated: July 20, 2026</p>

      <h2>The short version</h2>
      <p>
        Borno is an offline game. Your progress &mdash; scores, streaks, badges, coins and word
        history &mdash; is stored only on your device. We collect no analytics, show no ads, and run
        no tracking of any kind. We don&apos;t sell or share your personal information &mdash; ever.
      </p>

      <h2>Who we are</h2>
      <p>
        Borno is made by Verdorian Technologies LLC (Tennessee, USA), the company responsible for
        your information under this policy (the &ldquo;data controller&rdquo;). Reach us any time at{' '}
        <a href="mailto:sm@verdorian.com">sm@verdorian.com</a>.
      </p>

      <h2>What the app collects today</h2>
      <p>
        Nothing leaves your phone during play. Settings, wallet, stats, badges, streaks and your
        word history live only in on-device storage. We have no servers watching you play, no
        account, and no device or advertising identifiers.
      </p>

      <h2>Word definitions</h2>
      <p>
        When a word&apos;s definition isn&apos;t cached yet, the app asks{' '}
        <a href="https://dictionaryapi.dev">dictionaryapi.dev</a> (a free public dictionary service)
        for it. The only thing sent is the word itself &mdash; never your identity, device details,
        or gameplay data. Definitions are cached on your device afterwards. See dictionaryapi.dev for
        their terms.
      </p>

      <h2>Optional account (future update)</h2>
      <p>
        A future update may offer an optional sign-in for cloud backup and a global leaderboard. It
        is entirely your choice. If you turn it on, we would store only your email address (to sign
        you in with a one-time code), a display name you pick (shown on the leaderboard), and your
        synced game stats &mdash; nothing else. Playing without an account will always work, you can
        withdraw consent by signing out, and account deletion will be available in-app.
      </p>

      <h2>Why we&apos;re allowed to use this data (legal bases)</h2>
      <p>
        For people in the EU/UK, our legal bases under the GDPR are: to run the core game and keep
        it working, we rely on performing our agreement with you and our legitimate interest in a
        reliable app; for the optional account and cloud sync, we rely on your consent, which you can
        withdraw at any time by signing out or deleting your account.
      </p>

      <h2>Your privacy rights</h2>
      <p>
        Depending on where you live, you may have the right to access, correct, delete, restrict or
        object to our use of your data, to receive a copy of it (portability), and &mdash; for the
        optional account &mdash; to withdraw consent. To exercise any of these, email{' '}
        <a href="mailto:sm@verdorian.com">sm@verdorian.com</a>, or use the in-app controls:{' '}
        <strong>Settings &rarr; Danger zone &rarr; &ldquo;Reset all progress&rdquo;</strong> wipes
        local data, and (once the account feature ships) you can delete your account in-app. We never
        discriminate against you for exercising a right.
      </p>
      <ul>
        <li>
          <strong>EU / UK (GDPR / UK GDPR):</strong> access, rectification, erasure, restriction,
          portability, objection, and the right to withdraw consent. You may also complain to your
          data-protection authority (in the UK, the ICO).
        </li>
        <li>
          <strong>California (CCPA / CPRA):</strong> the right to know, delete and correct your
          information and to opt out of sale or sharing. We do not sell or share your personal
          information, and we do not process it for cross-context behavioural advertising.
        </li>
        <li>
          <strong>Canada (PIPEDA):</strong> comparable rights of access and correction, with
          meaningful consent and purpose limitation.
        </li>
      </ul>

      <h2>Who we share data with</h2>
      <p>
        We don&apos;t sell or share your personal information, and we use no advertising or tracking
        SDKs. The only third parties involved are: dictionaryapi.dev (receives just the word you look
        up); Apple (distributes the app and may collect its own limited data under Apple&apos;s
        privacy policy); and, only if you opt into the future account, Supabase, which hosts the
        cloud database on our behalf as a data processor under a data-processing agreement.
      </p>

      <h2>International data transfers</h2>
      <p>
        The app itself keeps everything on your device, so there&apos;s no transfer. If you opt into
        the future account, your account data would be stored with Supabase in a region we select;
        where that involves moving data across borders, we rely on recognised safeguards such as
        Standard Contractual Clauses or an adequacy decision.
      </p>

      <h2>How long we keep it</h2>
      <p>
        Local data stays on your device until you reset progress or delete the app. If you use the
        future account, we keep your account data until you ask us to delete it or delete the account
        yourself.
      </p>

      <h2>How we protect it</h2>
      <p>
        On-device data is held in your phone&apos;s app storage. The word-lookup and any future
        account traffic travel over encrypted TLS connections. Future account data is further
        protected by per-user row-level security so only you can read your own record.
      </p>

      <h2>Children</h2>
      <p>
        Borno is not directed to children under 13 and we do not knowingly collect personal
        information from them (COPPA). Where local law sets a higher age of consent for data
        processing (13&ndash;16 in parts of the EU/UK), the same applies. We&apos;ve designed the
        shipped app to collect nothing at all, in the spirit of the UK&apos;s Age-Appropriate Design
        Code.
      </p>

      <h2>About the &ldquo;AI&rdquo; opponent</h2>
      <p>
        Borno the owl is a plain on-device algorithm written in code &mdash; not cloud AI, not
        machine learning, and not a language model. It never learns from you, never sees your data,
        and never sends anything anywhere. There is no automated decision-making that has legal or
        similarly significant effects (so GDPR Article 22 doesn&apos;t apply). If we ever add a
        feature that uses real generative AI, we&apos;ll say so clearly here first.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        If we change this policy we&apos;ll update the date above and post the new version here at
        verdorian.com/borno/privacy. Significant changes to the optional account will be surfaced
        in-app before they take effect.
      </p>

      <h2>Contact</h2>
      <p>
        Verdorian Technologies LLC &middot; Tennessee, USA &middot;{' '}
        <a href="mailto:sm@verdorian.com">sm@verdorian.com</a>
      </p>
    </>
  )
}
