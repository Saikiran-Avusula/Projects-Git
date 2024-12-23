

const TopSearchCards = ({routeForm, routeTo, timeDuration, price}) => {


    return (
        <>
            <div className="w-full rounded-xl p-5 border-2 border-netiural-300 space-y-10">
                <div className="space-y-3.5 w-full">
                    {/* Route */}
                    <div className="space-y-0">
                        <div className="w-full flex items-center justify-between">
                            <p className="text-xs-neutral-400 font-normal">
                                From
                            </p>
                            <p className="text-xs-neutral-400 font-normal">
                                To
                            </p>
                        </div>

                        <div className="w-full flex items-center justify-between gap-x-3">
                                
                                {/*From route  */}
                                <h1 className="text-xl text-neutral-600 font-semibold">
                                    {routeForm}
                                </h1>


                                {/* time duration */}
                                <div className="flex-1 border-dashed border-neutral-400 relative">
                                    <p className="absolute w-fit px-3 h-6 top-1/2 left-1/2 -translate-x-12 -translate-y-1/2 
                                    bg-neutral-50 rounded-full flex items justify-center text-sm text-neutral-500 font-normal border-dashed border border-neutral-400">
                                        {timeDuration}
                                    </p>
                                </div>


                                {/* to route */}
                                <h1 className="text-xl text-neutral-600 font-semibold">
                                    {routeTo}
                                </h1>
                        </div>
                    </div>

                    {/* Facilities */}
                    <div className="w-full flex items-center gap-3 flex-wrap">
                    
                    </div>
                </div>
                <div className="w-full flex items-center justify-between">

                </div>
            </div>
        </>
    )
}

export default TopSearchCards;