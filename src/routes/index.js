import ForgotPassword from "../features/auth/ForgotPassword";
import Login from "../features/auth/Login";

export const PublicRoutes = [
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgotPassword },
];
