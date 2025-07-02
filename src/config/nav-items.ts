import {
  Home,
  BarChart,
  Calendar,
  Users,
  Settings,
  CheckSquare,
  StickyNote,
  DollarSign,
  Briefcase,
  Receipt,
  FolderOpen,
  FolderGit2,
  Target,
  Bookmark,
  // TrendingUp,
} from "lucide-react";

export interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  description?: string;
}

export const navItems: NavItem[] = [
  {
    name: "Dashboard",
    href: "/",
    icon: Home,
    description: "Overview and statistics",
  },
  {
    name: "Tasks",
    href: "/tasks",
    icon: CheckSquare,
    description: "Manage your tasks and to-dos",
  },
  {
    name: "Notes",
    href: "/notes",
    icon: StickyNote,
    description: "Create and organize notes",
  },
  {
    name: "Incomes",
    href: "/incomes",
    icon: DollarSign,
    description: "Track your income sources",
  },
  {
    name: "Job Applications",
    href: "/job-applications",
    icon: Briefcase,
    description: "Manage job applications",
  },
  {
    name: "Expenses",
    href: "/expenses",
    icon: Receipt,
    description: "Track your expenses",
  },
  {
    name: "Categories",
    href: "/categories",
    icon: FolderOpen,
    description: "Organize with categories",
  },
  {
    name: "Projects",
    href: "/projects",
    icon: FolderGit2,
    description: "Manage your projects",
  },
  {
    name: "Goals",
    href: "/goals",
    icon: Target,
    description: "Set and track goals",
  },
  {
    name: "Bookmarks",
    href: "/bookmarks",
    icon: Bookmark,
    description: "Save important links",
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: BarChart,
    description: "View detailed analytics",
  },
  {
    name: "Calendar",
    href: "/calendar",
    icon: Calendar,
    description: "Schedule and events",
  },
  {
    name: "Team",
    href: "/team",
    icon: Users,
    description: "Team management",
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
    description: "Application settings",
  },
]; 