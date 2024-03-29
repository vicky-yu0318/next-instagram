import Image from "next/image";
import Router from "next/router";

const IGHeader: React.FC = () => {
  return (
    <header className="sticky top-0  border-b-[1px] border-gray-300 bg-white">
      <div className="flex justify-between items-center h-[60px] box-border px-2 lg:max-w-[1024px] lg:mx-auto lg:px-0">
        <Image
          className="w-[100px] cursor-pointer"
          src="/images/logo.svg"
          alt=""
          width={500}
          height={200}
          priority
          onClick={() => Router.push(`/`)}
        />
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-4 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => Router.push(`/`)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-4 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => Router.push(`/following`)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          <div className="h-6 w-6 rounded-full bg-gray-900 text-white font-bold flex justify-center items-center">
            B
          </div>
        </div>
      </div>
    </header>
  );
};

export default IGHeader;
