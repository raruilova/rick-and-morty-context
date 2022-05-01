import { useContext } from "react"
import { RMcontext } from "../context/RMcontext"

const useRM = () => {
    return useContext(RMcontext);
}

export default useRM;