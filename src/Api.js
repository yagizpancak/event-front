class Api {
  constructor(BASE_URL) {
    this.BASE_URL = BASE_URL;
  }
}

const baseUrl = new Api("https://18.156.193.224:8443/api/v1");

export const getBaseUrl = () => {
  return baseUrl.BASE_URL;
};
