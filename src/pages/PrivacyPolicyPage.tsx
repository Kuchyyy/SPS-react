import { Link } from "react-router-dom"

const PrivacyPolicyPage = () => {
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
            className="bg-soft-black px-5 py-3 text-xs font-poppins text-white transition hover:text-white"
          >
            &larr; Powrot
          </Link>
        </div>
      </nav>

      <main className="maxw py-16 md:py-20">
        <div className="max-w-3xl">
          <p className="text-[11px] font-geist-mono uppercase tracking-wide text-soft-black/50">
            Dokument
          </p>
          <h1 className="mt-2 text-3xl font-poppins tracking-tight text-soft-black md:text-4xl">
            Polityka prywatnosci
          </h1>
          <p className="mt-4 text-sm font-poppins font-light leading-relaxed text-soft-black/70">
            Dbamy o bezpieczenstwo danych osobowych i przetwarzamy je zgodnie z
            obowiazujacymi przepisami. Dane przekazane przez formularz kontaktowy
            wykorzystujemy wylacznie do obslugi zapytania i kontaktu zwrotnego.
          </p>
          <p className="mt-4 text-sm font-poppins font-light leading-relaxed text-soft-black/70">
            Administratorem danych jest SPS Elektro. Dane nie sa sprzedawane
            podmiotom trzecim i sa przechowywane przez czas niezbedny do realizacji
            celu kontaktu lub wynikajacy z obowiazkow prawnych.
          </p>
          <p className="mt-4 text-sm font-poppins font-light leading-relaxed text-soft-black/70">
            Masz prawo do wgladu, poprawienia, ograniczenia przetwarzania oraz
            usuniecia danych. W sprawach dotyczacych prywatnosci mozesz napisac na:
            <a
              href="mailto:biuro@spselektro.pl"
              className="ml-1 underline decoration-soft-black/30 underline-offset-2"
            >
              biuro@spselektro.pl
            </a>
            .
          </p>
        </div>
      </main>
    </div>
  )
}

export default PrivacyPolicyPage
