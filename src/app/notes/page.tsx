import { StickyNote, Plus, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Notes</h1>
          <p className="text-muted-foreground">
            Create and organize your notes efficiently
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Note
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search notes..."
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
          <div className="flex items-start gap-3">
            <StickyNote className="h-5 w-5 text-muted-foreground mt-1" />
            <div className="flex-1">
              <h3 className="font-medium mb-2">Meeting Notes - Q4 Planning</h3>
              <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                Discussion points for Q4 planning session. Key initiatives include...
              </p>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Updated 2 hours ago</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                  Work
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6 hover:shadow-md transition-shadow">
          <div className="flex items-start gap-3">
            <StickyNote className="h-5 w-5 text-muted-foreground mt-1" />
            <div className="flex-1">
              <h3 className="font-medium mb-2">Shopping List</h3>
              <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                Groceries needed for the week: milk, bread, eggs, vegetables...
              </p>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Updated yesterday</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full">
                  Personal
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6 hover:shadow-md transition-shadow">
          <div className="flex items-start gap-3">
            <StickyNote className="h-5 w-5 text-muted-foreground mt-1" />
            <div className="flex-1">
              <h3 className="font-medium mb-2">Project Ideas</h3>
              <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                Ideas for new projects: mobile app for task management, web dashboard...
              </p>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Updated 3 days ago</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full">
                  Ideas
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 