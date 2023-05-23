import { atom } from "recoil";
import TokenService from "@/services/token.js";

export const userState = atom({
  key: "user-state",
  default: TokenService.getUserData(),
});
