const Cta2 = () => {
    return (
        <section className="w-full bg-white py-10 md:py-14">
            <div className="maxw">
                <div className="flex flex-col gap-4 md:h-[min(62vh,560px)] md:flex-row md:items-stretch">
                    <div className="grid grid-cols-1 gap-3 md:h-full md:w-[320px] md:shrink-0 md:grid-rows-3">
                        <div className="flex min-h-[110px] flex-col border border-soft-black/20 bg-neutral-100 p-4 md:min-h-0">
                            <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.14em] text-soft-black/45">
                                <span>ID: QLT-01</span>
                                <span>CHK: PASS</span>
                            </div>
                            <div className="mt-2 flex items-center justify-between border-b border-dashed border-soft-black/20 pb-2">
                                <span className="text-xs font-poppins uppercase tracking-wide text-soft-black/70">
                                    Jakość
                                </span>
                                <span className="inline-flex items-center border border-soft-black/15 bg-soft-black/5 px-2 py-0.5 font-mono text-[10px] text-soft-black/55">
                                    SYS
                                </span>
                            </div>
                            <p className="mt-3 text-left text-xs font-poppins font-light leading-relaxed text-soft-black/60">
                                Stabilne standardy wykonania na każdym etapie.
                            </p>
                        </div>

                        <div className="flex min-h-[110px] flex-col border border-soft-black/20 bg-neutral-100 p-4 md:min-h-0">
                            <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.14em] text-soft-black/45">
                                <span>ID: TML-02</span>
                                <span>CHK: PASS</span>
                            </div>
                            <div className="mt-2 flex items-center justify-between border-b border-dashed border-soft-black/20 pb-2">
                                <span className="text-xs font-poppins uppercase tracking-wide text-soft-black/70">
                                    Termin
                                </span>
                                <span className="inline-flex items-center border border-soft-black/15 bg-soft-black/5 px-2 py-0.5 font-mono text-[10px] text-soft-black/55">
                                    SLA
                                </span>
                            </div>
                            <p className="mt-3 text-left text-xs font-poppins font-light leading-relaxed text-soft-black/60">
                                Harmonogram dotrzymany zgodnie z ustaleniami.
                            </p>
                        </div>

                        <div className="flex min-h-[110px] flex-col border border-soft-black/20 bg-neutral-100 p-4 md:min-h-0">
                            <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.14em] text-soft-black/45">
                                <span>ID: SRV-03</span>
                                <span>CHK: LIVE</span>
                            </div>
                            <div className="mt-2 flex items-center justify-between border-b border-dashed border-soft-black/20 pb-2">
                                <span className="text-xs font-poppins uppercase tracking-wide text-soft-black/70">
                                    Serwis
                                </span>
                                <span className="inline-flex items-center border border-soft-black/15 bg-soft-black/5 px-2 py-0.5 font-mono text-[10px] text-soft-black/55">
                                    24/7
                                </span>
                            </div>
                            <p className="mt-3 text-left text-xs font-poppins font-light leading-relaxed text-soft-black/60">
                                Stałe wsparcie po realizacji i szybka reakcja.
                            </p>
                        </div>
                    </div>

                    <div className="relative flex-1 overflow-hidden border border-soft-black/10 md:h-full">
                        <img
                            src="/photos/hero2.png"
                            alt="Realizacja SPS Elektro"
                            className="h-full w-full object-cover object-center"
                            loading="lazy"
                        />
                        <div
                            className="pointer-events-none absolute inset-y-0 left-0 w-4/5 bg-linear-to-r from-black/45 via-black/15 to-transparent"
                            aria-hidden
                        />
                        <div
                            className="pointer-events-none absolute inset-y-0 left-0 w-px bg-white/40"
                            aria-hidden
                        />
                        <blockquote className="absolute left-4 bottom-4 z-20 max-w-[42%] md:left-6 md:bottom-6">
                            <p className="text-sm font-poppins font-light italic leading-snug tracking-tight text-white md:text-base">
                                &ldquo;Dostarczamy instalacje, które pracują na wynik Twojej inwestycji.&rdquo;
                            </p>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cta2