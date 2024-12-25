

import PropTypes from 'prop-types';
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from 'react-icons/io';

const PaymentCard = ({ selectedPayment, value, onChange,
    cardNum, cardImage, cardholderName }) => {

    return (
        <div>
            <label htmlFor="cardsPayments"
                className={`w-full flex items-end px-5 py-2 border-2 
                ${selectedPayment == value ? "border-indigo-500/80 bg-indigo-500/15"
                        : "border-neutral-300 bg-neutral-100/40"} rounded-xl relative cursor-pointer`}
                onClick={() => onChange({ target: { value } })}
            >
                <div className="w-full flex items-center justify-between gap-7">
                    <div className="flex items-center gapx-3"></div>
                    <div className="flex items-center justify-center">
                        <div className="w-fit h-16 rounded-lg pr-5 ">
                            <img src={cardImage} alt="payment img"
                                className="w-fit h-full object-contain object-center rounded-lg" />
                        </div>

                        <div className="space-y-0.5">
                            <h1 className=" text-base neutral-600 font-medium">
                                {cardholderName}
                            </h1>
                            <p className="text-neutral-500 text-sm font-normal">
                                **** {cardNum.slice(-4)}
                            </p>
                        </div>

                        <div className="flex items-center justify-center px-4">
                            {selectedPayment === value ? (
                                <IoMdRadioButtonOn className='w-7 h-7 text-indigo-500' />
                            ) : (
                                <IoMdRadioButtonOff className='w-7 h-7' />
                            )}
                        </div>
                    </div>
                </div>
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
