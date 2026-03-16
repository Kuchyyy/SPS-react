type MacBookMockupProps = {
    children: React.ReactNode;
    className?: string;
    slim?: boolean;
};

const MacBook = ({ children, className = "", slim = false }: MacBookMockupProps) => {
    const screenBorder = slim ? "border-0.5 sm:border-2" : "border-0.5 sm:border-4";
    const screenPadding = slim ? "p-1" : "p-1 ";
    const baseBorder = slim ? "border-[2px] sm:border-[2px]" : "border-[3px] sm:border-4";
    const bottomHeight = slim ? "h-2 sm:h-2 lg:h-3" : "h-3 sm:h-4 lg:h-4";

    return (
        <div className={`flex flex-col items-center shrink-0 ${className}`}>
            <div className={`relative w-full rounded-t-xl rounded-b-sm ${screenBorder} border-stone-800 bg-stone-900 ${screenPadding}`}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-3 sm:w-28 sm:h-3.5 lg:w-32 lg:h-4 rounded-b-full bg-stone-800 z-10" />
                <div className="relative w-full aspect-video overflow-hidden rounded-md bg-stone-950">
                    {children}
                </div>
            </div>
            <div className={`relative -mt-0.5 sm:-mt-1 lg:-mt-1.5 ${bottomHeight} w-[105%] rounded-b-xl ${baseBorder} border-t-0 border-stone-800 bg-stone-900 `} />
        </div>
    );
};

export default MacBook;
