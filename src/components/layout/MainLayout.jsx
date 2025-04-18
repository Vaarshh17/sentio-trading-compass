
import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "./AppSidebar";
import { ThemeProvider } from "@/components/theme-provider";

export default function MainLayout() {
  return (
    <ThemeProvider defaultTheme="dark">
      <SidebarProvider>
        <div className="min-h-screen flex w-full">
          <AppSidebar />
          <main className="flex-1 overflow-y-auto max-h-screen p-4">
            <Outlet />
          </main>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
}
