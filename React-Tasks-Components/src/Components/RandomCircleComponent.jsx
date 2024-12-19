import { useState, useEffect } from "react";

const RandomCircleComponent = () => {

  const [circle, setCircle] = useState([])
  // const [count, setCount] = useState(0)

  const generateCircle = (event) => {
    // if 2 circles in screen, it will be cleared from screen else moves to else block
    if (circle.length >= 2) {
      console.log("cleared scrren");
      setCircle([]); // Clear all circles if there are already 2
      // setCount(count + 1)
    }
    else {
      const randomRadius = Math.floor(Math.random() * 181) + 20; // random radius
      setCircle((previous) =>
        [...previous, { x: event.clientX, y: event.clientY, randomRadius }]
      );
      console.log("circle created")
    }
  };

  useEffect(() => {
    window.addEventListener("click", generateCircle);
    // const a = window.addEventListener("click", generateCircle);
    // cleanup function
    return () => {
      window.removeEventListener('click', generateCircle);
      console.log("clean up executed");
    }
  })

  // random generated pixel values
  useEffect(() => {
    if (circle.length > 0) {
      circle.forEach(data => {
        console.log(`x: ${data.x} px, y: ${data.y} px`);
        console.log(`${circle.length}`);
      })
    }
  }, [circle])



  return (
    <>

      {circle.map((data, index) => {
        return (
          <div key={index}
            style={{
              position: 'absolute',
              left: data.x,
              top: data.y,
              borderRadius: '50%',
              width: `${data.randomRadius}px`,
              height: `${data.randomRadius}px`,
              borderColor: 'blue',
              backgroundColor: 'red',
              cursor: 'pointer'
            }}>
            {/* <h1>{`${circle.length}`} </h1> */}
          </div>
        )
      })}
    </>
  )
}

export default RandomCircleComponent




// import { useEffect, useState } from "react";

// const CircleComponent = () => {
//   const [circleData, setCircleData] = useState([]);
//   const randomRadius = Math.floor(Math.random() * (200 - 20 + 1)) + 20;

//   const generate = (e) => {
//     setCircleData((prev) => [
//       ...prev,
//       { x: e.clientX, y: e.clientY, radius: randomRadius },
//     ]);
//   };

//   console.log(circleData);

//   useEffect(() => {
//     window.addEventListener("click", generate);
//     return () => window.removeEventListener("click", generate);
//   }, [generate]);

//   return (
//     <>
//       {circleData.map((data) => (
//         <div key={data.x + data.y}>
//           <div
//             style={{
//               height: `${data.radius}px`,
//               width: `${data.radius}px`,
//               backgroundColor: "red",
//               borderRadius: "50%",
//               position: "absolute",
//               top: `${data.y}px`,
//               left: `${data.x}px`,
//             }}
//           />
//         </div>
//       ))}
//     </>
//   );
// };

// export default CircleComponent;
