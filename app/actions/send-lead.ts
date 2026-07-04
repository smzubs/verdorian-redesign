'use server'

export interface LeadInput {
  name: string
  email: string
  taskToAutomate: string
  toolsCurrentlyUsed: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * Sends a lead notification via the Resend API.
 * Returns { ok: false } when RESEND_API_KEY is absent or delivery fails —
 * the client falls back to the mailto draft in that case, so the form
 * never dead-ends.
 */
export async function sendLead(input: LeadInput): Promise<{ ok: boolean }> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) return { ok: false }

  const name = input.name.trim().slice(0, 200)
  const email = input.email.trim().slice(0, 200)
  const task = input.taskToAutomate.trim().slice(0, 4000)
  const tools = input.toolsCurrentlyUsed.trim().slice(0, 1000)

  if (!name || !task || !EMAIL_RE.test(email)) return { ok: false }

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Task to automate: ${task}`,
    `Current tools: ${tools || 'Not specified'}`,
    '',
    '---',
    'Sent via verdorian.com contact form',
  ].join('\n')

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Verdorian Leads <leads@verdorian.com>',
        to: ['sm@verdorian.com'],
        reply_to: email,
        subject: `Test-drive request — ${name}`,
        text,
      }),
    })
    return { ok: res.ok }
  } catch {
    return { ok: false }
  }
}
