import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: string = ""; // Estado inicial es una cadena vacía

const userBuscarSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeUser: (state, action: PayloadAction<string>) => {
      // Devuelve el nuevo valor del estado
      return action.payload;
    },
  },
});

export const { changeUser } = userBuscarSlice.actions;
export default userBuscarSlice.reducer;
