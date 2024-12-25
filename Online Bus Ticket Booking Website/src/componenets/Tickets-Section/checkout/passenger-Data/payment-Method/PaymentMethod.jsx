import { useState } from "react"
import PaymentCard from "../../../../payment-Card/PaymentCard"
import MasterCardImg from '../../../../../../src/assets/mastercard.png'
import PaypalImg from '../../../../../../src/assets/paypal.png'
import CreditCardImg from '../../../../../../src/assets/creditcard.png'

const PaymentMethod = () => {
    const [selectPaymentMethod, setselectPaymentMethod] = useState('')
    const handleChange = (event) => {
        setselectPaymentMethod(event.target.value)
    }
    return (
        <div className="w-fit space-y-5 ">
            <h6 className="text-sm text-neutral-500 font-medium">
                Select Payment Method
            </h6>

            <div className="w-full grid grid-cols-3 gap-10">
                <PaymentCard
                    selectedPayment={selectPaymentMethod}
                    value="mastercard"
                    onChange={handleChange}
                    cardholderName={'Isha Shivaram'}
                    cardNum={'8888'}
                    cardImage={MasterCardImg}
                />
                <PaymentCard
                    selectedPayment={selectPaymentMethod}
                    value="paypal"
                    onChange={handleChange}
                    cardholderName={'Isha Shivaram'}
                    cardNum={'8888'}
                    cardImage={PaypalImg}
                />
                <PaymentCard
                    selectedPayment={selectPaymentMethod}
                    value="creditcard"
                    onChange={handleChange}
                    cardholderName={'Isha Shivaram'}
                    cardNum={'8888'}
                    cardImage={CreditCardImg}
                />
            </div>
            <div className="w-full flex justify-end"></div>
        </div>
    )
}

export default PaymentMethod;
