import React from "react";

class Api {
  constructor(BASE_URL) {
    this.BASE_URL = BASE_URL;
  }
}

const baseUrl = new Api("https://3.122.60.10:8443/api/v1");

export const getBaseUrl = () => {
  return baseUrl.BASE_URL;
};
