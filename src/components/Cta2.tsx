const Cta2 = () => {
    return (
        <section className="w-full bg-grej py-10 md:py-14">
            <div className="maxw">
                <div className="flex flex-col gap-4 md:h-[min(62vh,560px)] md:flex-row md:items-stretch">


                    <div className="relative flex-1 overflow-hidden border border-soft-black/10 md:h-full">
                        <img
                            src="/photos/hero2.png"
                            alt="Realizacja SPS Elektro"
                            className="h-full w-full object-cover object-center hidden md:block"
                            loading="lazy"
                        />
                        <img
                            src="/photos/hero2tel.png"
                            alt="Realizacja SPS Elektro"
                            className="h-full w-full object-cover object-center block md:hidden"
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
                        <blockquote className="absolute left-4 top-4  z-20 md:max-w-[42%] ">
                            <p className=" font-poppins font-light italic leading-snug tracking-tight text-white text-base md:text-lg">
                                &ldquo;Dostarczamy instalacje, które pracują <br /> na wynik Twojej inwestycji.&rdquo;
                            </p>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cta2