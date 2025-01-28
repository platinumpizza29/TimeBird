// app/api/timelogs/route.ts
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { auth } from "~/lib/auth";
import { db } from "~/server/db"; // Adjust the import based on your project structure

export async function GET() {
  const sessionHeaders = await headers();
  const sessionData = await auth.api.getSession({
    headers: sessionHeaders,
  });
  const userId = sessionData?.user?.id;
  try {
    const timeLogs = await db.timeLog.findMany({
      select: {
        department: true,
        hours: true,
        type: true,
      },
      where: {
        userId: userId,
      },
    });
    return NextResponse.json(timeLogs);
  } catch (error) {
    console.error("Error fetching time logs:", error);
    return NextResponse.json(
      { error: "Failed to fetch time logs" },
      { status: 500 },
    );
  }
}
