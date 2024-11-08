# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



before using the function, we used class based components
So, right now we are acheving this things by using useEffect() hook, all this three methods 

Life cycle Methods 
Joined => 1. ComponentDidMount()
(after render(in Updated in original DOM) to perform any actions,)

After getting hike => ? 2. ComponentDidUpdate()
(after updating a state, to perform any action)

before leaving company => ? 3. componentWillUnmount()
(component ni origonal DOM remove chesa mundu chese actions/perform logic)
 - return ur laptop 


oka component lo first context create cheyali, ante value anuko or state(gloabal state or golabal value)

//context => state (globabal state) -> for creating it used => createContext  function use chestham, it retuens an object that is "State"

e state ni top level lo componenet ki attcah chesthe it provide all it's childerns. So, by it can be accessble for for all it's childerns 

So, createContext function ni use chesi "state" tesukunnam, it has a property called -> "Provider" 
Now, we have to warp the parent componenet init, by wraping it 
