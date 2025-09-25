import type { ReactNode } from "react";
import TopBar from "../components/topBar/TopBar";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

interface Props {
  children: ReactNode;
}
const MainLayout = ({ children }: Props) => {
  return (
    <div >
      <div className="flex flex-col min-h-screen">
        <TopBar />
        <Header />
        <div className="flex-1">{children}</div>
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
