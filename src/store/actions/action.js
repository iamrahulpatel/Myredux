import { SAVE_DATA } from "./actionType";

export const showMyData = (userData) => ({
    type:SAVE_DATA,
    payload:userData
});
