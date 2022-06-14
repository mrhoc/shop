import { INIT_STATE } from "../../constants";
import { getType, hideModal, showModal } from "../actions";

export default function modalReducer(state = INIT_STATE.modal, action) {
    switch (action.type) {
        case getType(showModal):
            return {
                ...state,
                isShow: true
            }
        case getType(hideModal):
            return {
                ...state,
                isShow: false
            }
        default:
            return state;

    }
}