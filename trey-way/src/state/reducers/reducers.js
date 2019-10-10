import stations from "../dummyData";

const initialState = {
  stations: stations,
  start: "",
  end: "",
  startIndex: 0,
  endIndex: 0,
  distance: 0,
  inputed: false
};

export default function stationReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_INFO":
      const startIndex = state.stations.findIndex(
        item => item.name === action.payload.start
      );
      const endIndex = state.stations.findIndex(
        item => item.name === action.payload.end
      );
      const distance = Math.abs(
        state.stations[endIndex].position - state.stations[startIndex].position
      );
      // console.log(state.stations);
      return {
        ...state,
        start: action.payload.start,
        end: action.payload.end,
        distance: distance,
        startIndex: startIndex,
        endIndex: endIndex,
        inputed: true
      };
    case "RECIEVED_INFO":
      return { ...state, inputed: false };
    default:
      return state;
  }
}
