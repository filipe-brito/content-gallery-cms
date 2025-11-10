import { Outlet } from "react-router-dom";
import { Header } from "../components/organisms/Header";
import { Footer } from "../components/organisms/Footer";

const MainLayout = () => {
  return (
    <div className="font-quicksand min-h-screen min-w-screen">
      <Header />
      <main className="pt-[10dvh] min-h-screen min-w-screen flex justify-center bg-blue-500">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
