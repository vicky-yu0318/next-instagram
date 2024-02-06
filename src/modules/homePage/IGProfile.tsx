import IGUser from "@/components/IGUser";
import { useAppSelector } from "@/hooks";

const IGProfile: React.FC = () => {
  const friendReducer = useAppSelector((state) => state.friendReducer);
  const friendList = friendReducer.friends.slice(0, 4);

  return (
    <div className="mt-8 ml-8 shadow-lg box-border p-2">
      <IGUser
        account="vicky0318"
        location="新北"
        avatar="/images/avatars/avatar.jpg"
        size="medium"
        id={4}
        isFollowing
        showFollow
      />
      <p className="font-bold text-gray-400 text-sm mt-4">You are following</p>

      {friendList.map((item) => {
        const { id, account, avatar, isFollowing, location } = item;
        return (
          <div className="-mt-3" key={id}>
            <IGUser
              id={id}
              account={account}
              avatar={avatar}
              location={location}
              isFollowing={isFollowing}
              showFollow
            />
          </div>
        );
      })}
    </div>
  );
};

export default IGProfile;
