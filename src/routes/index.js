import ForgotPassword from "../features/auth/ForgotPassword";
import Login from "../features/auth/Login";
import Dashboard from "../pages/Dashboard";
import Notifications from "../pages/Notifications";
import Profile from "../pages/Profile";
import Menu from "../pages/Menu";
import StaffManagement from "../pages/StaffManagement";
import Inventory from "../pages/Inventory";
import Reports from "../pages/Reports";
import OrderTables from "../pages/OrderTables";
import Reservation from "../pages/Reservation";

export const PublicRoutes = [
  { path: "*", component: Login },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgotPassword },
];

export const PrivateRoutes = [
  { path: "*", component: Dashboard },
  { path: "/", component: Dashboard },
  { path: "/notifications", component: Notifications },
  { path: "/profile", component: Profile },
  { path: "/menu", component: Menu },
  { path: "/staff-management", component: StaffManagement },
  { path: "/inventory", component: Inventory },
  { path: "/reports", component: Reports },
  { path: "/order-tables", component: OrderTables },
  { path: "/reservation", component: Reservation },
];
