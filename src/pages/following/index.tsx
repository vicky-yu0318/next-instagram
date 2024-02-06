import IGContainer from "@/components/IGContainer";
import IGHeader from "@/components/IGHeader";
import IGUser from "@/components/IGUser";
import { useAppSelector } from "@/hooks";

const Following: React.FC = () => {
  const friendReducer = useAppSelector((state) => state.friendReducer);
  const friendsList = friendReducer.friends;

  return (
    <>
      <IGHeader />
      <IGContainer>
        <h3 className="my-8 font-bold text-2xl">Following</h3>
        <div className="shadow-md p-5">
          {friendsList.map((item) => {
            const { id, account, avatar, isFollowing, location } = item;
            return (
              <div key={id}>
                <IGUser
                  key={id}
                  id={id}
                  account={account}
                  avatar={avatar}
                  location={location}
                  isFollowing={isFollowing}
                  style={{ height: "60px" }}
                  showFollow
                />
              </div>
            );
          })}
        </div>
      </IGContainer>
    </>
  );
};

export default Following;
