import { ArrowLeft } from "lucide-react";
import { headers } from "next/headers";
import Link from "next/link";
import WeeklyChartComp from "~/components/home/weeklyChart";
import NavbarComp from "~/components/landingPage/navbarComp";
import { auth } from "~/lib/auth";
import { getWeeklyLogs } from "~/lib/timeLogActions";
import { db } from "~/server/db";

export default async function WeeklySummaryPage() {
  const sessionData = await auth.api.getSession({
    headers: await headers(),
  });
  const userId = sessionData?.session.userId;
  const timelogs = await db.timeLog.findMany({
    where: { userId: userId },
  });
  const weeklySummary = await getWeeklyLogs(timelogs);

  return (
    <div className="space-y-4">
      <NavbarComp />
      <div className="mx-4 flex flex-col space-y-4 md:mx-12 lg:mx-24 xl:mx-48">
        <div className="flex flex-row items-center space-x-4">
          <Link href={`/home/${userId}`} className="">
            <ArrowLeft />
          </Link>
          <h1 className="text-2xl font-bold">Weekly Summary</h1>
        </div>

        <div className="">
          <WeeklyChartComp props={weeklySummary} />
        </div>

        <div className="-m-1.5 overflow-x-auto">
          <div className="inline-block min-w-full p-1.5 align-middle">
            <div className="overflow-hidden rounded-lg border shadow dark:border-neutral-700 dark:shadow-gray-900">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                <thead className="bg-gray-50 dark:bg-neutral-700">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium uppercase text-gray-500 dark:text-neutral-400"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium uppercase text-gray-500 dark:text-neutral-400"
                    >
                      Hours
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium uppercase text-gray-500 dark:text-neutral-400"
                    >
                      Department
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-end text-xs font-medium uppercase text-gray-500 dark:text-neutral-400"
                    >
                      Type
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  {weeklySummary.map((log, index) => (
                    <tr key={index}>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800 dark:text-neutral-200">
                        {log.date.toLocaleDateString()}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800 dark:text-neutral-200">
                        {log.hours}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800 dark:text-neutral-200">
                        {log.department}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-end text-sm font-medium">
                        <button
                          type="button"
                          className="inline-flex items-center gap-x-2 rounded-lg border border-transparent text-sm font-semibold text-blue-600 hover:text-blue-800 focus:text-blue-800 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
                        >
                          {log.type}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
