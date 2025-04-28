import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';

export function NavMain({ items = [] }: { items: NavItem[] }) {
    const page = usePage();
    return (
        <SidebarGroup className="px-2 py-0">
            <SidebarGroupLabel>Platform</SidebarGroupLabel>
            <Accordion type="single" collapsible>
                {items.map((item) => {
                    const isAccordion = item.title === 'Renja' || item.title === 'Kegiatan';
                    if (isAccordion) {
                        return (
                            <AccordionItem key={item.title} value={item.title}>
                                <AccordionTrigger>
                                    <SidebarMenuButton isActive={item.href === page.url} tooltip={{ children: item.title }}>
                                        {item.icon && <item.icon />}
                                        <span className="text-sm">{item.title}</span>
                                    </SidebarMenuButton>
                                </AccordionTrigger>
                                <AccordionContent className="mt-2">
                                    <SidebarMenu>
                                        {item.children?.map((child) => (
                                            <SidebarMenuItem key={child.title}>
                                                <SidebarMenuButton asChild isActive={child.href === page.url} tooltip={{ children: child.title }}>
                                                    <Link href={child.href} prefetch>
                                                        {child.icon && <child.icon />}
                                                        <span className="text-sm">{child.title}</span>
                                                    </Link>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                        ))}
                                    </SidebarMenu>
                                </AccordionContent>
                            </AccordionItem>
                        );
                    } else {
                        return (
                            <SidebarMenu key={item.title}>
                                <SidebarMenuItem>
                                    <SidebarMenuButton asChild isActive={item.href === page.url} tooltip={{ children: item.title }}>
                                        <Link href={item.href} prefetch>
                                            {item.icon && <item.icon />}
                                            <span className="text-sm">{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            </SidebarMenu>
                        );
                    }
                })}
            </Accordion>
        </SidebarGroup>
    );
}
