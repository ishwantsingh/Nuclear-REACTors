const getInfo = (start, end) => {
  return {
    type: "GET_INFO",
    payload: {
      start,
      end
    }
  };
};
export default getInfo;
