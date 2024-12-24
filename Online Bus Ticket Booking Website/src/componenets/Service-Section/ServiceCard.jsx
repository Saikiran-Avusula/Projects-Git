

import PropTypes from 'prop-types';

const ServiceCard = ({ icon: Icon, title, desc }) => {
    return (
        <>
            {/* <div className="w-full bg-neutral-200 hover:bg-neutral-300 rounded-xl p-7 flex items-center justify-center gap-4 flex-col text-center cursor-pointer ease-in-out text-neutral-800">
                <div className="w-full flex items-center justify-center gap-x-3">
                    <div className="w-12 h-12 rounded-xl bg-neutral-400/40 flex items-center justify-center">
                        <Icon className="w-7 h-7 text-neutral-800" />
                    </div>
                    <h1 className="text-2xl font-bold">
                        {title}
                    </h1>
                </div>
                <p className="text-sm text-neutral-600 font-normal">
                    {desc}
                </p>
            </div> */}



            <div className="w-full bg-neutral-200 hover:bg-neutral-300 rounded-xl p-7 flex items-center justify-center gap-4 flex-col text-center cursor-pointer ease-in-out text-neutral-800 sm:p-5 md:p-6 lg:p-7">
                <div className="w-full flex items-center justify-center gap-x-3">
                    <div className="w-12 h-12 rounded-xl bg-neutral-400/40 flex items-center justify-center sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12">
                        <Icon className="w-7 h-7 text-neutral-800 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                    </div>
                    <h1 className="text-2xl font-bold sm:text-xl md:text-2xl lg:text-2xl">
                        {title}
                    </h1>
                </div>
                <p className="text-sm text-neutral-600 font-normal sm:text-xs md:text-sm lg:text-sm">
                    {desc}
                </p>
            </div>

        </>
    )
}


ServiceCard.propTypes = {
    icon: PropTypes.elementType.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
};

export default ServiceCard;
