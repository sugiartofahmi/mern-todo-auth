const TOKEN_KEY = "access_token";
const REFRESH_TOKEN_KEY = "refresh_token";
const USER = "user_data";

const TokenService = {
  getToken() {
    return JSON.parse(localStorage.getItem(TOKEN_KEY));
  },

  getUserData() {
    return JSON.parse(localStorage.getItem(USER));
  },

  saveToken(accessToken) {
    localStorage.setItem(TOKEN_KEY, accessToken);
  },

  saveUserData(userData) {
    localStorage.setItem(USER, JSON.stringify(userData));
  },

  removeToken() {
    localStorage.removeItem(TOKEN_KEY);
  },

  removeUserData() {
    localStorage.removeItem(USER);
  },
};

export default TokenService;
