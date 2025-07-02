import { Target, Plus, Search, Filter, Calendar, TrendingUp, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GoalsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Goals</h1>
          <p className="text-muted-foreground">
            Set and track your personal and professional goals
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Goal
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center gap-2">
            <Target className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium text-muted-foreground">Total Goals</span>
          </div>
          <div className="mt-2">
            <span className="text-2xl font-bold">15</span>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-600" />
            <span className="text-sm font-medium text-muted-foreground">In Progress</span>
          </div>
          <div className="mt-2">
            <span className="text-2xl font-bold">8</span>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium text-muted-foreground">Completed</span>
          </div>
          <div className="mt-2">
            <span className="text-2xl font-bold">5</span>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-orange-600" />
            <span className="text-sm font-medium text-muted-foreground">Overdue</span>
          </div>
          <div className="mt-2">
            <span className="text-2xl font-bold">2</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search goals..."
            className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Target className="h-6 w-6 text-blue-600" />
            </div>
            <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
              In Progress
            </span>
          </div>
          <h3 className="font-semibold text-lg mb-2">Learn React Native</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Complete React Native course and build 3 mobile apps
          </p>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-medium">65%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '65%' }}></div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Target Date</span>
              <span>Jan 15, 2025</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Category</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                Learning
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Target className="h-6 w-6 text-green-600" />
            </div>
            <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">
              Completed
            </span>
          </div>
          <h3 className="font-semibold text-lg mb-2">Run a Marathon</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Complete a full marathon in under 4 hours
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
              <span>Nov 20, 2024</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Category</span>
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                Fitness
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Target className="h-6 w-6 text-purple-600" />
            </div>
            <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-xs">
              In Progress
            </span>
          </div>
          <h3 className="font-semibold text-lg mb-2">Save $10,000</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Save $10,000 for emergency fund
          </p>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-medium">75%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-purple-600 h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Target Date</span>
              <span>Dec 31, 2024</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Category</span>
              <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">
                Finance
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <Target className="h-6 w-6 text-red-600" />
            </div>
            <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">
              Overdue
            </span>
          </div>
          <h3 className="font-semibold text-lg mb-2">Read 20 Books</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Read 20 books this year
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
              <span className="text-muted-foreground">Target Date</span>
              <span>Dec 31, 2024</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Category</span>
              <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">
                Personal
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 