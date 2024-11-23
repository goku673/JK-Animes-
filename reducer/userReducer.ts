
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

 export interface User {
  username: string;
  email: string;
  password: string;
}

interface UserState {
  users: User[];
  user :  User | null ;
}

const initialState: UserState = {
  users: [],
  user:  null
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
  },
});

export const { addUser , setUser} = userSlice.actions;
export default userSlice.reducer;


// hacer unites con jest formLogin SingUP

//utilizar la libreria react native paper ?

//input redondeado plachehorde 

//componente input y button que sehan personalizados

// otra funcion una accion para aniader
// builder query : builder mutacions revisar la documentacion

//integracion con firebase

// 

