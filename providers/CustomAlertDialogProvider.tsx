"use client"

import CustomAlertDialog from '@/components/custom-alert-dialog';
import CustomAlertDialogContext from '@/context/CustomAlertDialogContext'
import { useReducer } from 'react'

type InitialStateType = {
    showDialog: boolean;
    action: () => void;
    title: string;
    description: string;
}

export type ActionType = { type: "SHOW_DIALOG", payload: {
    action: () => void,
    title?: string,
    description?: string
} } | { type: "CLOSE_DIALOG" }

const initialState = {
    showDialog: false,
    action: () => {},
    title: "Are you sure about this?", 
    description: "You should be aware that this action cannot be undone",
}

const reducer = (state: InitialStateType, action: ActionType) => {
    switch (action.type) {
        case "SHOW_DIALOG":
            return {...state, showDialog: true, action: action.payload.action, title: action.payload.title || state.title, description: action.payload.description || state.description}

        case "CLOSE_DIALOG":
            return {...state, showDialog: false}
    
        default:
            return state;
    }
}

const CustomAlertDialogProvider = ({ children}: {children: React.ReactNode}) => {

const [state, dispatch] = useReducer(reducer, initialState);

const alert = (action: () => void, title?: string, description?: string) => {
    dispatch({type: "SHOW_DIALOG", payload: {action, title, description}})
}

  return (
    <CustomAlertDialogContext.Provider value={{ state, dispatch, alert }}>
        {state.showDialog && <CustomAlertDialog title={state.title} description={state.description} action={state.action} />}
                {children}
    </CustomAlertDialogContext.Provider>
  )
}

export default CustomAlertDialogProvider