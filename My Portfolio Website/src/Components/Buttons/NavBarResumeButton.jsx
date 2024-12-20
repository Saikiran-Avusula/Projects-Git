

import { ArrowRight } from 'lucide-react';


function NavBarResumeButton() {

    const resumeHandlerButton = () => {
        window.open('/Sai Kiran Avusula Rssume (E).pdf', '_blank')
    }
    
    return (
        <>
            <div onClick={resumeHandlerButton} className='group relative cursor-pointer p-2 w-32 border border-black bg-white rounded-full overflow-hidden text-red-500 text-center font-semibold'>
                <span className='translate-x-1 group-hover:translate-x-12 group-hover:opacity-0 transition-all duration-300 inline-block'>
                    Resume
                </span>
                <div className='flex gap-1 text-white z-10 items-center absolute top-0 h-full w-full justify-center translate-x-12 opacity-0 group-hover:-translate-x-1 group-hover:opacity-100 transition-all duration-300'>
                    <span>Resume</span>
                    <ArrowRight />
                </div>
                <div className='absolute top-[40%] left-[20%] h-2 w-2 group-hover:h-full group-hover:w-full rounded-lg bg-black scale-[1] dark:group-hover:bg-red-500 group-hover:bg-[#263381] group-hover:scale-[1.8] transition-all duration-300 group-hover:top-[0%] group-hover:left-[0%] '></div>
            </div>
        </>
    );
}

export default NavBarResumeButton;
