/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { headers } from "next/headers";
import NavbarComp from "~/components/landingPage/navbarComp";
import { Input } from "~/components/ui/input";
import { auth } from "~/lib/auth";
import { db } from "~/server/db";
import { redirect } from "next/navigation";
import { Card } from "~/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Type } from "@prisma/client"; // Ensure this is the correct import

export default async function LogHours() {
  async function handleForm(formData: FormData) {
    "use server";

    const sessionData = await auth.api.getSession({
      headers: await headers(),
    });

    if (!sessionData?.user?.id) {
      return;
    }

    const hours = formData.get("hours");
    const date = formData.get("date");
    const department = formData.get("department");
    const type = formData.get("type");

    // Validate inputs
    if (!hours || !date || !department || !type) {
      return;
    }

    // Validate hours
    const parsedHours = Number(hours);
    if (isNaN(parsedHours) || parsedHours <= 0 || parsedHours > 24) {
      return;
    }

    try {
      await db.timeLog.create({
        data: {
          hours: parsedHours,
          date: new Date(date as string),
          department: department as string,
          type: type as Type, // Ensure type is correctly asserted
          userId: sessionData.user.id,
        },
      });

      // Redirect after successful creation
      redirect(`/home/${sessionData.user.id}`);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error logging hours:", error.message);
      } else {
        console.error("Unknown error logging hours");
      }
    }
  }

  return (
    <div>
      <NavbarComp />

      <Card className="mx-auto max-w-4xl rounded-md p-6 shadow-md">
        <h2 className="text-lg font-semibold capitalize text-gray-700 dark:text-white">
          Log Work Hours
        </h2>

        <form action={handleForm}>
          <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="hours"
                className="text-gray-700 dark:text-gray-200"
              >
                Hours
              </label>
              <Input
                id="hours"
                name="hours"
                type="number"
                step={0.01}
                min={0}
                max={24}
                required
                className="w-full"
              />
            </div>

            <div>
              <label
                htmlFor="date"
                className="text-gray-700 dark:text-gray-200"
              >
                Date
              </label>
              <Input
                id="date"
                name="date"
                type="date"
                required
                className="w-full"
              />
            </div>

            <div>
              <label
                htmlFor="department"
                className="text-gray-700 dark:text-gray-200"
              >
                Department
              </label>
              <Input
                id="department"
                name="department"
                type="text"
                required
                className="w-full"
              />
            </div>

            <div>
              <label
                htmlFor="type"
                className="text-gray-700 dark:text-gray-200"
              >
                Type
              </label>
              <Select name="type" required>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={Type.OVERTIME}>Overtime</SelectItem>
                  <SelectItem value={Type.VACATION}>Vacation</SelectItem>
                  <SelectItem value={Type.SICK}>Sick</SelectItem>
                  <SelectItem value={Type.HOLIDAY}>Holiday</SelectItem>
                  <SelectItem value={Type.CONTRACT}>Contract</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="transform rounded-md bg-gray-700 px-8 py-2.5 leading-5 text-white transition-colors duration-300 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
            >
              Save Hours
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
}
