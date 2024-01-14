import Image from "next/image";
import { Inter } from "next/font/google";
// TODO: 建立完 Provider 和 store， 可以在開發者工具 redux 看到可用的 todoReducer，但還不能使用，要先去建立 hook 檔案
import { Provider } from "react-redux";
import store from "@/store";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Provider store={store}>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        首頁
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          className="dark:invert"
          width={100}
          height={24}
          priority
        />
      </main>
    </Provider>
  );
}
