import { motion } from 'framer-motion';
import RootLayout from '../Layout-Section/RootLayout';
import Search from './Search';

const Hero = () => {
    const variants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <>
            <motion.div
                className="w-full flex-1 h-screen bg-[url('/src/assets/herobg.png')] bg-cover bg-no-repeat bg-top relative"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={variants}
                transition={{ duration: 0.85, ease: "easeInOut" }}
            >
                {/* Root Layout with Gradient Background */}
                <RootLayout className="absolute left-0 w-full h-full py-10 md:py-[10ch] bg-gradient-to-b from-neutral-50/70 via-neutral-50/50 to-neutral-50/15 flex flex-col items-center justify-start gap-9">
                    {/* Title Section */}
                    <div className="space-y-3 text-center px-5">
                        <motion.p
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.85, ease: "easeInOut" }}
                            className="text-base sm:text-lg text-neutral-500 font-medium"
                        >
                            Get Your Bus Tickets
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.85, ease: "easeInOut" }}
                            className="text-3xl sm:text-5xl lg:text-6xl text-neutral-800 font-bold capitalize leading-tight"
                        >
                            Find the Best Bus for You!
                        </motion.h1>
                    </div>

                    {/* Search Section */}
                    <div className="w-full max-w-[90%] md:max-w-[70%] lg:max-w-[60%]">
                        <Search />
                    </div>
                </RootLayout>
            </motion.div>
        </>
    );
};

export default Hero;
