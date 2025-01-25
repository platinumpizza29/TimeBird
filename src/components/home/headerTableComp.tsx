import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { format } from "date-fns";
import { getRecentTimeLogs } from "~/lib/timeLogActions";
import { type TimeLog } from "@prisma/client";
import { auth } from "~/lib/auth";
import { headers } from "next/headers";

export default async function HeaderTableComp() {
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

  return (
    <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
      <Table>
        <TableCaption>Recent Time Logs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Hours</TableHead>
            <TableHead>User</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {timeLogs.map((log) => (
            <TableRow key={log.id}>
              <TableCell>{format(log.date, "MMM dd, yyyy")}</TableCell>
              <TableCell>{log.department}</TableCell>
              <TableCell>{log.hours}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
