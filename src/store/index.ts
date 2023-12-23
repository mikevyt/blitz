import { configureStore } from "@reduxjs/toolkit";
import { PeerReducer } from "./peer/peerReducer";
import { ConnectionReducer } from "./connection/connectionReducer";
import { GameReducer } from "./game/gameReducer";
import { LocalReducer } from "./local/localReducer";
import { Reducer } from "redux";
import { GameState } from "./game/gameTypes";

export const store = configureStore({
  reducer: {
    peer: PeerReducer,
    connection: ConnectionReducer,
    game: GameReducer as Reducer<GameState>,
    local: LocalReducer,
  },
});

window.store = store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
