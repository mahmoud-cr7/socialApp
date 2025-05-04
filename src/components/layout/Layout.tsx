// Layout.jsx
import { Outlet } from "react-router-dom";
import NavBar from "../navBar/NavBar";

function Layout() {
  return (
    <div className="bg-[#fafbff] min-h-screen">
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
