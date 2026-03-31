import express from "express"
import { Resend } from "resend"
import dotenv from "dotenv"

dotenv.config()
dotenv.config({ path: "env." })

const app = express()
const port = process.env.PORT || 8787

app.use(express.json())

app.get("/", (_req, res) => {
  res.status(200).json({ ok: true, service: "contact-api" })
})

app.post("/api/contact", async (req, res) => {
  const { name, email, phone, subject, message } = req.body ?? {}

  if (!name || !email || !phone || !subject || !message) {
    return res.status(400).json({ error: "Missing required fields" })
  }

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ error: "Missing RESEND_API_KEY" })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    await resend.emails.send({
      from: "SPS Kontakt <onboarding@resend.dev>",
      to: ["kacper.kuchcinsky@gmail.com"],
      subject: `Nowa wiadomosc: ${subject} (od ${name})`,
      replyTo: email,
      text: [
        `Imie i nazwisko: ${name}`,
        `E-mail: ${email}`,
        `Telefon: ${phone}`,
        `Temat: ${subject}`,
        "",
        "Wiadomosc:",
        message,
      ].join("\n"),
    })

    return res.status(200).json({ ok: true })
  } catch {
    return res.status(500).json({ error: "Failed to send email" })
  }
})

app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`)
})
