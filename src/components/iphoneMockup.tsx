type IphoneMockupProps = {
    children: React.ReactNode;
    className?: string;
    frameClassName?: string;
};

const IphoneMockup = ({ children, className = "", frameClassName = "" }: IphoneMockupProps) => {
    return (
        <div className={`relative flex items-center justify-center ${className}`}>
            <div className={`relative w-[300px] aspect-9/19 rounded-[3rem] border-[3px] border-slate-900 bg-slate-900 ${frameClassName}`}>
                <div className="absolute inset-[7px] rounded-[2.4rem] bg-white overflow-hidden">
                    <div className="absolute left-1/2 -translate-x-1/2 top-2 w-28 h-7 rounded-full bg-slate-900" />
                    <div className="w-full h-full pt-8">{children}</div>
                </div>
            </div>
        </div>
    );
};

export default IphoneMockup;

