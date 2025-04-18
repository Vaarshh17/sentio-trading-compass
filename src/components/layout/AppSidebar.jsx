
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  BarChart3,
  Command,
  Gear,
  Home,
  LineChart,
  Share2,
  AlertCircle,
  Database,
  FileText,
  Briefcase,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarGroup,
} from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/ThemeToggle";

const SidebarItem = ({ icon: Icon, label, to, active }) => (
  <Link to={to} className={`sidebar-item ${active ? "active" : ""}`}>
    <Icon className="h-5 w-5" />
    <span>{label}</span>
  </Link>
);

export default function AppSidebar() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <Sidebar className="border-r border-border">
      <SidebarHeader className="px-3 py-2">
        <div className="flex items-center space-x-2">
          <LineChart className="h-6 w-6 text-sentio-orange" />
          <span className="text-lg font-bold">Sentio</span>
        </div>
        <p className="text-xs text-muted-foreground">Trading Compass</p>
      </SidebarHeader>
      <SidebarContent className="px-3 py-2">
        <SidebarGroup>
          <div className="space-y-1">
            <SidebarItem
              icon={Home}
              label="Dashboard"
              to="/"
              active={path === "/"}
            />
            <SidebarItem
              icon={Command}
              label="Console"
              to="/console"
              active={path === "/console"}
            />
            <SidebarItem
              icon={Gear}
              label="Strategy"
              to="/strategy"
              active={path === "/strategy"}
            />
            <SidebarItem
              icon={BarChart3}
              label="Risk Profiler"
              to="/risk"
              active={path === "/risk"}
            />
            <SidebarItem
              icon={AlertCircle}
              label="Events"
              to="/events"
              active={path === "/events"}
            />
            <SidebarItem
              icon={Database}
              label="Data Sources"
              to="/data"
              active={path === "/data"}
            />
            <SidebarItem
              icon={FileText}
              label="Reports"
              to="/reports"
              active={path === "/reports"}
            />
            <SidebarItem
              icon={Briefcase}
              label="Broker"
              to="/broker"
              active={path === "/broker"}
            />
          </div>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="px-3 py-2">
        <div className="flex items-center justify-between">
          <div className="text-xs text-muted-foreground">
            <span>Sentio v1.0.0</span>
          </div>
          <ThemeToggle />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
