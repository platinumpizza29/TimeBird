"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Switch } from "~/components/ui/switch";
import { Separator } from "~/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import {
  Bell,
  CreditCard,
  User,
  Moon,
  Sun,
  Laptop,
  ArrowLeft,
} from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { authClient } from "~/lib/auth-client";
import { useEffect, useState } from "react";

export default function SettingsPage() {
  const { setTheme } = useTheme();
  const [userId, setUserId] = useState<string | null>(null); // State for userId

  useEffect(() => {
    const handleSessionData = async () => {
      try {
        const sessionData = await authClient.getSession();
        const id = sessionData.data?.session.userId;
        if (id) {
          setUserId(id); // Set userId in state
        }
      } catch (error) {
        console.error("Error fetching session data:", error);
      }
    };

    handleSessionData().catch((e) => console.error(e));
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto h-full max-w-6xl px-4 py-12 md:px-8 lg:px-12">
        <div className="space-y-8">
          <div className="space-y-2">
            <Link
              href={`/home/${userId}`}
              className="flex flex-row items-center space-x-2"
            >
              <ArrowLeft />
              <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
            </Link>
            <p className="text-muted-foreground">
              Manage your account settings and preferences.
            </p>
          </div>
          <Separator />
          <Tabs defaultValue="profile" className="space-y-8">
            <TabsList className="grid h-auto w-full grid-cols-4 gap-4">
              <TabsTrigger
                value="profile"
                className="flex items-center gap-2 py-3"
              >
                <User className="h-4 w-4" />
                Profile
              </TabsTrigger>
              <TabsTrigger
                value="billing"
                className="flex items-center gap-2 py-3"
              >
                <CreditCard className="h-4 w-4" />
                Billing
              </TabsTrigger>
              <TabsTrigger
                value="notifications"
                className="flex items-center gap-2 py-3"
              >
                <Bell className="h-4 w-4" />
                Notifications
              </TabsTrigger>
              <TabsTrigger
                value="appearance"
                className="flex items-center gap-2 py-3"
              >
                <Sun className="h-4 w-4" />
                Appearance
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <Card className="border-2">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl">Profile</CardTitle>
                  <CardDescription>
                    Manage your public profile information.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="flex items-center gap-6">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <Button variant="outline" size="lg">
                      Change Avatar
                    </Button>
                  </div>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First name</Label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last name</Label>
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          className="h-12"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="h-12"
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button size="lg">Save Changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="billing">
              <Card className="border-2">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl">Billing</CardTitle>
                  <CardDescription>
                    Manage your billing information and subscription.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="rounded-lg border-2 p-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-xl font-medium">Pro Plan</p>
                        <p className="text-sm text-muted-foreground">
                          $29/month
                        </p>
                      </div>
                      <Button variant="outline" size="lg">
                        Change Plan
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <Label className="text-lg">Payment Method</Label>
                    <div className="flex items-center gap-4 rounded-lg border-2 p-6">
                      <CreditCard className="h-8 w-8" />
                      <div className="space-y-1">
                        <p className="text-lg font-medium">
                          •••• •••• •••• 4242
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Expires 12/24
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="lg">
                    Update Payment Method
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="notifications">
              <Card className="border-2">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl">Notifications</CardTitle>
                  <CardDescription>
                    Choose what notifications you want to receive.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label className="text-base">Email Notifications</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive emails about your account activity.
                        </p>
                      </div>
                      <Switch />
                    </div>
                    <Separator className="my-4" />
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label className="text-base">Product Updates</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive updates about new features and improvements.
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <Separator className="my-4" />
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label className="text-base">Marketing Emails</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive tips, trends, and insights about our products.
                        </p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="appearance">
              <Card className="border-2">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl">Appearance</CardTitle>
                  <CardDescription>
                    Customize the appearance of the application.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <Label className="text-lg">Theme</Label>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                      <Button
                        variant="outline"
                        size="lg"
                        className="h-16 justify-start"
                        onClick={() => setTheme("light")}
                      >
                        <Sun className="mr-2 h-5 w-5" />
                        Light
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        className="h-16 justify-start"
                        onClick={() => setTheme("dark")}
                      >
                        <Moon className="mr-2 h-5 w-5" />
                        Dark
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        className="h-16 justify-start"
                        onClick={() => setTheme("system")}
                      >
                        <Laptop className="mr-2 h-5 w-5" />
                        System
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
