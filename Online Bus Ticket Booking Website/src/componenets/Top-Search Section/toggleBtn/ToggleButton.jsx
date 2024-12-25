import { useEffect, useRef, useState } from "react"


const ToggleButton = ({buttonText, buttonTextHidden, children}) => {
    const [isVisible, setIsVisible] = useState(true);
    const toggleRef = useRef(null)

    const toggleVisibility = () =>{
        setIsVisible(!isVisible)
    }

    // handle clicks outside toggle button
    const handlOutSides = (event) =>{
        if(toggleRef.current && !toggleRef.current.contains(event.target)){
            setIsVisible(false)
        }
    }

    useEffect(()=>{
        // add event listender
        document.addEventListener('mousedown', handlOutSides);
    }, [])
    return (
        <div className="w-full h-auto" ref={toggleRef}>
            <button
            onClick={toggleVisibility}
            className={`w-fit px-4 py-2 border border-primary 
                ${!isVisible ? 'bg-red-500 text-neutral-50' : 'border-red-500 bg-transparent text-red-500'} rounded-lg transition`}
            >
                {isVisible ? buttonTextHidden : buttonText }
            </button>
            {isVisible && ( 
              <div className="mt-10 p-4 bg-neutral-50 border border-neutral-300 rounded-xl shadow-sm">
                {children}
              </div>
            )}
        </div>
    )
}

export default ToggleButton
