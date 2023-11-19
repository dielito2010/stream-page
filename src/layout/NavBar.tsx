import { Outlet } from "react-router-dom";
import CustomNavBar from "../components/CustomNavBar";

export default function NavBarLayout() {
  return (
      <div>
        <header>
          <CustomNavBar />
        </header>
        <Outlet />
      </div>
  );
}
