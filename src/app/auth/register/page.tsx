
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

const GoogleIcon = () => (
    <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
        <path fill="#4285F4" d="M21.35,11.1h-9.2v2.6h5.3c-0.2,1.7-1.3,3.2-3.2,3.2c-2.3,0-4.2-1.9-4.2-4.2s1.9-4.2,4.2-4.2c1.1,0,2.1,0.4,2.8,1.2l2.1-2.1C16.5,5.6,14.5,4.5,12.15,4.5C8.05,4.5,4.5,8.05,4.5,12.15s3.55,7.65,7.65,7.65c4.4,0,7.3-3.1,7.3-7.5C19.45,11.7,19.4,11.4,19.35,11.1z"/>
    </svg>
)

const FacebookIcon = () => (
    <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
        <path fill="#1877F2" d="M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,4.99,3.66,9.13,8.44,9.88V15.5H8.31v-3.5h2.13V9.62c0-2.11,1.26-3.26,3.16-3.26c0.9,0,1.8,0.16,1.8,0.16v2.99h-1.5c-1.03,0-1.37,0.62-1.37,1.33v1.56h3.33l-0.53,3.5H13.6v6.38C18.34,21.13,22,16.99,22,12z"/>
    </svg>
)

export default function RegisterPage() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-left space-y-2">
        <CardTitle className="text-2xl">Create Your Account</CardTitle>
        <CardDescription>
          Unlock exclusive benefits, track your orders, and enjoy a personalized shopping experience.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="full-name">Full Name</Label>
            <Input id="full-name" placeholder="Enter your full name" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="Enter your email" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Enter your password" required />
            <p className="text-xs text-muted-foreground">
              Minimum 8 characters, including a number and a special character.
            </p>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input id="confirm-password" type="password" placeholder="Confirm your password" required />
          </div>
          <div className="flex items-start space-x-2">
            <Checkbox id="terms" className="mt-1" />
            <Label htmlFor="terms" className="font-normal text-sm text-muted-foreground">
              I agree to the{" "}
              <Link href="#" className="font-medium text-primary hover:underline">
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link href="/privacy-policy" className="font-medium text-primary hover:underline">
                Privacy Policy
              </Link>
            </Label>
          </div>
          <Button type="submit" className="w-full">
            Create Account
          </Button>

          <div className="relative my-2">
            <Separator />
            <span className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-card px-2 text-xs text-muted-foreground">
              Or sign up with
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <Button variant="outline" className="w-full">
              <GoogleIcon />
              Continue with Google
            </Button>
            <Button variant="outline" className="w-full">
              <FacebookIcon />
              Continue with Facebook
            </Button>
          </div>
        </div>
        <div className="mt-6 text-center text-sm">
          Already have an account?{" "}
          <Link href="/auth/login" className="font-medium text-primary hover:underline">
            Sign In
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
