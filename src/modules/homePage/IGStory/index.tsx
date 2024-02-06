import Item from "@/modules/homePage/IGStory/Item";
import { useGetIGStoriesQuery } from "@/services/homeServices";
import Loading from "@/components/Loading";

const IGStory: React.FC = () => {
  const { data: storiesData } = useGetIGStoriesQuery("all");
  if (!storiesData) {
    return (
      <div className="flex justify-center w-full">
        <Loading />
      </div>
    );
  }

  return (
    <div className="w-full h-[110px] box-border flex items-center overflow-x-auto overflow-y-hidden shadow-md no-scrollbar lg:my-8">
      {storiesData.map((story) => {
        const { id, name, avatar } = story;
        return <Item key={id} name={name} avatar={avatar} />;
      })}
    </div>
  );
};

export default IGStory;
