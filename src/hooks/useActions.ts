import { bindActionCreators } from "redux"
import { useAppDispatch } from "./useAppDispatch"
import { allActionCreators } from "../store/reducers/action-creators"

export const useActions = () => {
    const dispatch = useAppDispatch()
    return bindActionCreators(allActionCreators, dispatch)
}