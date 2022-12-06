import Router from "next/router";
import { LogOut } from "react-feather";

export default function dashboard() {
  // This is the dashboard page
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", gap: "16px" }}>
      <h1>Dashboard</h1>
      {/* This is the logout button */}
      <LogOut style={{ cursor: "pointer" }} onClick={() => Router.push("/login")} />
    </div>
  );
}
