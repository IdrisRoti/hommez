"use client"

// import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { motion } from "framer-motion";

type TListMap = {
  showMap: boolean;
}

const ListsMap = ({showMap}: TListMap) => {
  // const containerStyle = {
  //   width: '400px',
  //   height: '320px',
  // }
  // const coordinate = { lat: -34.397, lng: 150.644}

  return (
    <motion.div
      animate={showMap ? { width: "100%"} : { width: 0}}
      transition={{ duration: .6}}
      className={`w-full relative hidden lg:block`}>
        <div className={`sticky top-[8rem] w-full bg-gray-300 h-80`}>
            {/* <LoadScript
              googleMapsApiKey=""
            >
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={coordinate}
                zoom={13}
              >

              </GoogleMap>
            </LoadScript> */}
        </div>
    </motion.div>
  )
}

export default ListsMap