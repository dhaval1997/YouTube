import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { Outlet, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import { Suspense, lazy } from "react";

const WatchPage = lazy(() => import("./components/WatchPage"));
const SearchResult = lazy(() => import("./components/SearchResult"));

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
    </Provider>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
        children: [
          {
            path: "/",
            element: <MainContainer />,
          },
          {
            path: "/watch",
            element: (
              <Suspense>
                <WatchPage />
              </Suspense>
            ),
          },
          {
            path: "/results",
            element: (
              <Suspense>
                <SearchResult />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);

export default App;
