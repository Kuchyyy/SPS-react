import { Link } from "react-router-dom"

const SECTION_IMAGE = "/photos/sps.jpeg"

const Cta = () => {
    return (
        <section className="relative isolate flex min-h-[min(80svh,920px)] flex-col overflow-hidden">
            <div
                className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/photos/bg2.png')" }}
                aria-hidden
            />

            <div className="relative z-10 flex w-full flex-1 flex-col justify-between px-5 md:px-0 pt-10 md:maxw">
                <p className="text-xs font-geist-mono tracking-wide uppercase text-white">
                    Współpraca
                </p>

                <div className="mt-16 flex flex-col gap-14 md:mt-0 md:flex-row md:items-end md:justify-between md:gap-8 lg:gap-4">
                    <div className="flex max-w-xl flex-col gap-8 md:max-w-[min(100%,28rem)] lg:max-w-lg lg:pb-2">
                        <div className="flex flex-col gap-1">
                            <h2 className="text-3xl font-poppins tracking-tight text-white md:text-4xl">
                                Twoja wizja, <br /> Nasze wykonanie.
                            </h2>
                            <div className="max-w-xl">
                                <p className="text-sm font-poppins font-light tracking-tight text-white/60 leading-relaxed">
                                    Tworzymy instalacje dopasowane do Twoich potrzeb i prowadzimy realizacje od projektu po uruchomienie.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-6 pb-10">
                            <Link
                                to="/kontakt"
                                className="inline-flex items-center justify-center px-6 py-3 bg-white text-black text-sm font-poppins border border-white/20 transition hover:cursor-pointer hover:bg-white/95"
                            >
                                Porozmawiajmy o projekcie
                            </Link>
                        </div>
                    </div>

                    <div className="relative -mx-5 min-h-[260px] w-[calc(100%+2.5rem)] shrink-0 sm:-mx-5 md:mx-0 md:ml-auto md:w-[min(72vw,680px)] lg:w-[min(62vw,760px)]">
                        <div className="w-[128%] max-w-none translate-x-[6%] sm:translate-x-[10%] md:w-[138%] md:translate-x-[14%] lg:translate-x-[18%]">
                            <div className="aspect-[4/3] w-full overflow-hidden rounded-tl-sm shadow-[0_32px_64px_rgba(0,0,0,0.45)] md:aspect-[4/3] md:max-h-[min(64vh,520px)] md:max-w-none">
                                <img
                                    src={SECTION_IMAGE}
                                    alt="SPS Elektro — realizacja"
                                    className="h-full w-full object-cover object-center"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cta
