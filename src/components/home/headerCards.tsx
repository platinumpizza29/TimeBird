import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import PieChartComp from "./pieComp";
import {
  calculateMonthlyHours,
  calculateWeeklyHours,
  getRecentTimeLogs,
} from "~/lib/timeLogActions";
import { auth } from "~/lib/auth";
import { headers } from "next/headers";
import { type TimeLog } from "@prisma/client";

export default async function HeaderCardsComp() {
  const sessionData = await auth.api.getSession({
    headers: await headers(),
  });

  if (!sessionData?.user?.id) {
    return <div>Please log in to view your time logs.</div>;
  }

  const userId = sessionData.user.id;
  const timeLogs = (await getRecentTimeLogs(userId)) as TimeLog[];

  if (timeLogs.length === 0) {
    return <div>No recent time logs available.</div>;
  }

  const weeklyHours = await calculateWeeklyHours(timeLogs);
  const monthlyHours = await calculateMonthlyHours(timeLogs);

  return (
    <div className="grid auto-rows-min gap-4 md:grid-cols-3">
      {/* 1st card */}
      <Card className="aspect-video rounded-xl bg-muted/50 p-4">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Weekly Hours</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Total weekly hours
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center">
          <div className="text-4xl font-bold text-primary">
            {weeklyHours} <span className="text-lg">hrs</span>
          </div>
          <div className="mt-2 h-2 w-full rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-primary"
              style={{ width: `${(weeklyHours / 40) * 100}%` }} // Assuming 40 hours is a full week
            />
          </div>
        </CardContent>
      </Card>
      {/* 2nd card */}
      <Card className="aspect-video rounded-xl bg-muted/50 p-4">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Weekly Hours</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Total weekly hours
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center">
          <div className="text-4xl font-bold text-primary">
            {monthlyHours} <span className="text-lg">hrs</span>
          </div>
          <div className="mt-2 h-2 w-full rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-primary"
              style={{ width: `${(monthlyHours / 160) * 100}%` }} // Assuming 40 hours is a full week
            />
          </div>
        </CardContent>
      </Card>
      {/* 3rd card */}
      <PieChartComp />
    </div>
  );
}
