import { TrendingUp, Settings, User } from "lucide-react"; // Added User icon
import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button"; // shadcn button
import { Input } from "@/components/ui/input"; // shadcn input
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const SettingsPage = () => {
  return (
    <div className="text-slate-700 flex justify-center">
      <div className="w-1/2">
        <div className="text-custom">
          <h1 className="text-5xl h-14 font-light gradientDefault">Settings</h1>
          <p className="text-base mt-2 mb-4">
            Customize your preferences and manage your account settings below.
          </p>
        </div>
        <Accordion type="single" collapsible className="mt-10">
          {/* Account Settings */}
          <AccordionItem value="account-settings" defaultOpen>
            <AccordionTrigger>
              <div className="flex justify-start items-center">
                <User size={18} className="mr-3" />
                Account Settings
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Update your personal information and manage your account
                details.
              </p>
              <div className="flex flex-col mt-2">
                <label className="text-sm">
                  Username:
                  <Input
                    type="text"
                    className="mt-1"
                    placeholder="Enter your username"
                  />
                </label>
                <label className="text-sm mt-2">
                  Email:
                  <Input
                    type="email"
                    className="mt-1"
                    placeholder="Enter your email"
                  />
                </label>
                <label className="text-sm mt-2">
                  Password:
                  <Input
                    type="password"
                    className="mt-1"
                    placeholder="Enter new password"
                  />
                </label>
                <Button className="mt-4">Save Changes</Button>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Notification Settings */}
          <AccordionItem value="notification-settings">
            <AccordionTrigger>
              <div className="flex justify-start items-center">
                <TrendingUp size={18} className="mr-3" />
                Notifications
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Manage your notification preferences to stay updated on the
                latest news and alerts.
              </p>
              <div className="flex items-center justify-between mt-2">
                <span>Email Notifications</span>
                <Switch />
              </div>
              <div className="flex items-center justify-between mt-2">
                <span>Push Notifications</span>
                <Switch />
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Content Preferences */}
          <AccordionItem value="content-preferences">
            <AccordionTrigger>
              <div className="flex justify-start items-center">
                <TrendingUp size={18} className="mr-3" />
                Content Preferences
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Select your preferred news categories and sources to customize
                your feed.
              </p>
              <RadioGroup defaultValue="comfortable">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="default" id="r1" />
                  <Label htmlFor="r1">Default</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="comfortable" id="r2" />
                  <Label htmlFor="r2">Comfortable</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="compact" id="r3" />
                  <Label htmlFor="r3">Compact</Label>
                </div>
              </RadioGroup>
            </AccordionContent>
          </AccordionItem>

          {/* Privacy Settings */}
          <AccordionItem value="privacy-settings">
            <AccordionTrigger>
              <div className="flex justify-start items-center">
                <TrendingUp size={18} className="mr-3" />
                Privacy Settings
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p>Control your data sharing and privacy preferences.</p>
              <div className="flex items-center justify-between mt-2">
                <span>Share Data with Third Parties</span>
                <Switch />
              </div>
              <div className="flex items-center justify-between mt-2">
                <span>Track Activity for Personalization</span>
                <Switch />
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Theme Settings */}
          <AccordionItem value="theme-settings">
            <AccordionTrigger>
              <div className="flex justify-start items-center">
                <TrendingUp size={18} className="mr-3" />
                Theme Settings
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p>Choose your preferred theme for the app interface.</p>
              <div className="flex items-center justify-between mt-2">
                <span>Dark Mode</span>
                <Switch />
              </div>
              <div className="flex items-center justify-between mt-2">
                <span>Font Size</span>
                <select className="mt-1 border rounded p-1">
                  <option value="small">Small</option>
                  <option value="medium" selected>
                    Medium
                  </option>
                  <option value="large">Large</option>
                </select>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Language Settings */}
          <AccordionItem value="language-settings">
            <AccordionTrigger>
              <div className="flex justify-start items-center">
                <TrendingUp size={18} className="mr-3" />
                Language
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p>Select your preferred language for the app.</p>
              <select className="mt-1 border rounded p-2">
                {" "}
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  English
                </label>
                <option value="spanish">Spanish</option>
                <option value="french">French</option>
                <option value="german">German</option>
              </select>
            </AccordionContent>
          </AccordionItem>

          {/* Logout Option */}
          <AccordionItem value="logout">
            <AccordionTrigger>
              <div className="flex justify-start items-center">
                <Settings size={18} className="mr-3" />
                Logout
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Click to log out of your account. Make sure to save any changes
                before proceeding.
              </p>
              <Button variant="destructive" className="mt-2">
                Logout
              </Button>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
