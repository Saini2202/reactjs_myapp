import * as actionTypes from "../types";

const initalState = {
    userId: '',
    isLoggedIn: false,
    otp: '',
    loader: false,
    pageCounter: 0,
    isOpenDrawer: false,
    role:'',
    email:'',
    successModal: {
        isSuccessModalOpen: false,
        value: "Assignment created successfully"
    },
    eloc:''
}

    const userReducer = (state = initalState, action) => {
        switch (action.type) {
            case actionTypes.LOGIN_DATA:
                return {
                    ...state,
                    ...action.payload
                }
            default: return state
        };
    }

    export function updateUserDetails(data) {

        return {
            type: actionTypes.LOGIN_DATA,
            payload: data,
        }
    }

export default userReducer;

