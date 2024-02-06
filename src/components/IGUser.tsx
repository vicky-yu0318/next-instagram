import { follow, unFollow } from "@/slices/friendSlice";
import { memo } from "react";
import { useAppDispatch } from "@/hooks";

interface IGUserProps {
  size?: "medium" | "small";
  showFollow?: boolean;
  isFollowing?: boolean;
  account?: string;
  location?: string;
  avatar?: string;
  id?: number;
  style?: object;
}

const IGUser: React.FC<IGUserProps> = memo(
  ({
    size = "small",
    showFollow = false,
    isFollowing = true,
    account,
    location,
    avatar,
    id,
    style = { height: "90px" },
  }) => {
    const dispatch = useAppDispatch();

    function followClickHandler() {
      if (id === undefined) return;
      if (isFollowing) {
        dispatch(unFollow(id));
      } else {
        dispatch(follow(id));
      }
    }

    return (
      <div className="flex items-center" style={style}>
        {/* avatar */}
        <div
          className={`${
            size === "small" ? "w-[40px] h-[40px]" : "w-[60px] h-[60px]"
          } overflow-hidden rounded-full  bg-center bg-cover`}
          style={{
            backgroundImage: `url(${avatar})`,
          }}
        ></div>
        {/* info */}
        <div className="ml-4">
          <span className="font-bold text-sm block">{account}</span>
          <span className="text-gray-400 text-xs block">{location}</span>
        </div>
        {/* btn-follow */}
        {showFollow && (
          <div
            className={`${
              isFollowing ? "text-gray-700" : "text-blue-400"
            } ml-auto text-xs font-bold cursor-pointer`}
            onClick={followClickHandler}
          >
            {isFollowing ? "FOLLOWING" : "FOLLOW"}
          </div>
        )}
      </div>
    );
  }
);

IGUser.displayName = "IGUser";
// TODO: 使用了 memo 會噴錯，因未為元件提供顯示名稱，需透過 displayName 屬性為其提供顯示名稱。
// TODO: 這樣做可以幫助 React 在需要時提供更好的錯誤訊息，尤其是當組件出現錯誤時，可以更容易地識別是哪個組件出了問題。

export default IGUser;
