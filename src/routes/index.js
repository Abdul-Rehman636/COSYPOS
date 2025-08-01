import ForgotPassword from "../features/auth/ForgotPassword";
import Login from "../features/auth/Login";
import Dashboard from "../pages/Dashboard";

export const PublicRoutes = [
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgotPassword },
];

export const PrivateRoutes = [{ path: "/", component: Dashboard }];
