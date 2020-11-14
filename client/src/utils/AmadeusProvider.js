import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
const Amadeus = require('amadeus');


var amadeus = new Amadeus({
    clientId: 'nlVAqdyeoM5IfvtZko8Hcq6gELdwlAC0',
    clientSecret: 'O62ALpAuqGBGGCTG'
  });
  
  

export default amadeus;

//if we try to call our api and our token is expired, the response data will look like this: 
// {
//     "errors": [
//         {
//             "code": 38192,
//             "title": "Access token expired",
//             "detail": "The access token is expired",
//             "status": 401
//         }
//     ]
// }

// export const AmadeusContext = React.createContext();

// const useAmadeusContext = useContext(AmadeusContext);

// export const AmadeusProvider = ({...props}) => {
//     const [token, setToken] = useState();

//     useEffect(() => refreshToken(), []);

//     const refreshToken = () => {
        
        //this will call our 'Amadeus token access' call from postman
        // return fetch(`https://test.api.amadeus.com/v1/security/oauth2/token`, {
        //     mode: "no-cors",
        //     method: "POST",
            // body: {
            //     grant_type: "client_credentials",
            //     client_id: "nlVAqdyeoM5IfvtZko8Hcq6gELdwlAC0",
            //     client_secret: "O62ALpAuqGBGGCTG"
            // },
            // header: {
            // "Content-Type": `application/x-www-form-urlencoded`,
            // "Content-Length": `<calculated when request is sent>`,
            // "Host": `<calculated when request is sent>`,
            // "Accept-Encoding": `gzip, deflate, br`,
            // "Content-Type": `x-www-form-urlencoded`,
            // "Connection": `keep-alive`,                
            // }
    //     })
    //     .then(data => {

    //         //get the token from our response data object and use it to update the state of our token with setToken()
    //         //setToken()
    //     } );
    // }

//     const getIATACode = (keyword) => {
//         if (token) {
//             return axios.get(`https://test.api.amadeus.com/v1/reference-data/locations?subType=CITY&keyword=${keyword}`, {
//                 headers: {
//                     Authorization: `Bearer ${token}`
//                 }
//             })

//         }
//     }

//     //WITHIN Flights.js:
//     //import { useAmadeusContext from "../path/to/AmadeusProvider.js" }
//     //const { refreshToken, getIATACode, getFlights } = useAmadeusContext()
//     //getIATACode(userCityInput)
//     //.then(data => console.log(data) /*save the IATA code for our origin or destination, probably in state */)
//     //.catch(err => console.log(err) /* if we get that error response about the bad token, call refreshToken*/);

//     const getFlights = (originCode, destinationCode, departureDate, adultsCount, returnDate = "", travelClass, max = 10, childCount = 0) => {

//         const baseUrl = "https://test.api.amadeus.com/v2/shopping/flight-offers?";

//         //use the function arguments to add our query string parameters to the end of our base url
//         //create a new var "url" that is baseUrl + whatever query string parameters we add
//         const url = "";
//         if (token) {
//             return axios.get(url, {
//                 headers: {
//                     Authorization: `Bearer ${token}`
//                 }
//             })

//         }
//     }

//     return (
//         <AmadeusContext.Provider value={{ getIATACode, getFlights, refreshToken }} {...props}></AmadeusContext.Provider>
//     )

// }