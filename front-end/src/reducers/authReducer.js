// authReducer.js
const initialState = {
    userId: null,
    userEmail:null,
    userMobileNum:null,
    userName:null,
    userRoles:null,
    jwtToken: null,
    tokenExpiration:null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case "LOGIN_SUCCESS":
        return {
          ...state,
          userId: action.payload.userId,
          userEmail:action.payload.userEmail,
          userMobileNum:action.payload.userMobileNum,
          userName:action.payload.userName,
          userRoles:action.payload.userRoles,
          jwtToken: action.payload.jwtToken,
          tokenExpiration:action.payload.tokenExpiration,
        };
      case "LOGOUT":
        return {
          ...state,
          userId: null,
          userEmail:null,
          userMobileNum:null,
          userName:null,
          userRoles:null,
          jwtToken: null,
          tokenExpiration:null,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  