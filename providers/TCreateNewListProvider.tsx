"use client"

import { CreateNewListContext } from '@/context/CreateNewListContext'
import { useReducer } from 'react';
import { TAmenitiesAction, TNumberOfBathsAction, TNumberOfBedsAction, TOfferTypeAction, TPropertyTypeAction } from './actionTypes';

export type InitialStateType = {
  selectedOfferType: string;
  propertyType: string;
  propertyDetails: {
    noOfBeds: number;
    noOfBaths: number;
  };
  amenities: string[];
}

export type ActionType = TOfferTypeAction | TPropertyTypeAction | TNumberOfBedsAction | TNumberOfBathsAction | TAmenitiesAction
  
  const initialState = {
    selectedOfferType: "Sell",
    propertyType: "House",
    propertyDetails: {
      noOfBeds: 1,
      noOfBaths: 1
    },
    amenities: []
  }
   
  const reducer = (state: InitialStateType, action: ActionType) => {
    switch (action.type) {
      case "SELECT_OFFER_TYPE":
        return {...state, selectedOfferType: action.payload}

      case "SELECT_PROPERTY_TYPE":
        return {...state, propertyType: action.payload}

      case "ADD_NUMBER_OF_BEDS":
        if(action.payload.action === "ADD") {
            return {...state, propertyDetails: {...state.propertyDetails, noOfBeds: state.propertyDetails.noOfBeds+ 1}}
        } else {
            return {...state, propertyDetails: {...state.propertyDetails, noOfBeds: state.propertyDetails.noOfBeds > 1 ? state.propertyDetails.noOfBeds-1 : 1}}
        }

      case "ADD_NUMBER_OF_BATHS":
        if(action.payload.action === "ADD") {
            return {...state, propertyDetails: {...state.propertyDetails, noOfBaths: state.propertyDetails.noOfBaths+ 1 }}
        } else {
            return {...state, propertyDetails: {...state.propertyDetails, noOfBaths: state.propertyDetails.noOfBaths > 1 ? state.propertyDetails.noOfBeds-1 : 1}}
        }

      case "ADD_AMENITY":
      return {...state, amenities: [...state.amenities, action.payload]}

      default:
        return state;
    }
  }

const CreateNewListProvider = ({children}:{children: React.ReactNode}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

  return <CreateNewListContext.Provider value={{state, dispatch}}>
    {children}
  </CreateNewListContext.Provider>
}

export default CreateNewListProvider;