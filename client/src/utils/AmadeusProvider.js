import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
const Amadeus = require('amadeus');


var amadeus = new Amadeus({
    clientId: '9A15DsQaP8TEfPKtjThzJ9nU26SkFPHz',
    clientSecret: 'ZuTGp2wEXpCi1hnT'
  });
  
  

export default amadeus;

