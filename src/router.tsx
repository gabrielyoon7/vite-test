import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "./HomeLayout.tsx";
import App from "./App.tsx";
import Foo from "./Foo.tsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "/",
          element: <App />,
        },
        {
          path: "/foo",
          element: <Foo />,
        }
      ],
    },
  ],
  {
    basename: "/fin-the-pen-web",
  }
);

export default router;
