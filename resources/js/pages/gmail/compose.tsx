import { Head } from "@inertiajs/react";
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: "Gmail",
    href: "/gmail",
  },
  {
    title: "Compose",
    href: "/gmail/compose",
  },
];

export default function ComposeEmail() {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Compose Email" />
      <div className="flex flex-col h-[calc(100vh-4rem)] p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 flex-1">
          {/* Sidebar */}
          <div className="relative h-full overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border flex flex-col gap-2 p-6">
            <div className="w-full flex justify-center">
              <Button className="p-6 w-1/2 cursor-pointer">Compose</Button>
            </div>
            <div className="pl-4 mt-6 text-sm font-semibold text-gray-700 dark:text-gray-200">
              <div className="flex flex-col gap-4">
                {["Inbox", "Sent", "Drafts", "Spam"].map((label) => (
                  <p
                    key={label}
                    className="cursor-pointer transition-colors hover:bg-gray-50 dark:hover:bg-gray-800 p-3"
                  >
                    {label}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Compose Form */}
          <div className="col-span-1 md:col-span-3 relative h-full overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border p-6 space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="to">To</Label>
                <Input id="to" placeholder="recipient@example.com" />
              </div>

              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Subject" />
              </div>

              <div>
                <Label htmlFor="body">Message</Label>
                <textarea
                  id="body"
                  placeholder="Write your message here..."
                  className="min-h-[250px]"
                />
              </div>

              <div className="flex justify-end">
                <Button type="submit">Send</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
