import { ActionType, InitialStateType } from "@/providers/CreateNewListProvider";
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
        propertyName: "",
        propertyPrice: ""
    },
    dispatch: () => null
})