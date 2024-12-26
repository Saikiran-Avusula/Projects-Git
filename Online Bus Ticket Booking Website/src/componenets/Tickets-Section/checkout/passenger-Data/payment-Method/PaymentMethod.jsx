import { useState } from "react"
import PaymentCard from "../../../../payment-Card/PaymentCard"
import MasterCardImg from '../../../../../../src/assets/mastercard.png'
import PaypalImg from '../../../../../../src/assets/paypal.png'

import { FaPlus } from "react-icons/fa"

const PaymentMethod = () => {
    const [selectPaymentMethod, setselectPaymentMethod] = useState('')
    const handleChange = (event) => {
        setselectPaymentMethod(event.target.value)
    }
    return (
        <div className="w-full space-y-3 border rounded-lg border-red-400 p-4">
            <h6 className="text-sm text-neutral-500 font-medium text-center">
                Select Payment Method
            </h6>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                <PaymentCard
                    selectedPayment={selectPaymentMethod}
                    value="mastercard"
                    onChange={handleChange}
                    cardholderName={'Shivaram'}
                    cardNum={'8888'}
                    cardImage={MasterCardImg}
                />
                <PaymentCard
                    selectedPayment={selectPaymentMethod}
                    value="paypal"
                    onChange={handleChange}
                    cardholderName={'Shivaram'}
                    cardNum={'8888'}
                    cardImage={PaypalImg}
                />
            </div>

            <div className="w-full flex justify-end mt-4">
                <div className="w-fit flex items-center justify-center gap-x-2 cursor-pointer text-base font-normal text-red-500">
                    <FaPlus />
                    <p className="capitalize">Add New Card</p>
                </div>
            </div>
        </div>
    )
}

export default PaymentMethod;
