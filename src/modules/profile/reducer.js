import {
  CARD_USER_REQUEST,
  CARD_USER_FAILURE,
  CARD_USER_SUCCESS,
} from "./types";
const storageName = "cardData";
// localStorage.removeItem(storageName);

const initialState = {
  cardNumber: JSON.parse(localStorage.getItem(storageName))
    ? JSON.parse(localStorage.getItem(storageName)).cardNumber
    : null,
  expiryDate: JSON.parse(localStorage.getItem(storageName))
    ? JSON.parse(localStorage.getItem(storageName)).expiryDate
    : null,
  cardName: JSON.parse(localStorage.getItem(storageName))
    ? JSON.parse(localStorage.getItem(storageName)).cardName
    : null,
  CVC: JSON.parse(localStorage.getItem(storageName))
    ? JSON.parse(localStorage.getItem(storageName)).CVC
    : null,
  loading: false,
  error: false,
  card: JSON.parse(localStorage.getItem(storageName))
    ? JSON.parse(localStorage.getItem(storageName)).card
    : false,
};
export default function card(state = initialState, action) {
  switch (action.type) {
    case CARD_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CARD_USER_FAILURE:
      const { error } = action.payload;

      return {
        ...state,
        loading: false,
        error,
      };
    case CARD_USER_SUCCESS:
      const { cardName, cardNumber, expiryDate, CVC } = action.payload.values;
      localStorage.setItem(
        storageName,
        JSON.stringify({ cardName, cardNumber, expiryDate, CVC, card: true })
      );
      return {
        ...state,
        loading: false,
        error: null,
        cardName,
        cardNumber,
        expiryDate,
        CVC,
        card: true,
      };

    default:
      return state;
  }
}
