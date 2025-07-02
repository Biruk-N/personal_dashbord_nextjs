// import { BarChart, TrendingUp, TrendingDown, DollarSign, Calendar, Users, Target, Activity } from "lucide-react";
import {  TrendingDown, DollarSign, Target, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
          <p className="text-muted-foreground">
            View detailed analytics and insights
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Export</Button>
          <Button>Generate Report</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-green-600" />
            <span className="text-sm font-medium text-muted-foreground">Total Income</span>
          </div>
          <div className="mt-2">
            <span className="text-2xl font-bold">$45,231</span>
            <span className="text-sm text-green-600 ml-2">+20.1%</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">vs last month</p>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center gap-2">
            <TrendingDown className="h-5 w-5 text-red-600" />
            <span className="text-sm font-medium text-muted-foreground">Total Expenses</span>
          </div>
          <div className="mt-2">
            <span className="text-2xl font-bold">$12,234</span>
            <span className="text-sm text-red-600 ml-2">+5.2%</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">vs last month</p>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center gap-2">
            <Target className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium text-muted-foreground">Goals Completed</span>
          </div>
          <div className="mt-2">
            <span className="text-2xl font-bold">12</span>
            <span className="text-sm text-green-600 ml-2">+8.3%</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">vs last month</p>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium text-muted-foreground">Productivity</span>
          </div>
          <div className="mt-2">
            <span className="text-2xl font-bold">89%</span>
            <span className="text-sm text-green-600 ml-2">+2.1%</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">vs last month</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg font-semibold mb-4">Income vs Expenses</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Income</span>
              <div className="flex items-center gap-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <span className="text-sm font-medium">$45,231</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Expenses</span>
              <div className="flex items-center gap-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-red-600 h-2 rounded-full" style={{ width: '25%' }}></div>
                </div>
                <span className="text-sm font-medium">$12,234</span>
              </div>
            </div>
            <div className="flex items-center justify-between pt-2 border-t">
              <span className="text-sm font-medium">Net Savings</span>
              <span className="text-sm font-bold text-green-600">$32,997</span>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg font-semibold mb-4">Monthly Overview</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">December</span>
              <span className="font-semibold text-green-600">$45,231</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">November</span>
              <span className="font-semibold text-green-600">$38,450</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">October</span>
              <span className="font-semibold text-green-600">$42,100</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">September</span>
              <span className="font-semibold text-green-600">$39,800</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg font-semibold mb-4">Top Categories</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Work</span>
              <span className="font-semibold">$18,500</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Freelance</span>
              <span className="font-semibold">$12,300</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Investments</span>
              <span className="font-semibold">$8,900</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Other</span>
              <span className="font-semibold">$5,531</span>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg font-semibold mb-4">Goal Progress</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Learning Goals</span>
              <span className="font-semibold">75%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Fitness Goals</span>
              <span className="font-semibold">90%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Financial Goals</span>
              <span className="font-semibold">85%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Career Goals</span>
              <span className="font-semibold">60%</span>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              <div>
                <p className="text-sm font-medium">Income added</p>
                <p className="text-xs text-muted-foreground">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <div>
                <p className="text-sm font-medium">Goal completed</p>
                <p className="text-xs text-muted-foreground">1 day ago</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <div>
                <p className="text-sm font-medium">Project updated</p>
                <p className="text-xs text-muted-foreground">2 days ago</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
              <div>
                <p className="text-sm font-medium">Expense logged</p>
                <p className="text-xs text-muted-foreground">3 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 