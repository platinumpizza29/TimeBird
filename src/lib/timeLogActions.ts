"use server";

import { type TimeLog } from "@prisma/client";
import { db } from "~/server/db";
import { startOfWeek, startOfMonth, isSameWeek, isSameMonth } from "date-fns";

export async function getRecentTimeLogs(userId: string) {
  return await db.timeLog.findMany({
    take: 20,
    where: {
      userId,
    },
    orderBy: {
      date: "desc",
    },
    include: {
      user: true,
    },
  });
}

/**
 * Calculate total hours for the current week.
 * @param {Array<TimeLog>} timeLogs - Array of TimeLog objects.
 * @returns {number} - Total hours for the current week.
 */
async function calculateWeeklyHours(timeLogs: TimeLog[]) {
  const currentWeekStart = startOfWeek(new Date());
  let totalHours = 0;

  timeLogs.forEach((log) => {
    const logDate = new Date(log.date);
    if (isSameWeek(logDate, currentWeekStart)) {
      totalHours += log.hours;
    }
  });

  return totalHours;
}

/**
 * Calculate total hours for the current month.
 * @param {Array<TimeLog>} timeLogs - Array of TimeLog objects.
 * @returns {number} - Total hours for the current month.
 */
async function calculateMonthlyHours(timeLogs: TimeLog[]) {
  const currentMonthStart = startOfMonth(new Date());
  let totalHours = 0;

  timeLogs.forEach((log) => {
    const logDate = new Date(log.date);
    if (isSameMonth(logDate, currentMonthStart)) {
      totalHours += log.hours;
    }
  });

  return totalHours;
}

/**
 * Get time logs for the current week.
 * @param {Array<TimeLog>} timeLogs - Array of TimeLog objects.
 * @returns {Array<TimeLog>} - Time logs for the current week.
 */
async function getWeeklyLogs(timeLogs: TimeLog[]) {
  const currentWeekStart = startOfWeek(new Date());
  return timeLogs.filter((log) => {
    const logDate = new Date(log.date);
    return isSameWeek(logDate, currentWeekStart);
  });
}

/**
 * Get time logs for the current month.
 * @param {Array<TimeLog>} timeLogs - Array of TimeLog objects.
 * @returns {Array<TimeLog>} - Time logs for the current month.
 */
async function getMonthlyLogs(timeLogs: TimeLog[]) {
  const currentMonthStart = startOfMonth(new Date());
  return timeLogs.filter((log) => {
    const logDate = new Date(log.date);
    return isSameMonth(logDate, currentMonthStart);
  });
}

export {
  calculateWeeklyHours,
  calculateMonthlyHours,
  getWeeklyLogs,
  getMonthlyLogs,
};
