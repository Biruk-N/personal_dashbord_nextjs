import { FolderOpen, Plus, Search, Filter, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CategoriesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Categories</h1>
          <p className="text-muted-foreground">
            Organize your content with categories
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Category
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center gap-2">
            <FolderOpen className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium text-muted-foreground">Total Categories</span>
          </div>
          <div className="mt-2">
            <span className="text-2xl font-bold">24</span>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center gap-2">
            <Tag className="h-5 w-5 text-green-600" />
            <span className="text-sm font-medium text-muted-foreground">Active</span>
          </div>
          <div className="mt-2">
            <span className="text-2xl font-bold">18</span>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center gap-2">
            <FolderOpen className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium text-muted-foreground">Items Categorized</span>
          </div>
          <div className="mt-2">
            <span className="text-2xl font-bold">156</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search categories..."
            className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border bg-card p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <FolderOpen className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold">Work</h3>
              <p className="text-sm text-muted-foreground">Professional tasks</p>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">45 items</span>
            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
              Active
            </span>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <FolderOpen className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold">Personal</h3>
              <p className="text-sm text-muted-foreground">Personal tasks</p>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">32 items</span>
            <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
              Active
            </span>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <FolderOpen className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold">Finance</h3>
              <p className="text-sm text-muted-foreground">Financial tracking</p>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">28 items</span>
            <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">
              Active
            </span>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <FolderOpen className="h-5 w-5 text-orange-600" />
            </div>
            <div>
              <h3 className="font-semibold">Health</h3>
              <p className="text-sm text-muted-foreground">Health & fitness</p>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">15 items</span>
            <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-xs">
              Active
            </span>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <FolderOpen className="h-5 w-5 text-red-600" />
            </div>
            <div>
              <h3 className="font-semibold">Education</h3>
              <p className="text-sm text-muted-foreground">Learning & courses</p>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">12 items</span>
            <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">
              Active
            </span>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
              <FolderOpen className="h-5 w-5 text-gray-600" />
            </div>
            <div>
              <h3 className="font-semibold">Entertainment</h3>
              <p className="text-sm text-muted-foreground">Fun & leisure</p>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">8 items</span>
            <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">
              Active
            </span>
          </div>
        </div>
      </div>
    </div>
  );
} 