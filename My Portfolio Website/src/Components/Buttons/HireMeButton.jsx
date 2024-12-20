
const HireMeButton = () => {
    return (
        <>
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-white-400 focus:ring-offset-2 focus:ring-offset-red-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ffffff_0%,#000000_50%,#ffffff_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#ffffff_0%,#000000_50%,#ffffff_100%)]" />
                <span className=" inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full dark:bg-red-500 bg-red-500 px-8 py-1 text-sm font-medium dark:text-white text-white backdrop-blur-3xl">
                    Hire Me
                </span>
            </button>

        </>
    );
};

export default HireMeButton;
