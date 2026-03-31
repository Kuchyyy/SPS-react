import { Link } from "react-router-dom"
import { useState } from "react"
import type { FormEvent } from "react"

const ContactContent = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [acceptedPolicy, setAcceptedPolicy] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [feedback, setFeedback] = useState("")

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFeedback("")
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, subject, message }),
      })

      if (!response.ok) {
        setFeedback("Nie udalo sie wyslac wiadomosci. Sprobuj ponownie.")
        return
      }

      setFeedback("Wiadomosc wyslana. Dziekujemy.")
      setName("")
      setEmail("")
      setPhone("")
      setSubject("")
      setMessage("")
    } catch {
      setFeedback("Nie udalo sie wyslac wiadomosci. Sprobuj ponownie.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-grej">
      <nav className="w-full border-b border-soft-black/10 bg-grej">
        <div className="maxw flex items-center justify-between py-3">
          <Link to="/">
            <img
              src="/photos/logosps.png"
              alt="SPS Elektro"
              className="h-6 w-auto object-contain md:h-8"
            />
          </Link>
          <Link
            to="/"
            className="text-xs font-poppins text-white transition hover:text-white bg-soft-black px-5 py-3"
          >
            &larr; Wróć na stronę
          </Link>
        </div>
      </nav>

      <div className="maxw py-16">
        <div className="max-w-2xl">
          <p className="text-[11px] font-geist-mono uppercase tracking-wide text-soft-black/50">
            Kontakt
          </p>
          <h1 className="mt-2 text-3xl font-poppins tracking-tight text-soft-black md:text-4xl">
            Porozmawiajmy <br /> o Twoim projekcie
          </h1>
          <p className="mt-3 max-w-lg text-sm font-poppins font-light leading-relaxed text-soft-black/60">
            Opisz nam swoje potrzeby — odezwiemy się najszybciej jak to mozliwe.
            Mozesz tez po prostu do nas zadzwonic.
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-16">
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-xs font-poppins text-soft-black/60">
                Imie i nazwisko
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="border border-soft-black/15 bg-white px-4 py-3 text-sm font-poppins text-soft-black outline-none transition focus:border-soft-black/40"
                placeholder="Jan Kowalski"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs font-poppins text-soft-black/60">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border border-soft-black/15 bg-white px-4 py-3 text-sm font-poppins text-soft-black outline-none transition focus:border-soft-black/40"
                placeholder="jan@firma.pl"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="phone" className="text-xs font-poppins text-soft-black/60">
                Telefon
              </label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="border border-soft-black/15 bg-white px-4 py-3 text-sm font-poppins text-soft-black outline-none transition focus:border-soft-black/40"
                placeholder="+48 000 000 000"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="subject" className="text-xs font-poppins text-soft-black/60">
                Temat
              </label>
              <input
                id="subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                className="border border-soft-black/15 bg-white px-4 py-3 text-sm font-poppins text-soft-black outline-none transition focus:border-soft-black/40"
                placeholder="Czego dotyczy zapytanie?"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-xs font-poppins text-soft-black/60">
                Wiadomosc
              </label>
              <textarea
                id="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="resize-none border border-soft-black/15 bg-white px-4 py-3 text-sm font-poppins text-soft-black outline-none transition focus:border-soft-black/40"
                placeholder="Opisz swoj projekt..."
              />
            </div>

            <label className="mt-1 inline-flex items-start gap-2 text-xs font-poppins text-soft-black/60">
              <input
                type="checkbox"
                checked={acceptedPolicy}
                onChange={(e) => setAcceptedPolicy(e.target.checked)}
                required
                className="mt-0.5 h-4 w-4 border border-soft-black/25 accent-soft-black"
              />
              <span className="text-sm ">Akceptuje regulamin przetwarzania danych.</span>
            </label>
            <button
              type="submit"
              disabled={isSubmitting || !acceptedPolicy}
              className="mt-2 w-fit bg-soft-black px-8 py-3 text-sm font-poppins text-white transition hover:bg-soft-black/90 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Wysylanie..." : "Wyslij wiadomosc"}
            </button>
            {feedback ? (
              <p className="text-xs font-poppins text-soft-black/60">{feedback}</p>
            ) : null}
          </form>

          <div className="flex flex-col gap-8">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.14em] text-soft-black/40">
                Telefon
              </p>
              <a
                href="tel:+48666011919"
                className="mt-1 block text-lg font-poppins tracking-tight text-soft-black transition hover:text-soft-black/70"
              >
                +48 666 011 919
              </a>
            </div>

            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.14em] text-soft-black/40">
                E-mail
              </p>
              <a
                href="mailto:biuro@spselektro.pl"
                className="mt-1 block text-lg font-poppins tracking-tight text-soft-black transition hover:text-soft-black/70"
              >
                biuro@spselektro.pl
              </a>
            </div>

            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.14em] text-soft-black/40">
                Adres
              </p>
              <p className="mt-1 text-sm font-poppins font-light leading-relaxed text-soft-black/70">
                ul. Harcerska 21 <br />
                52-404 Wroclaw
              </p>
            </div>



            <div className="mt-4 border-t border-dashed border-soft-black/15 pt-6">
              <p className="text-xs font-poppins font-light leading-relaxed text-soft-black/50">
                Odpowiadamy w ciagu 24h w dni robocze. <br />
                Dla pilnych spraw - zadzwon bezposrednio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactContent
