import { headers } from "next/headers";
import NavbarComp from "~/components/landingPage/navbarComp";
import { Input } from "~/components/ui/input";
import { auth } from "~/lib/auth";
import { db } from "~/server/db";
import { redirect } from "next/navigation";
import { Card } from "~/components/ui/card";

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

    // Validate inputs
    if (!hours || !date || !department) {
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
          userId: sessionData.user.id,
        },
      });

      // Redirect after successful creation
      redirect(`/home/${sessionData.user.id}`);
    } catch (error) {
      console.error("Error logging hours:", error);
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
