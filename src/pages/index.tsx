import { Inter } from "next/font/google";
import IGHeader from "@/components/IGHeader";
import IGContainer from "@/components/IGContainer";
import IGProfile from "@/modules/homePage/IGProfile";
import IGStory from "@/modules/homePage/IGStory/index";
import IGPost from "@/modules/homePage/IGPost/index";
import Loading from "@/components/Loading";
import { useGetIGPostsQuery } from "@/services/homeServices";
import _ from "lodash";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  const { data: postData } = useGetIGPostsQuery("all");
  if (!postData) {
    return (
      <>
        <div className="w-full flex justify-center mt-20">
          <Loading />
        </div>
      </>
    );
  }
  // TODO: test use
  // async function get() {
  //   try {
  //     // const res = await fetch("http://localhost:3004/posts");
  //     // const res = await fetch("api/posts");
  //     const data = await res.json();
  //     console.log("data2 :>> ", data);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }
  // get();

  return (
    <>
      <IGHeader />
      <IGContainer>
        <div className={`${inter.className} flex`}>
          <div className="w-full lg:w-[600px]">
            <IGStory />
            {postData.map((post) => {
              const {
                id,
                location,
                account,
                avatar,
                photo,
                likes,
                description,
                hashTags,
                createTime,
              } = post;
              return (
                <IGPost
                  key={id}
                  location={location}
                  account={account}
                  avatar={avatar}
                  photo={photo}
                  likes={likes}
                  description={description}
                  hashTags={hashTags}
                  createTime={createTime}
                ></IGPost>
              );
            })}
          </div>
          <div className="hidden lg:block lg:w-[424px]">
            <IGProfile />
          </div>
        </div>
      </IGContainer>
    </>
  );
}
