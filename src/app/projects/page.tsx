import { FolderGit2, Plus, Search, Filter, Calendar, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <p className="text-muted-foreground">
            Manage your projects and track progress
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Project
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center gap-2">
            <FolderGit2 className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium text-muted-foreground">Total Projects</span>
          </div>
          <div className="mt-2">
            <span className="text-2xl font-bold">12</span>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center gap-2">
            <Target className="h-5 w-5 text-green-600" />
            <span className="text-sm font-medium text-muted-foreground">Active</span>
          </div>
          <div className="mt-2">
            <span className="text-2xl font-bold">8</span>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-orange-600" />
            <span className="text-sm font-medium text-muted-foreground">In Progress</span>
          </div>
          <div className="mt-2">
            <span className="text-2xl font-bold">5</span>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium text-muted-foreground">Completed</span>
          </div>
          <div className="mt-2">
            <span className="text-2xl font-bold">4</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border bg-card p-6 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <FolderGit2 className="h-6 w-6 text-blue-600" />
            </div>
            <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
              Active
            </span>
          </div>
          <h3 className="font-semibold text-lg mb-2">E-commerce Platform</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Modern e-commerce platform with React and Node.js
          </p>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-medium">75%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Due Date</span>
              <span>Dec 15, 2024</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Team</span>
              <span>5 members</span>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <FolderGit2 className="h-6 w-6 text-purple-600" />
            </div>
            <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-xs">
              In Progress
            </span>
          </div>
          <h3 className="font-semibold text-lg mb-2">Mobile App</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Cross-platform mobile application with React Native
          </p>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-medium">45%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-purple-600 h-2 rounded-full" style={{ width: '45%' }}></div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Due Date</span>
              <span>Jan 20, 2025</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Team</span>
              <span>3 members</span>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <FolderGit2 className="h-6 w-6 text-green-600" />
            </div>
            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
              Completed
            </span>
          </div>
          <h3 className="font-semibold text-lg mb-2">Portfolio Website</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Personal portfolio website with modern design
          </p>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-medium">100%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '100%' }}></div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Completed</span>
              <span>Nov 30, 2024</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Team</span>
              <span>1 member</span>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <FolderGit2 className="h-6 w-6 text-red-600" />
            </div>
            <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-xs">
              In Progress
            </span>
          </div>
          <h3 className="font-semibold text-lg mb-2">API Development</h3>
          <p className="text-sm text-muted-foreground mb-4">
            RESTful API with Express.js and MongoDB
          </p>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-medium">60%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-red-600 h-2 rounded-full" style={{ width: '60%' }}></div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Due Date</span>
              <span>Dec 30, 2024</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Team</span>
              <span>2 members</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 