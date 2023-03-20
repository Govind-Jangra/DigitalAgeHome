import {createGlobalState} from "react-hooks-global-state"
const{setGlobalState,useGlobalState} = createGlobalState({
    id:"dummy",
    isAuth:false,
});
export {useGlobalState,setGlobalState};