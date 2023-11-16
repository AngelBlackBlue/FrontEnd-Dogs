import { useDispatch, useSelector } from "react-redux";
import { clearDetail } from "../redux/action";

const useDetail = () => {

    const detail = useSelector(state => state.detail);
    const dispatch = useDispatch()
    const handleClearDetail = () => {
        dispatch(clearDetail())
    }

    return { detail, handleClearDetail}


}


export default useDetail