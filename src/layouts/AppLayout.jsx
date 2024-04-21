import { Header } from "../containers";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <section>
      <Header />
      <Outlet />
    </section>
  );
};

export default AppLayout;
