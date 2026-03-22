const SECTION_IMAGE = "/photos/sps.jpeg"

const Cta = () => {
    return (
        <section className="relative isolate flex min-h-[min(80svh,920px)] flex-col overflow-hidden">
            <div
                className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/photos/bg2.png')" }}
                aria-hidden
            />

            <div className="relative z-10 flex w-full flex-1 flex-col justify-between px-5 pt-10 md:maxw">
                <p className="text-xs font-poppins tracking-wide uppercase text-white">
                    Współpraca
                </p>

                <div className="mt-16 flex flex-col gap-14 md:mt-0 md:flex-row md:items-end md:justify-between md:gap-8 lg:gap-4">
                    <div className="flex max-w-xl flex-col gap-8 md:max-w-[min(100%,28rem)] lg:max-w-lg lg:pb-2">
                        <div className="flex flex-col gap-1">
                            <h2 className="text-3xl font-poppins tracking-tight text-white md:text-4xl">
                                Twoja wizja, <br /> Nasze wykonanie.
                            </h2>
                        </div>
                        <div className="flex flex-wrap items-center gap-6 pb-10">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center px-6 py-3 bg-white text-black text-sm font-poppins border border-white/20 transition hover:cursor-pointer hover:bg-white/95"
                            >
                                Porozmawiajmy o projekcie
                            </button>
                        </div>
                    </div>

                    <div className="relative -mx-5 min-h-[200px] w-[calc(100%+2.5rem)] shrink-0 sm:-mx-5 md:mx-0 md:ml-auto md:w-[min(58vw,520px)] lg:w-[min(50vw,580px)]">
                        <div className="w-[118%] max-w-none translate-x-[8%] sm:translate-x-[12%] md:w-[125%] md:translate-x-[18%] lg:translate-x-[22%]">
                            <div className="aspect-[4/3] w-full overflow-hidden rounded-tl-sm shadow-[0_32px_64px_rgba(0,0,0,0.45)] md:aspect-[5/4] md:max-h-[min(52vh,440px)] md:max-w-none">
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
