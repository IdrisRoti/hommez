export type TOfferTypeAction = {
    type: "SELECT_OFFER_TYPE";
    payload: "Sell" | "Rent";
}

export type TPropertyTypeAction = {
    type: "SELECT_PROPERTY_TYPE";
    payload: string;
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
    payload: {
        action: 'ADD' | "REMOVE",
        amenity: string,
    };
  }

export type TPropertyNameAction = {
    type: "ADD_PROPERTY_NAME",
    payload: string;
}

export type TPropertyPriceAction = {
    type: "ADD_PROPERTY_PRICE",
    payload: string;
}