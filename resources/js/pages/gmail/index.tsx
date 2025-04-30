import { Button } from "@/components/ui/button";
import { PlaceholderPattern } from "@/components/ui/placeholder-pattern";
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Head } from "@inertiajs/react";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Gmail',
        href: '/gmail',
    },
];

export default function Index() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Gmail" />
            <div className="flex flex-1 flex-col h-[calc(100vh-4rem)] p-4 gap-4"> {/* Adjust based on header height */}
                <div className="grid flex-1 grid-cols-1 md:grid-cols-4 gap-4">
                    {/* Sidebar/Card */}
                    <div className="relative h-full overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border flex flex-col gap-2 p-10">
                        <div className="w-full flex justify-center">
                            <Button className="p-6 w-1/2 cursor-pointer">Compose</Button> 
                        </div>
                        <div></div>
                    </div>

                    {/* Main Content */}
                    <div className="relative h-full overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border col-span-1 md:col-span-3">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
