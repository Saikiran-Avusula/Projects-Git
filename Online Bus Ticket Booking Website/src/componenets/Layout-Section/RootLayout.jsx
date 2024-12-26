import { useEffect } from "react";
import PropTypes from 'prop-types';

const RootLayout = ({ children, className }) => {

    // automatically scroll to top when route you naviagate to another page or new page
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    return (
        <>
            <div className=
                {`w-full lg:px-24 md:px-16 sm:px-7 px-4
            ${className}`}
            >
                {children}
            </div>
        </>
    )
}
RootLayout.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

export default RootLayout;