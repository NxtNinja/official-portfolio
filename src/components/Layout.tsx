import { ReactNode } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Nav />
      {/* <div className="absolute inset-0 bg-[url('/hero_bg.webp')] bg-no-repeat h-screen md:bg-repeat bg-contain bg-fixed bg-center opacity-30"></div> */}
      <main className="max-w-5xl mx-auto">{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
