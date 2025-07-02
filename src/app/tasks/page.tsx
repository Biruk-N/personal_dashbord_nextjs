import { CheckSquare, Plus, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TasksPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tasks</h1>
          <p className="text-muted-foreground">
            Manage your tasks and to-dos efficiently
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Task
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search tasks..."
            className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>

      <div className="grid gap-4">
        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center gap-3">
            <CheckSquare className="h-5 w-5 text-muted-foreground" />
            <div className="flex-1">
              <h3 className="font-medium">Complete project documentation</h3>
              <p className="text-sm text-muted-foreground">
                Due: Tomorrow at 2:00 PM
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                High Priority
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center gap-3">
            <CheckSquare className="h-5 w-5 text-muted-foreground" />
            <div className="flex-1">
              <h3 className="font-medium">Review code changes</h3>
              <p className="text-sm text-muted-foreground">
                Due: Friday at 5:00 PM
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full">
                Medium Priority
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center gap-3">
            <CheckSquare className="h-5 w-5 text-muted-foreground" />
            <div className="flex-1">
              <h3 className="font-medium">Update dependencies</h3>
              <p className="text-sm text-muted-foreground">
                Due: Next week
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                Low Priority
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 