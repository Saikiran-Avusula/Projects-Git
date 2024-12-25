import { useEffect, useState } from "react"
import PropTypes from 'prop-types';
// import { ToastContainer, toast, Bounce } from "react-toastify";


const ErrorMssage = ({ message }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [countdown, setCountdown] = useState(5);

    // const notify = () => toast("Wow so easy!");

    useEffect(() => {
        if (countdown > 0) {

            const timer = setTimeout(() => {
                setCountdown(prev => prev - 1);
            }, 1000);
            return () => clearTimeout(timer);
        } else {
            setIsVisible(false);
        }
    }, [countdown]);

    if (!isVisible) {
        return null;
    }
    return (
        <>
            <div className="fixed top-28 p-4 right-4 mb-4 text-sm text-neutral-50 bg-red-500 rounded-xl shadow-lg transition transform-gpu animate-slide-in-">
                <div className="flex items-center justify-between">
                    <span>{message}</span>
                    <span className="ml-4 font-bold">{countdown}</span>
                </div>
            </div>

            {/* <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            >{message}</ToastContainer> */}
        </>
    )
}
ErrorMssage.propTypes = {
    message: PropTypes.string.isRequired,
};

export default ErrorMssage;

