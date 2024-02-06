// TODO: redux 實作參考文件 https://redux.js.org/tutorials/typescript-quick-start

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import _ from "lodash";

interface Friend {
  id: number;
  location: string;
  account: string;
  isFollowing: boolean;
  avatar: string;
}

interface friendState {
  friends: Friend[];
}

const initialState: friendState = {
  friends: [
    {
      id: 1,
      location: "Singapore",
      account: "max_999",
      isFollowing: true,
      avatar: "/images/avatars/a1.png",
    },
    {
      id: 2,
      location: "Singapore",
      account: "fm_999",
      isFollowing: true,
      avatar: "/images/avatars/a2.png",
    },
    {
      id: 3,
      location: "Singapore",
      account: "joanne_999",
      isFollowing: true,
      avatar: "/images/avatars/a3.png",
    },
    {
      id: 4,
      location: "Singapore",
      account: "focus_999",
      isFollowing: true,
      avatar: "/images/avatars/a4.png",
    },
    {
      id: 5,
      location: "Singapore",
      account: "alvin_999",
      isFollowing: true,
      avatar: "/images/avatars/a5.png",
    },
    {
      id: 6,
      location: "Singapore",
      account: "grace_999",
      isFollowing: true,
      avatar: "/images/avatars/a6.png",
    },
    {
      id: 7,
      location: "Singapore",
      account: "rance_999",
      isFollowing: true,
      avatar: "/images/avatars/a7.png",
    },
    {
      id: 8,
      location: "Singapore",
      account: "louis_999",
      isFollowing: true,
      avatar: "/images/avatars/a8.png",
    },
    {
      id: 9,
      location: "Singapore",
      account: "bruce_999",
      isFollowing: true,
      avatar: "/images/avatars/a9.png",
    },
    {
      id: 10,
      location: "Singapore",
      account: "gogo_999",
      isFollowing: true,
      avatar: "/images/avatars/a10.png",
    },
  ],
};

export const friendSlice = createSlice({
  name: "friendList",
  initialState,
  reducers: {
    // TODO: reducer 會因 toolkit 自動產生 action
    // TODO: state=> 當下狀態； action=> 對應的動作 (會帶 payload 和 type)
    follow: (state, action: PayloadAction<number>) => {
      // action => {type: 'friendListxx/follow', payload: 1}
      const friends = state.friends;
      const temp = _.filter(friends, (item) => {
        return item.id === action.payload;
      });
      temp[0].isFollowing = true;
    },
    unFollow: (state, action: PayloadAction<number>) => {
      const friends = state.friends;
      const temp = _.filter(friends, (item) => {
        return item.id === action.payload;
      });
      temp[0].isFollowing = false;
    },
  },
});

// TODO: 寫好 actions, 方便之後 dispatch 時調用
export const { follow, unFollow } = friendSlice.actions;

// TODO: 建立 store 時需要
export default friendSlice.reducer;
