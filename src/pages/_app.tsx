import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "@/store/store";

function App({
  Component,
  pageProps,
}: {
  Component: React.ComponentType;
  pageProps: any;
}) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
