import IGUser from "@/components/IGUser";
import IGComment from "@/modules/homePage/IGPost/IGComment";
import Image from "next/image";

interface IGPostProps {
  account: string;
  location: string;
  avatar: string;
  photo: string;
  likes: number;
  description: string;
  hashTags: string;
  createTime: string;
}

const IGPost: React.FC<IGPostProps> = ({
  account,
  location,
  avatar,
  photo,
  likes,
  description,
  hashTags,
  createTime,
}) => {
  return (
    <div className="shadow-md p-4 lg:mb-8">
      <IGUser account={account} location={location} avatar={avatar} />
      <div className="h-[450px]">
        <Image
          src={photo}
          width={400}
          height={100}
          alt=""
          className="w-full h-full object-cover object-bottom "
          priority
        ></Image>
      </div>
      <IGComment
        account={account}
        likes={likes}
        description={description}
        hashTags={hashTags}
        createTime={createTime}
      ></IGComment>
    </div>
  );
};

export default IGPost;
