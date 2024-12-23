import { ActionType, InitialStateType } from "@/providers/TCreateNewListProvider";
import { createContext, Dispatch } from "react";

type TCreateNewListContext = {
    state: InitialStateType;
    dispatch: Dispatch<ActionType>
}

export const CreateNewListContext = createContext<TCreateNewListContext>({
    state: {
        selectedOfferType: "",
        propertyType: "",
        propertyDetails: {
            noOfBeds: 1,
            noOfBaths: 1,
        },
        amenities: [],
        propertyName: ""
    },
    dispatch: () => null
})