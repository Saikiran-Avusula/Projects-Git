
import { motion } from 'framer-motion';
import RootLayout from '../Layout-Section/RootLayout'
import Search from './Search';
const Hero = () => {
    const variants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <>
            <motion.div
                className='w-full flex-1 h-screen bg-[url("/src/assets/herobg.png")] bg-cover bg-no-repeat bg-top relative'
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={variants}
                transition={{ duration: 0.85, ease: "easeInOut" }}
            >
                <RootLayout className='absolute left-0 w-full h-full py-[10ch] bg-gradient-to-b from-netural-50/70 via-netural-50/50 to-netural-50/15 to neutral-50/5 flex items-center justify-start text-center flex-col gap-9'>
                    {/* title section */}
                    <div className='space-y-2'>
                        <motion.p
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.85, ease: "easeInOut" }}
                            className='text-lg text-neutral-500 font-medium'
                        >
                            Get Your bus tickets
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.85, ease: "easeInOut" }}
                            className='text-5xl text-neutral-800 font-bold capitalize'
                        >
                            Find best bus for You!
                        </motion.h1>
                    </div>

                    {/* serach section */}
                    <Search />

                </RootLayout>
            </motion.div>
        </>
    );
};

export default Hero;

