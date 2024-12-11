import { useEffect, useState } from "react"

function Timer() {

    const [date, setDate] = useState(new Date())

    // ekada useffect ni prathi render ki re-render chey n=mani chepthunam
    // question is what about cleanup function....?
    // ante when componenet is about to unmount timer has to remove from the DOM. i.e., when toggle is cliked
    useEffect(() => {

        const timerID = setInterval(() => {
            console.log("i'm timer");
            setDate(new Date())
        }, 1000);

        return () => {
            console.log("i'm removing timer in web page");

            clearInterval(timerID);
        }
    })
    // depend

    return (
        <>
            <h1>Date (Local): {date.toLocaleDateString()}</h1>
            <h1>Date (General): {date.toDateString()}</h1>
            <hr />
            <h1>Time (Local): {date.toLocaleTimeString()}</h1>
            <h1>Time (General): {date.toTimeString()}</h1>
        </>
    )
}

export default Timer