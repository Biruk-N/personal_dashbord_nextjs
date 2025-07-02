import { Bookmark, Plus, Search, Filter, ExternalLink, Tag, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BookmarksPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Bookmarks</h1>
          <p className="text-muted-foreground">
            Save and organize important links
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Bookmark
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center gap-2">
            <Bookmark className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium text-muted-foreground">Total Bookmarks</span>
          </div>
          <div className="mt-2">
            <span className="text-2xl font-bold">42</span>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center gap-2">
            <Tag className="h-5 w-5 text-green-600" />
            <span className="text-sm font-medium text-muted-foreground">Categories</span>
          </div>
          <div className="mt-2">
            <span className="text-2xl font-bold">8</span>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium text-muted-foreground">This Month</span>
          </div>
          <div className="mt-2">
            <span className="text-2xl font-bold">12</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search bookmarks..."
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
          <div className="flex items-start justify-between mb-4">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Bookmark className="h-5 w-5 text-blue-600" />
            </div>
            <Button variant="ghost" size="sm">
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
          <h3 className="font-semibold mb-2">React Documentation</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Official React documentation and tutorials
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">reactjs.org</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                Development
              </span>
            </div>
            <div className="text-xs text-muted-foreground">
              Added 2 days ago
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between mb-4">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Bookmark className="h-5 w-5 text-green-600" />
            </div>
            <Button variant="ghost" size="sm">
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
          <h3 className="font-semibold mb-2">Tailwind CSS Guide</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Complete guide to Tailwind CSS utility classes
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">tailwindcss.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                CSS
              </span>
            </div>
            <div className="text-xs text-muted-foreground">
              Added 1 week ago
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between mb-4">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Bookmark className="h-5 w-5 text-purple-600" />
            </div>
            <Button variant="ghost" size="sm">
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
          <h3 className="font-semibold mb-2">TypeScript Handbook</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Official TypeScript documentation and examples
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">typescriptlang.org</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">
                TypeScript
              </span>
            </div>
            <div className="text-xs text-muted-foreground">
              Added 3 days ago
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between mb-4">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <Bookmark className="h-5 w-5 text-orange-600" />
            </div>
            <Button variant="ghost" size="sm">
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
          <h3 className="font-semibold mb-2">Next.js Tutorial</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Learn Next.js from the official tutorial
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">nextjs.org</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-xs">
                Framework
              </span>
            </div>
            <div className="text-xs text-muted-foreground">
              Added 1 day ago
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between mb-4">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <Bookmark className="h-5 w-5 text-red-600" />
            </div>
            <Button variant="ghost" size="sm">
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
          <h3 className="font-semibold mb-2">GitHub Copilot</h3>
          <p className="text-sm text-muted-foreground mb-3">
            AI-powered code completion tool
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">github.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">
                Tools
              </span>
            </div>
            <div className="text-xs text-muted-foreground">
              Added 5 days ago
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between mb-4">
            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
              <Bookmark className="h-5 w-5 text-indigo-600" />
            </div>
            <Button variant="ghost" size="sm">
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
          <h3 className="font-semibold mb-2">Figma Design System</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Design system and component library
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">figma.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs">
                Design
              </span>
            </div>
            <div className="text-xs text-muted-foreground">
              Added 1 week ago
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 