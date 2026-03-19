type Corner = "top-left" | "top-right" | "bottom-left" | "bottom-right";

interface CrossProps {
    /** Który róg sekcji – środek krzyżyka jest w tym rogu */
    corner: Corner;
    /** Długość każdego ramienia (px) – pełny + w wszystkie 4 strony */
    length?: number;
    /** Grubość kresek (px) */
    strokeWidth?: number;
    /** Kolor kropki (środka) */
    color?: string;
    /** Kolor kresek ramion (jeśli nie podany, używa `color`) */
    strokeColor?: string;
    /** Promień kropki na środku (px), 0 = bez kropki */
    dotRadius?: number;
    /** Opcjonalna klasa na wrapper */
    className?: string;
}

const CORNER_STYLE: Record<
    Corner,
    { left?: string; right?: string; top?: string; bottom?: string }
> = {
    "top-left": { left: "-0.25px", top: "-0.25px" },
    "top-right": { right: "-0.25px", top: "-0.25px" },
    "bottom-left": { left: "-0.25px", bottom: "-0.25px" },
    "bottom-right": { right: "-0.25px", bottom: "-0.25px" },
};

const Cross = ({
    corner,
    length = 10,
    strokeWidth = 1,
    color = "currentColor",
    strokeColor,
    dotRadius = 1.5,
    className = "",
}: CrossProps) => {
    const pos = CORNER_STYLE[corner];
    const sw = strokeWidth;
    const strokeCol = strokeColor ?? color;
    const size = length * 2 + sw * 2;
    const center = length + sw;
    const gap = dotRadius > 0 ? dotRadius + sw * 2 : sw * 2;


    const translate =
        corner === "top-left"
            ? `translate(-${center}px, -${center}px)`
            : corner === "top-right"
                ? `translate(${center}px, -${center}px)`
                : corner === "bottom-left"
                    ? `translate(-${center}px, ${center}px)`
                    : `translate(${center}px, ${center}px)`;

    return (
        <div
            className={`absolute pointer-events-none bg-neutral-100 overflow-hidden ${className}`}
            style={{
                width: size,
                height: size,
                ...pos,
                transform: translate,
            }}
            aria-hidden
        >
            <svg width={size} height={size} className="overflow-hidden text-black">
                {/* Lewo */}
                <line
                    x1={center - length}
                    y1={center}
                    x2={center - gap}
                    y2={center}
                    stroke={strokeCol}
                    strokeWidth={strokeWidth}
                />
                {/* Prawo */}
                <line
                    x1={center + gap}
                    y1={center}
                    x2={center + length}
                    y2={center}
                    stroke={strokeCol}
                    strokeWidth={strokeWidth}
                />
                {/* Góra */}
                <line
                    x1={center}
                    y1={center - length}
                    x2={center}
                    y2={center - gap}
                    stroke={strokeCol}
                    strokeWidth={strokeWidth}
                />
                {/* Dół */}
                <line
                    x1={center}
                    y1={center + gap}
                    x2={center}
                    y2={center + length}
                    stroke={strokeCol}
                    strokeWidth={strokeWidth}
                />
                {dotRadius > 0 && (
                    <circle cx={center} cy={center} r={dotRadius} fill={color} />
                )}
            </svg>
        </div>
    );
};

export default Cross;
