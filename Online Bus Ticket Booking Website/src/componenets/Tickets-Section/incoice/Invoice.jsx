import RootLayout from "../../Layout-Section/RootLayout"
import TopLayout from "../../Top-Page-Layout/TopLayout"
import BusSeatsPhoto from '../../../../src/assets/bus-seats-photo.jpg'
import { useRef } from "react"
import { toPng } from "html-to-image"
import download from "downloadjs"
import PassengerInvoice from "./passengerInvoice/PassengerInvoice"
import CompanyInvoice from "./companyInvoice/CompanyInvoice"


// installed npm packeage "npm install html-to-image downloadjs" to download invoice card to a png file
const Invoice = () => {

    const invoiceRef = useRef(null);
    const handleDownload = async () => {
        if (invoiceRef.current === null) return;
        try {
            // convert invoice cat to image
            const dataUrl = await toPng(invoiceRef.current)

            // download image
            download(dataUrl, 'g-tech-invoice-report.png');
        } catch (error) {
            console.error("Error while downloading the invoice", error)
        }
    }
    return (
        <div className="py-20">
            <TopLayout className={"py-20"}
                bgImg={BusSeatsPhoto}
                title={"Collect Your Invoice"}
            />

            <RootLayout className="space-y-12 relative w-full pb-16 border pt-10" >
                <div className="w-full flex items-center justify-center">
                    {/* {invoice card} */}
                    <div    
                        ref={invoiceRef}
                        className="w-[90%] grid grid-cols-5 bg-white rounded-3xl 
                        border border-neutral-200 shadow-sm relative"
                    >

                        {/* left side (for passenger ) */}
                        <PassengerInvoice/>

                        {/* right for company */}
                        <CompanyInvoice/>

                        {/* /* cut circle  */}
                                                <div className="absolute -top-3 right-40 h-6 w-6 
                                                    rounded-full bg-white-50 border border-neutral-500"/>
                                                    
                                                <div className="absolute -top-3 right-5 h-6 w-6 
                                                    rounded-full bg-neutral-50 border"/>

                                            </div>
                                        </div>
                                            {/* download invoice card button */}
                    <div className="w-full flex justify-center items-center">
                        Download Button
                    </div>
            </RootLayout>
        </div>
    )
}

export default Invoice
