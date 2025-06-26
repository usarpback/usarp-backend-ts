export interface AuthenticatedUser {
  id: string;
  email: string;
  scope: "default" | "admin" | "password_reset";
}
