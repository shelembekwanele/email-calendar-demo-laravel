import { Head } from "@inertiajs/react";
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: "Gmail",
    href: "/gmail",
  },
];

type Message = {
  id: number;
  from: string;
  subject: string;
  body: string;
  date: string;
};

const mockMessages: Message[] = [
  {
    id: 1,
    from: "Shein",
    subject: "Get 50% off on your first order!",
    body: "Thanks for signing up. Use code WELCOME50 at checkout to save 50%!",
    date: "2023-10-01",
  },
  {
    id: 2,
    from: "LinkedIn",
    subject: "Your profile has new views!",
    body: "You’ve got 3 new profile views this week. See who viewed your profile.",
    date: "2023-10-02",
  },
  {
    id: 3,
    from: "GitHub",
    subject: "Security alert for one of your repositories",
    body: "We've detected a vulnerability in a dependency used by one of your repositories.",
    date: "2023-10-03",
  },
  {
    id: 4,
    from: "Spotify",
    subject: "Your 2023 Wrapped is here!",
    body: "See your most listened to artists, albums, and more from 2023.",
    date: "2023-12-01",
  },
  {
    id: 5,
    from: "Amazon",
    subject: "Your order has been shipped",
    body: "Your order #123-4567890 has been shipped and will arrive soon.",
    date: "2024-01-15",
  },
];


export default function GmailPage() {
  const [showCompose, setShowCompose] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  const openInbox = () => {
    setShowCompose(false);
    setSelectedMessage(null);
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Gmail" />
      <div className="flex flex-col h-[calc(100vh-4rem)] p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 flex-1">
          {/* Sidebar */}
          <div className="relative h-full overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border flex flex-col gap-2 p-6">
            <div className="w-full flex justify-center">
              <Button
                className="p-6 w-1/2 cursor-pointer"
                onClick={() => {
                  setShowCompose(true);
                  setSelectedMessage(null);
                }}
              >
                Compose
              </Button>
            </div>
            <div className="pl-4 mt-6 text-sm font-semibold text-gray-700 dark:text-gray-200">
              <div className="flex flex-col gap-4">
                {["Inbox", "Sent", "Drafts", "Spam"].map((label) => (
                  <p
                    key={label}
                    className="cursor-pointer transition-colors hover:bg-gray-50 dark:hover:bg-gray-800 p-3"
                    onClick={openInbox}
                  >
                    {label}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-1 md:col-span-3 relative h-full overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border p-6 space-y-6">
            {showCompose ? (
              // Compose Form
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
                    className="min-h-[250px] w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="flex justify-end">
                  <Button className="p-6 w-1/4 cursor-pointer" type="submit">
                    Send
                  </Button>
                </div>
              </div>
            ) : selectedMessage ? (
              // Message View
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedMessage.subject}
                </h2>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  From: {selectedMessage.from} • {selectedMessage.date}
                </div>
                <div className="text-gray-800 dark:text-gray-200 whitespace-pre-wrap">
                  {selectedMessage.body}
                </div>
                <div className="flex justify-end">
                  <Button onClick={openInbox}>Back to Inbox</Button>
                </div>
              </div>
            ) : (
              // Inbox List
              <div className="flex flex-col h-full justify-between">
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                    {mockMessages.map((msg) => (
                    <div
                        key={msg.id}
                        onClick={() => setSelectedMessage(msg)}
                        className="cursor-pointer flex items-center justify-between px-6 py-4 transition hover:bg-gray-50 dark:hover:bg-gray-800"
                    >
                        <div>
                        <h1 className="font-medium text-gray-800 dark:text-gray-100">
                            {msg.from}
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                            {msg.subject}
                        </p>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{msg.date}</p>
                    </div>
                    ))}
                </div>

                <div className="flex justify-between items-center px-6 py-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Showing <span className="font-medium">1</span> to{" "}
                    <span className="font-medium">10</span> of{" "}
                    <span className="font-medium">100</span> results
                  </div>
                  <div className="inline-flex gap-1">
                    <button
                      className="px-3 py-1 rounded-md text-sm border border-gray-300 dark:border-gray-700 text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 cursor-not-allowed"
                      disabled
                    >
                      Previous
                    </button>
                    {[1, 2, 3].map((num) => (
                      <button
                        key={num}
                        className={`px-3 py-1 rounded-md text-sm border ${
                          num === 1
                            ? "bg-blue-500 text-white border-blue-600"
                            : "border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                    <span className="px-2 py-1 text-sm text-gray-400">...</span>
                    <button className="px-3 py-1 rounded-md text-sm border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                      10
                    </button>
                    <button className="px-3 py-1 rounded-md text-sm border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
