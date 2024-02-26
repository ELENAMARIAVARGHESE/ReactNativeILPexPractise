import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface UserDetailsState {
  message:string;
  token:string;
  userid:string;
}
const initialState: UserDetailsState = {
  message:'',
  token:'',
  userid:'',
};
export const userDetailsSlice = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {
    userDetails(
        state: {message:string,token:string,userid:string},
        action: PayloadAction<UserDetailsState>) {
            
      state.message = action.payload.message;
      state.token = action.payload.token;
      state.userid = action.payload.userid;
    },
  },
});

export const {userDetails} = userDetailsSlice.actions;
export default userDetailsSlice.reducer;
