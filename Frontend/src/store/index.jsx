import { atom } from "recoil";
import TokenService from "@/services/token.js";

export const userState = atom({
  key: "user-state",
  default: TokenService.getUserData(),
});

export const modalAddTodo = atom({
  key: "modal-add-todo",
  default: false,
});

export const modalEditTodo = atom({
  key: "modal-edit-todo",
  default: false,
});
