// import { Receipt, Plus, TrendingDown, Calendar, Filter, DollarSign } from "lucide-react";
import { Receipt, Plus, TrendingDown, Calendar, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ExpensesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Expenses</h1>
          <p className="text-muted-foreground">
            Track and manage your expenses
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Expense
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center gap-2">
            <TrendingDown className="h-5 w-5 text-red-600" />
            <span className="text-sm font-medium text-muted-foreground">Total Expenses</span>
          </div>
          <div className="mt-2">
            <span className="text-2xl font-bold">$3,240</span>
            <span className="text-sm text-red-600 ml-2">+8.2%</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">This month</p>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium text-muted-foreground">Average Daily</span>
          </div>
          <div className="mt-2">
            <span className="text-2xl font-bold">$108</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">Last 30 days</p>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center gap-2">
            <Receipt className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium text-muted-foreground">Categories</span>
          </div>
          <div className="mt-2">
            <span className="text-2xl font-bold">12</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">Active categories</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <input
            type="text"
            placeholder="Search expenses..."
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
          <h3 className="text-lg font-semibold mb-4">Recent Expenses</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
              <div className="flex items-center gap-3">
                <Receipt className="h-5 w-5 text-red-600" />
                <div>
                  <h4 className="font-medium">Grocery Shopping</h4>
                  <p className="text-sm text-muted-foreground">Supermarket</p>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-red-600">-$85.50</div>
                <div className="text-sm text-muted-foreground">Dec 1, 2024</div>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
              <div className="flex items-center gap-3">
                <Receipt className="h-5 w-5 text-orange-600" />
                <div>
                  <h4 className="font-medium">Gas Station</h4>
                  <p className="text-sm text-muted-foreground">Fuel</p>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-red-600">-$45.00</div>
                <div className="text-sm text-muted-foreground">Nov 30, 2024</div>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
              <div className="flex items-center gap-3">
                <Receipt className="h-5 w-5 text-blue-600" />
                <div>
                  <h4 className="font-medium">Internet Bill</h4>
                  <p className="text-sm text-muted-foreground">Monthly subscription</p>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-red-600">-$79.99</div>
                <div className="text-sm text-muted-foreground">Nov 29, 2024</div>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
              <div className="flex items-center gap-3">
                <Receipt className="h-5 w-5 text-green-600" />
                <div>
                  <h4 className="font-medium">Coffee Shop</h4>
                  <p className="text-sm text-muted-foreground">Daily coffee</p>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-red-600">-$4.50</div>
                <div className="text-sm text-muted-foreground">Nov 28, 2024</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg font-semibold mb-4">Top Categories</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Food & Dining</span>
              <span className="font-semibold">$450</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Transportation</span>
              <span className="font-semibold">$320</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Utilities</span>
              <span className="font-semibold">$280</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Entertainment</span>
              <span className="font-semibold">$180</span>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg font-semibold mb-4">Monthly Overview</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">November</span>
              <span className="font-semibold text-red-600">$2,980</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">October</span>
              <span className="font-semibold text-red-600">$3,150</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">September</span>
              <span className="font-semibold text-red-600">$2,750</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">August</span>
              <span className="font-semibold text-red-600">$3,420</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 