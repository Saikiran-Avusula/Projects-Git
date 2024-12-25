import { useState } from "react"
import { FaX } from "react-icons/fa6"
import PropTypes from 'prop-types';


const WarningAlert = ({ message }) => {
    const [isVisisble, setIsVisisble] = useState(true)

    const handleClose = () => {
        setIsVisisble(false)
    }

    if (!isVisisble) {
        return null;
    }

    return (
        <div className="flex items-center justify-center justify-between p-4 text-sm text-yellow-600 bg-yellow-100 rounded-xl" role="alert">
            <span>{message}</span>
            <button
                onClick={handleClose}
                aria-label="Close"
                className="ml-4 text-primary hover:text-red-500/90" >
                <FaX className="w-4 h-3" />
            </button>
        </div>
    )
}
WarningAlert.propTypes = {
    message: PropTypes.string.isRequired,
};

export default WarningAlert

