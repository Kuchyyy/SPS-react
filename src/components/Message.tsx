import React, { useState } from "react";
import { MapPin, Clock, FileText, Landmark } from "lucide-react";

const Message: React.FC = () => {
  const [form, setForm] = useState({
    subject: "",
    email: "",
    phone: "",
    message: "",
    privacy: false,
    consent: false,
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, type, value } = e.target as HTMLInputElement;
    const checked = (e.target as HTMLInputElement).checked;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Walidacja zgód
    if (!form.privacy || !form.consent) {
      setStatus("⚠️ Musisz zaakceptować politykę prywatności i zgodę na kontakt.");
      setTimeout(() => setStatus(""), 3000);
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("✅ Wiadomość wysłana!");
        setForm({
          subject: "",
          email: "",
          phone: "",
          message: "",
          privacy: false,
          consent: false,
        });
        setTimeout(() => setStatus(""), 3000);
      } else {
        setStatus("❌ Błąd wysyłki");
        setTimeout(() => setStatus(""), 3000);
      }
    } catch (err) {
      console.error(err);
      setStatus("⚠️ Problem z serwerem");
      setTimeout(() => setStatus(""), 3000);
    }
  };

  return (
    <section id="formularz" className="w-screen py-16 bg-stone-100 relative">
      <div className="max-w-[1440px] w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Lewa kolumna */}
        <div className="flex flex-col h-full gap-6">
            <div className="flex flex-col mx-auto text-center md:mx-0 md:text-left sm:items-start">
                <h2 className="mt-6 text-3xl md:text-5xl font-satoshi text-gray-900 uppercase">
                    Główna siedziba <br /> SPS Elektro
                </h2>
            </div>

          {/* ✅ Biały box-kontener */}
          <div className="bg-white shadow-md rounded-xl p-6 flex flex-col gap-4 h-full justify-between">
            <div>
                {/* Logo */}
                <div className="flex justify-center">
                <img
                    src="/photos/logosps.png"
                    alt="SPS Elektro Logo"
                    className="w-[300px] h-auto object-contain"
                />
                </div>
            </div>
                <div className="flex flex-col gap-4 text-gray-700 text-base font-satoshi-medium">
                    {/* Adres */}
                    <div className="bg-stone-100 rounded-lg p-4 shadow-sm hover:shadow-md transition flex items-center gap-2 font-robert-medium">
                    <MapPin className="w-5 h-5 text-blue-900" />
                    ul. Harcerska 21, 52-404 Wrocław
                    </div>

                    {/* Godziny pracy */}
                    <div className="bg-stone-100 rounded-lg p-4 shadow-sm hover:shadow-md transition flex items-center gap-2 font-robert-medium">
                    <Clock className="w-5 h-5 text-blue-900" />
                    <span>
                        <strong>Godziny pracy:</strong> Pon–Pt 8:00–16:00
                    </span>
                    </div>

                    {/* KRS */}
                    <div className="bg-stone-100 rounded-lg p-4 shadow-sm hover:shadow-md transition flex items-center gap-2 font-robert-medium">
                    <Landmark className="w-5 h-5 text-blue-900" />
                    <span>
                        <strong>KRS:</strong> 0000123456
                    </span>
                    </div>

                    {/* NIP */}
                    <div className="bg-stone-100 rounded-lg p-4 shadow-sm hover:shadow-md transition flex items-center gap-2 font-robert-medium">
                    <FileText className="w-5 h-5 text-blue-900" />
                    <span>
                        <strong>NIP:</strong> 123-456-78-90
                    </span>
                </div>
            </div>
            
          </div>
        </div>

        {/* Prawa kolumna – formularz */}
        <div className="bg-white shadow-md rounded-xl p-8 flex flex-col h-full">
          <h2 className="text-2xl font-satoshi uppercase text-gray-900 mb-6">
            Formularz kontaktowy
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 flex-1">
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Temat"
              required
              className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-900 outline-none font-robert-medium"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Adres e-mail"
              required
              className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-900 outline-none font-robert-medium"
            />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Telefon"
              className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-900 outline-none font-robert-medium"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Twoja wiadomość..."
              rows={5}
              required
              className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-900 outline-none flex-1 font-robert-medium"
            ></textarea>

            {/* ✅ Checkboxy */}
            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input
                type="checkbox"
                name="privacy"
                checked={form.privacy}
                onChange={handleChange}
                className="w-4 h-4"
              />
              Zapoznałem się z{" "}
              <a
                href="/polityka-prywatnosci"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-900 underline"
              >
                polityką prywatności
              </a>
              .
            </label>

            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input
                type="checkbox"
                name="consent"
                checked={form.consent}
                onChange={handleChange}
                className="w-4 h-4"
              />
              Wyrażam zgodę na kontakt w celu odpowiedzi na wiadomość.
            </label>

            <button
              type="submit"
              className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-[#005494] transition mt-4 font-robert-medium"
            >
              Wyślij
            </button>
          </form>

          {/* ✅ status, który znika po 3s */}
          {status && (
            <p className="mt-4 text-sm text-gray-700 font-medium transition-opacity duration-500">
              {status}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Message;
