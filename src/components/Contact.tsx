import { useState } from "react";
import { MapPin, Mail, Phone, Copy, PhoneCall } from "lucide-react";

const Contact = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: "mail") => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="kontakt" className="w-screen py-20 bg-stone-100 relative">
      <div
        className={`fixed bottom-6 right-6 px-4 py-2 rounded-lg shadow-md text-white bg-blue-900 font-robert-medium z-50 transition-all duration-300 ${
          copied ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        {copied === "mail" && "Skopiowano maila ✅"}
      </div>

      <div className="max-w-[1440px] w-[90%] mx-auto">
        <div className="mx-auto text-center md:text-left md:ml-2 ml-0">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1 bg-blue-900 text-white rounded-full text-sm font-semibold shadow-md">
            <MapPin className="w-4 h-4" />
            KONTAKT
          </div>
          <h1 className="mt-6 text-3xl md:text-5xl font-satoshi text-gray-900 uppercase">
            Gdzie możesz nas szukać
          </h1>
          <p className="mt-4 text-gray-600 max-w-3xl text-lg font-satoshi-medium">
            Jeśli chcesz spotkać się z nami osobiście, zapraszamy do naszej
            siedziby. Jesteśmy do Twojej dyspozycji – umów się na spotkanie już
            dziś i przekonaj się, jak możemy Ci pomóc.
          </p>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-stretch">
          <div className="flex flex-col md:flex-row w-full shadow-md bg-white rounded-xl relative overflow-visible">
            <div className="flex-1 flex flex-col gap-3 text-gray-700 text-base font-satoshi-medium p-8 px-2 sm:px-6">
              <div className="bg-stone-100 rounded-lg p-4 shadow-sm hover:shadow-md transition font-robert-medium flex items-center justify-between">
                <a
                  href="mailto:biuro@spselektro.pl"
                  className="flex items-center gap-2 hover:text-blue-900 transition"
                >
                  <Mail className="w-5 h-5 text-blue-900" />
                  biuro@spselektro.pl
                </a>
                <button
                  onClick={() => copyToClipboard("biuro@spselektro.pl", "mail")}
                  className="p-2 rounded-lg hover:bg-blue-100 transition"
                >
                  <Copy className="w-4 h-4 text-blue-900" />
                </button>
              </div>

              <div className="bg-stone-100 rounded-lg p-4 shadow-sm hover:shadow-md transition flex items-center justify-between">
                <a
                  href="tel:+48666011919"
                  className="flex items-center gap-2 hover:text-blue-900 transition"
                >
                  <Phone className="w-5 h-5 text-blue-900" />
                  +48 666 011 919
                </a>
                <a
                  href="tel:+48666011919"
                  className="p-2 rounded-lg hover:bg-blue-100 transition"
                >
                  <PhoneCall className="w-4 h-4 text-blue-900" />
                </a>
              </div>

              <div className="bg-stone-100 rounded-lg p-4 shadow-sm hover:shadow-md transition flex items-center gap-2 font-robert-medium">
                <MapPin className="w-5 h-5 text-blue-900" />
                ul. Harcerska 21, 52-404 Wrocław
              </div>
            </div>

            <div className="flex-1 flex justify-center items-end relative">
              <img
                src="/photos/mac.png"
                alt="SPS Elektro"
                className="w-[300px] md:w-[400px] lg:w-[500px] h-auto object-contain relative bottom-0 md:absolute md:bottom-[-1px]"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 w-full rounded-xl overflow-hidden shadow-md">
          <iframe
            src="https://maps.google.com/maps?q=ul.%20Harcerska%2021,%2052-404%20Wroc%C5%82aw&amp;output=embed&amp;z=12"
            className="w-full h-[300px] md:h-[400px] border-0"
            loading="lazy"
          ></iframe>
        </div>

        <div className="mt-6 text-center">
          <a
            href="https://www.google.com/maps/place/ul.+Harcerska+21,+52-404+Wroc%C5%82aw"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full sm:inline-block sm:w-auto bg-blue-900 hover:bg-[#005494] px-6 py-3 rounded-lg font-robert-medium text-white transition-colors"
          >
            Prowadź w Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
