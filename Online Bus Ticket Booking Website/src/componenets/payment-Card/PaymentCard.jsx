

import PropTypes from 'prop-types';
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from 'react-icons/io';

const PaymentCard = ({ selectedPayment, value, onChange,
    cardNum, cardImage, cardholderName }) => {

    return (
        <div>
            <label htmlFor="cardsPayments"
                className={`w-full flex items-center border-2
                ${selectedPayment == value ? "border-red-500/80 bg-red-200/15"
                        : "border-red-300 bg-neutral-100/40"} rounded-xl relative cursor-pointer`}
                onClick={() => onChange({ target: { value } })}
            >
                <div className="w-full flex items-center justify-between gap-7">
                    <div className="flex items-center gap-x-3"></div>
                    <div className="flex items-center justify-center">
                        <div className="w-fit h-16 rounded-lg">
                            <img src={cardImage} alt="payment img"
                                className="w-fit h-full object-contain pr-2 object-center rounded-lg" />
                        </div>

                        <div className="space-y-0.5">
                            <h1 className="text-base neutral-600 font-medium text-sm px-5">
                                {cardholderName}
                            </h1>
                            <p className="text-neutral-500 text-sm text-center font-normal">
                                **** {cardNum.slice(-4)}
                            </p>
                        </div>

                        <div className="flex items-center justify-center px-1">
                            {selectedPayment === value ? (
                                <IoMdRadioButtonOn className='w-7 h-7 text-red-500' />
                            ) : (
                                <IoMdRadioButtonOff className='w-7 h-7' />
                            )}
                        </div>
                    </div>
                </div>

                {/* radio button */}
                <input type="radio" value={value}
                    checked={selectedPayment === value}
                    onChange={onChange} className="hidden" />
            </label>
        </div>
    )
};

PaymentCard.propTypes = {
    selectedPayment: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    cardNumber: PropTypes.string,
    cardNum: PropTypes.string,
    cardImage: PropTypes.string,
    cardholderName: PropTypes.string
};


export default PaymentCard
