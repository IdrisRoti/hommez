"use client"

import { CreateNewListContext } from '@/context/CreateNewListContext'
import { useReducer } from 'react';
import { TAmenitiesAction, TNumberOfBathsAction, TNumberOfBedsAction, TOfferTypeAction, TPropertyImagesAction, TPropertyNameAction, TPropertyPDescAction, TPropertyPriceAction, TPropertyTypeAction } from './actionTypes';

export type InitialStateType = {
  selectedOfferType: string;
  propertyType: string;
  propertyDetails: {
    noOfBeds: number;
    noOfBaths: number;
  };
  amenities: string[];
  propertyName: string;
  propertyPrice: string;
  propertyImages: {url: string, publicId: string}[];
  propertyDesc: string;
}

export type ActionType = TOfferTypeAction | TPropertyTypeAction | TNumberOfBedsAction | TNumberOfBathsAction | TAmenitiesAction | TPropertyNameAction | TPropertyPriceAction | TPropertyImagesAction | TPropertyPDescAction
  
  const initialState = {
    selectedOfferType: "Sell",
    propertyType: "Apartments",
    propertyDetails: {
      noOfBeds: 1,
      noOfBaths: 1
    },
    amenities: [],
    propertyName: "",
    propertyPrice: "",
    propertyImages: [],
    propertyDesc: ""
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
        if(action.payload.action === "ADD") {
          return {...state, amenities: [...state.amenities, action.payload.amenity]}
        } else if (action.payload.action === "REMOVE") {
          return {...state, amenities: state.amenities.filter((amenity) => amenity !== action.payload.amenity)}
        }

      case "ADD_PROPERTY_NAME":
        return {...state, propertyName: action.payload as string}

      case "ADD_PROPERTY_DESCRIPTION":
        return {...state, propertyDesc: action.payload}

      case "ADD_PROPERTY_PRICE":
        return {...state, propertyPrice: action.payload}

      case "ADD_PROPERTY_IMAGES":
        return {...state, propertyImages: [...state.propertyImages, action.payload]}

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