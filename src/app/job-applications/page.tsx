import { Briefcase, Plus, Search, Filter, Clock, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function JobApplicationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Job Applications</h1>
          <p className="text-muted-foreground">
            Track and manage your job applications
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Application
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium text-muted-foreground">Pending</span>
          </div>
          <div className="mt-2">
            <span className="text-2xl font-bold">8</span>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="text-sm font-medium text-muted-foreground">Accepted</span>
          </div>
          <div className="mt-2">
            <span className="text-2xl font-bold">3</span>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center gap-2">
            <XCircle className="h-5 w-5 text-red-600" />
            <span className="text-sm font-medium text-muted-foreground">Rejected</span>
          </div>
          <div className="mt-2">
            <span className="text-2xl font-bold">5</span>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium text-muted-foreground">Total</span>
          </div>
          <div className="mt-2">
            <span className="text-2xl font-bold">16</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search applications..."
            className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>

      <div className="space-y-4">
        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Briefcase className="h-8 w-8 text-blue-600" />
              <div>
                <h3 className="font-semibold">Senior Frontend Developer</h3>
                <p className="text-sm text-muted-foreground">TechCorp Inc.</p>
                <p className="text-xs text-muted-foreground">Applied: Dec 1, 2024</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">
                Pending
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Briefcase className="h-8 w-8 text-green-600" />
              <div>
                <h3 className="font-semibold">Full Stack Engineer</h3>
                <p className="text-sm text-muted-foreground">StartupXYZ</p>
                <p className="text-xs text-muted-foreground">Applied: Nov 28, 2024</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full">
                Accepted
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Briefcase className="h-8 w-8 text-red-600" />
              <div>
                <h3 className="font-semibold">React Developer</h3>
                <p className="text-sm text-muted-foreground">BigTech Company</p>
                <p className="text-xs text-muted-foreground">Applied: Nov 25, 2024</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 text-sm bg-red-100 text-red-800 rounded-full">
                Rejected
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Briefcase className="h-8 w-8 text-blue-600" />
              <div>
                <h3 className="font-semibold">UI/UX Designer</h3>
                <p className="text-sm text-muted-foreground">Design Studio</p>
                <p className="text-xs text-muted-foreground">Applied: Nov 22, 2024</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">
                Pending
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 