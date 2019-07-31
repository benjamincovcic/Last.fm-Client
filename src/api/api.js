'use strict';

import store from '../core/store';
import axios from 'axios';

//import { VALIDATION_MSG } from '../util/Constants';

export const invokeGetWebService = (method, url, data) => {

  return new Promise(function (success, failed) {

    if (!store.getState().deviceState.isNetworkConnectivityAvailable) {
      failed({ status: 503, message: "VALIDATION_MSG.NO_INTERNET" });
    }
      
    let headers = {
      'Content-Type': 'application/json', 
      'Accept': 'application/json',
    };

    const config = {
      method,
      url,
      data,
      headers,
    };

    // const {
    //   REQ_FAILED,
    // } = VALIDATION_MSG;

    axios.create({
      baseURL: 'http://ws.audioscrobbler.com',
      timeout: 45000,
    })(config)
      .then((response) => {
        const { status, data } = response;
        if (status === 200) {
          try {
            return data;
          } catch (e) {
            throw { status, message: "REQ_FAILED" };
          }
        }else{
          throw { status, message: "REQ_FAILED" };
        }
      }).then((response) => {
        success(response);
      }).catch((err) => {
        failed(err);
      }); 
  });
};