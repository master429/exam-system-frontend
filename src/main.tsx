import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { UpdatePassword } from "./pages/UpdatePassword";
import { ExamList } from "./pages/ExamList";
import { Edit } from "./pages/Edit";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const routes = [
  {
    path: "/",
    element: <ExamList />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "update_password",
    element: <UpdatePassword />,
  },
  {
    path: "edit/:id",
    element: <Edit />,
  },
];
const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <DndProvider backend={HTML5Backend}>
    <RouterProvider
      future={{
        v7_startTransition: true,
      }}
      router={router}
    />
  </DndProvider>
);
