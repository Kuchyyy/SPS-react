type Corner = "top-left" | "top-right" | "bottom-left" | "bottom-right";

interface CrossProps {
    /** Który róg sekcji – środek krzyżyka jest w tym rogu */
    corner: Corner;
    /** Długość każdego ramienia (px) – pełny + w wszystkie 4 strony */
    length?: number;
    /** Grubość kresek (px) */
    strokeWidth?: number;
    /** Kolor kresek (domyślny) */
    color?: string;
    /** Kolor kresek ramion (jeśli nie podany, używa `color`) */
    strokeColor?: string;
    /** Opcjonalna klasa na wrapper */
    className?: string;
    /** Długości ramion niezależnie dla każdej strony (px) */
    armLengths?: {
        top?: number;
        right?: number;
        bottom?: number;
        left?: number;
    };
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
    color = "oklch(70.8% 0 0)",
    strokeColor,
    className = "",
    armLengths,
}: CrossProps) => {
    const pos = CORNER_STYLE[corner];
    const sw = strokeWidth;
    const strokeCol = strokeColor ?? color;
    const leftLen = armLengths?.left ?? length;
    const rightLen = armLengths?.right ?? length;
    const topLen = armLengths?.top ?? length;
    const bottomLen = armLengths?.bottom ?? length;

    const sizeX = leftLen + rightLen + sw * 2;
    const sizeY = topLen + bottomLen + sw * 2;
    const size = Math.max(sizeX, sizeY);
    const center = size / 2;
    const gap = 0;


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
            className={`absolute pointer-events-none  overflow-hidden ${className}`}
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
                    x1={center - leftLen}
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
                    x2={center + rightLen}
                    y2={center}
                    stroke={strokeCol}
                    strokeWidth={strokeWidth}
                />
                {/* Góra */}
                <line
                    x1={center}
                    y1={center - topLen}
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
                    y2={center + bottomLen}
                    stroke={strokeCol}
                    strokeWidth={strokeWidth}
                />
            </svg>
        </div>
    );
};

export default Cross;
