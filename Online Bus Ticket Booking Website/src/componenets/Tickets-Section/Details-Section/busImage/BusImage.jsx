import BusImageJpg1 from '../../../../assets/bus-image1.jpg'
import BusImageJpg2 from '../../../../assets/bus-image2.jpg'
import BusImageJpg3 from '../../../../assets/bus-image3.jpg'
import BusImageJpg4 from '../../../../assets/bus-image4.png'

const BusImage = () => {
    return (
        <div className="w-full grid grid-cols-4 gap-5 items-center border-t border-neutral-300 pt-7 pb-2">
            <div className="w-full rounded-xl overflow-hidden">
                <img src={BusImageJpg1} alt="Bus Image" className="w-full aspect-video object-cover objectcenter rounded-xl border border-neutral-300/50 bg-neutral-200/15" />
            </div>
            <div className="w-full rounded-xl overflow-hidden">
                <img src={BusImageJpg2} alt="Bus Image" className="w-full aspect-video object-cover objectcenter rounded-xl border border-neutral-300/50 bg-neutral-200/15" />
            </div>
            <div className="w-full rounded-xl overflow-hidden">
                <img src={BusImageJpg3} alt="Bus Image" className="w-full aspect-video object-cover objectcenter rounded-xl border border-neutral-300/50 bg-neutral-200/15" />
            </div>
            <div className="w-full rounded-xl overflow-hidden">
                <img src={BusImageJpg4} alt="Bus Image" className="w-full aspect-video object-cover objectcenter rounded-xl border border-neutral-300/50 bg-neutral-200/15" />
            </div>

        </div>
    )
}

export default BusImage
