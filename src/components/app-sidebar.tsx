"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  ChartAreaIcon,
  Command,
  GalleryVerticalEnd,
  PlusCircleIcon,
  Settings,
  Settings2,
  User,
} from "lucide-react";

import { NavMain } from "~/components/nav-main";
import { NavProjects } from "~/components/nav-projects";
import { NavUser } from "~/components/nav-user";
import { TeamSwitcher } from "~/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuItem,
  SidebarRail,
} from "~/components/ui/sidebar";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Summary",
      url: "#",
      icon: ChartAreaIcon,
      isActive: true,
      items: [
        {
          title: "Weekly",
          url: "#",
        },
        {
          title: "Monthly",
          url: "#",
        },
        {
          title: "Yearly",
          url: "#",
        },
      ],
    },
  ],
  Accessibility: [
    {
      name: "Profile",
      url: "#",
      icon: User,
    },
    {
      name: "Settings",
      url: "#",
      icon: Settings,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const router = useRouter();

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.Accessibility} />
      </SidebarContent>
      <SidebarFooter>
        <Button
          size="sm"
          className="mb-4 w-full justify-start"
          onClick={() => router.push("/loghours")}
        >
          <PlusCircleIcon /> Log hours
        </Button>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
