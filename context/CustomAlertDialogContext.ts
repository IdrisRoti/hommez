import { ActionType } from "@/providers/CustomAlertDialogProvider";
import { createContext } from "react";

type TCustomAlertDialogContext = {
    state: { showDialog: boolean };
    dispatch: React.Dispatch<ActionType>;
    alert: (action: () => void, title?: string, description?: string) => void;
}

const CustomAlertDialogContext = createContext<TCustomAlertDialogContext>({
    state: { showDialog: false },
    dispatch: () => {},
    alert: () => {}
});

export default CustomAlertDialogContext;