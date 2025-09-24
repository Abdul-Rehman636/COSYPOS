import ForgotPassword from "../features/auth/ForgotPassword";
import Login from "../features/auth/Login";
import Dashboard from "../pages/Dashboard";
import Notifications from "../pages/Notifications";
import Profile from "../pages/Profile";
import Menu from "../pages/Menu";
import StaffManagement from "../pages/StaffManagement";
import StaffDetail from "../pages/StaffDetails";
import Inventory from "../pages/Inventory";
import Reports from "../pages/Reports";
import OrderTables from "../pages/OrderTables";
import Reservation from "../pages/Reservation";

export const PublicRoutes = [
  { path: "*", element: Login },
  { path: "/login", element: Login },
  { path: "/forgot-password", element: ForgotPassword },
];

export const PrivateRoutes = [
  { path: "*", element: Dashboard },
  { path: "/", element: Dashboard },
  { path: "/notifications", element: Notifications },
  { path: "/profile", element: Profile },
  { path: "/menu", element: Menu },
  { path: "/staff-management", element: StaffManagement },
  { path: "/staff-detail/:name", element: StaffDetail },
  { path: "/inventory", element: Inventory },
  { path: "/reports", element: Reports },
  { path: "/order-tables", element: OrderTables },
  { path: "/reservation", element: Reservation },
];
