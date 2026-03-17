
const Cta = () => {
    return (
        <div className="w-full bg-neutral-900 border-t border-white/20">
            <div className="maxw border-x border-white/20 py-8">
                <div className="flex flex-col md:flex-row border-b border-white/20 -mt-0.5">
                    <div className="w-full md:w-1/2 min-h-96 border-t border-white/20 flex flex-col items-start justify-center gap-8 px-8 md:px-16 text-center">
                        <h2 className="text-3xl md:text-4xl font-poppins text-start w-full tracking-tight text-white">
                            Twoja wizja, <br /> Nasze wykonanie.
                        </h2>

                        <button className="px-6 py-3 bg-white text-black text-sm font-poppins border border-white/20 ">
                            Porozmawiajmy o projekcie
                        </button>
                    </div>
                    <div className="w-full md:w-1/2 relative min-h-96">
                        <div
                            className="absolute inset-0 pointer-events-none opacity-80 [background-position:-1px_0] md:[background-position:0_0]"
                            style={{
                                backgroundImage:
                                    "linear-gradient(to right, rgba(255,255,255,0.20) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.20) 1px, transparent 1px)",
                                backgroundSize:
                                    "calc(100% / 6) calc(100% / 12)",
                            }}
                        />
                        <svg
                            className="absolute -top-5 inset-0 w-full h-full pointer-events-none"
                            viewBox="0 0 500 500"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <pattern
                                    id="topWallPattern"
                                    width="6"
                                    height="6"
                                    patternUnits="userSpaceOnUse"
                                    patternTransform="rotate(150)"
                                >
                                    <line
                                        x1="0"
                                        y1="0"
                                        x2="0"
                                        y2="40"
                                        stroke="rgba(30,58,138,0.55)"
                                        strokeWidth="5"
                                    />
                                </pattern>
                                <marker
                                    id="arrowX"
                                    markerWidth="10"
                                    markerHeight="10"
                                    refX="9"
                                    refY="3"
                                    orient="auto"
                                    markerUnits="strokeWidth"
                                >
                                    <path d="M0,0 L0,6 L9,3 z" fill="rgba(255,255,255,0.9)" />
                                </marker>
                                <marker
                                    id="arrowY"
                                    markerWidth="10"
                                    markerHeight="10"
                                    refX="9"
                                    refY="3"
                                    orient="auto"
                                    markerUnits="strokeWidth"
                                >
                                    <path d="M0,0 L0,6 L9,3 z" fill="rgba(255,255,255,0.9)" />
                                </marker>
                                <marker
                                    id="arrowZ"
                                    markerWidth="10"
                                    markerHeight="10"
                                    refX="9"
                                    refY="3"
                                    orient="auto"
                                    markerUnits="strokeWidth"
                                >
                                    <path d="M0,0 L0,6 L9,3 z" fill="rgba(255,255,255,0.9)" />
                                </marker>
                            </defs>

                            <line
                                x1="250"
                                y1="300"
                                x2="60"
                                y2="414"
                                stroke="rgba(255,255,255,1)"
                                strokeWidth="2.5"
                                markerEnd="url(#arrowX)"
                            />
                            <line
                                x1="250"
                                y1="300"
                                x2="440"
                                y2="414"
                                stroke="rgba(255,255,255,1)"
                                strokeWidth="2.5"
                                markerEnd="url(#arrowY)"
                            />
                            <line
                                x1="250"
                                y1="300"
                                x2="250"
                                y2="120"
                                stroke="rgba(255,255,255,1)"
                                strokeWidth="2.5"
                                markerEnd="url(#arrowZ)"
                            />

                            <line
                                x1="250"
                                y1="300"
                                x2="150"
                                y2="360"
                                stroke="rgba(255,255,255,1)"
                                strokeWidth="2"
                            />
                            <line
                                x1="250"
                                y1="300"
                                x2="350"
                                y2="360"
                                stroke="rgba(255,255,255,1)"
                                strokeWidth="2"
                            />
                            <line
                                x1="250"
                                y1="300"
                                x2="250"
                                y2="200"
                                stroke="rgba(255,255,255,1)"
                                strokeWidth="2"
                            />

                            <polygon
                                points="250,200 150,260 250,320 350,260"
                                fill="rgba(30,58,138,0.18)"
                                stroke="rgba(30,58,138,0.75)"
                                strokeWidth="2"
                                strokeLinejoin="round"
                            />
                            <polygon
                                points="150,360 250,420 250,320 150,260"
                                fill="url(#topWallPattern)"
                                stroke="rgba(30,58,138,0.75)"
                                strokeWidth="2"
                                strokeLinejoin="round"
                            />
                            <polygon
                                points="350,360 250,420 250,320 350,260"
                                fill="rgba(30,58,138,0.92)"
                                stroke="rgba(30,58,138,0.75)"
                                strokeWidth="2"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cta