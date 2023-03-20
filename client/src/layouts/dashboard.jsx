import { Routes, Route } from "react-router-dom";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { IconButton } from "@material-tailwind/react";
import {
  Sidenav,
  DashboardNavbar,
  Configurator,
  Footer,
} from "@/widgets/layout";
import routes from "@/routes";
import { useMaterialTailwindController, setOpenConfigurator } from "@/context";
import AppAppBar from '../frontend/components/modules/views/AppAppBar';
import ChartsData from "@/pages/dashboard/ChartsData";
export function Dashboard() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType } = controller;

  return (
    <>
    <AppAppBar/>
    <br/>
    <br/>
    <br/>
    <ChartsData/>
    </>
  );
}

Dashboard.displayName = "/src/layout/dashboard.jsx";

export default Dashboard;
