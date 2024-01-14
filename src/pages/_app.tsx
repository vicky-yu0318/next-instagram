import "@/styles/globals.css";
import type { AppProps } from "next/app";
// TODO: 建立完 Provider 和 store， 可以在開發者工具 redux 看到可用的 todoReducer，但還不能使用，要先去建立 hooks 檔案
import { Provider } from "react-redux";
import store from "@/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
