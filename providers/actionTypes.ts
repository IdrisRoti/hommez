export type TOfferTypeAction = {
    type: "SELECT_OFFER_TYPE";
    payload: "Sell" | "Rent";
}

export type TPropertyTypeAction = {
    type: "SELECT_PROPERTY_TYPE";
    payload: "House" | "Apartment" | "Land";
}

export type TNumberOfBedsAction = {
    type: "ADD_NUMBER_OF_BEDS";
    payload: {
        action: "ADD" | "REMOVE",
    };
}

export type TNumberOfBathsAction = {
    type: "ADD_NUMBER_OF_BATHS";
    payload: {
        action: "ADD" | "REMOVE",
    };
}

export type TAmenitiesAction ={
    type: "ADD_AMENITY";
    payload: string;
  }