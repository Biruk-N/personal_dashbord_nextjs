import { DollarSign, Plus, TrendingUp, Calendar, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function IncomesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Incomes</h1>
          <p className="text-muted-foreground">
            Track and manage your income sources
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Income
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-green-600" />
            <span className="text-sm font-medium text-muted-foreground">Total Income</span>
          </div>
          <div className="mt-2">
            <span className="text-2xl font-bold">$12,450</span>
            <span className="text-sm text-green-600 ml-2">+12.5%</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">This month</p>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium text-muted-foreground">Average Monthly</span>
          </div>
          <div className="mt-2">
            <span className="text-2xl font-bold">$8,200</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">Last 6 months</p>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium text-muted-foreground">Income Sources</span>
          </div>
          <div className="mt-2">
            <span className="text-2xl font-bold">5</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">Active sources</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <input
            type="text"
            placeholder="Search incomes..."
            className="w-full pl-4 pr-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>

      <div className="rounded-lg border bg-card">
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Income Entries</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
              <div className="flex items-center gap-3">
                <DollarSign className="h-5 w-5 text-green-600" />
                <div>
                  <h4 className="font-medium">Salary - Tech Corp</h4>
                  <p className="text-sm text-muted-foreground">Monthly salary</p>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold">$8,500</div>
                <div className="text-sm text-muted-foreground">Dec 1, 2024</div>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
              <div className="flex items-center gap-3">
                <DollarSign className="h-5 w-5 text-blue-600" />
                <div>
                  <h4 className="font-medium">Freelance Project</h4>
                  <p className="text-sm text-muted-foreground">Web development</p>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold">$2,200</div>
                <div className="text-sm text-muted-foreground">Nov 28, 2024</div>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
              <div className="flex items-center gap-3">
                <DollarSign className="h-5 w-5 text-purple-600" />
                <div>
                  <h4 className="font-medium">Consulting</h4>
                  <p className="text-sm text-muted-foreground">Technical consulting</p>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold">$1,750</div>
                <div className="text-sm text-muted-foreground">Nov 25, 2024</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 