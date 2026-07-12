import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'WordDuel Privacy Policy — Verdorian',
  description:
    'How the WordDuel iOS game handles your data. The short version: it is an offline game and your progress stays on your device.',
  alternates: { canonical: 'https://verdorian.com/wordduel/privacy' },
}

export default function WordDuelPrivacyPage() {
  return (
    <>
      <h1>WordDuel Privacy Policy</h1>
      <p className="legal-updated">Last updated: July 12, 2026</p>

      <p>
        WordDuel is a game published by Verdorian Technologies LLC
        (&ldquo;Verdorian,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;). The short version: WordDuel
        is an offline game. Your progress &mdash; scores, streaks, badges, coins, and word history
        &mdash; is stored only on your device. We collect no analytics, show no ads, and run no
        tracking of any kind.
      </p>

      <h2>What we collect</h2>
      <p>
        In its standard offline form, WordDuel collects nothing. There is no account, no sign-up,
        and no personal information gathered or transmitted to us. Everything you earn lives on
        your device and never leaves it.
      </p>

      <h2>Word definitions</h2>
      <p>
        When a word&apos;s definition isn&apos;t already cached on your device, the app requests it
        from <a href="https://dictionaryapi.dev">dictionaryapi.dev</a>, a free public dictionary
        service. The only thing sent is the word itself &mdash; never your identity, device
        details, or gameplay data. Definitions are then cached on your device so the same word
        isn&apos;t requested again.
      </p>

      <h2>Optional account (future update)</h2>
      <p>
        A future update may offer an optional sign-in for cloud backup and a global leaderboard. If
        you choose to use it, we would store your email address, a display name you pick, and your
        synced game statistics &mdash; nothing else. Playing without an account will always work,
        and account deletion will be available inside the app.
      </p>

      <h2>What we don&apos;t do</h2>
      <ul>
        <li>We do not run advertising or analytics trackers.</li>
        <li>We do not sell or share your information with anyone.</li>
        <li>We do not build advertising profiles or track you across apps or the web.</li>
      </ul>

      <h2>Deleting your data</h2>
      <p>
        In the app, <strong>Settings &rarr; Danger zone &rarr; &ldquo;Reset all progress&rdquo;</strong>{' '}
        erases everything WordDuel has stored on your device. Deleting the app removes all local
        data as well.
      </p>

      <h2>Children</h2>
      <p>
        WordDuel does not knowingly collect personal information from anyone, including children.
      </p>

      <h2>Contact</h2>
      <p>
        Verdorian Technologies LLC · Tennessee, USA ·{' '}
        <a href="mailto:sm@verdorian.com">sm@verdorian.com</a>
      </p>
    </>
  )
}
