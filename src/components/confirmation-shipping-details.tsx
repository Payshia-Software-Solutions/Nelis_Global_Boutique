
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ConfirmationShippingDetails() {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Shipping To</CardTitle>
                <Button variant="link" className="text-primary p-0 h-auto">Edit</Button>
            </CardHeader>
            <CardContent>
                <div className="text-sm space-y-1">
                    <p className="font-semibold">John Doe</p>
                    <p>456 Delivery Avenue</p>
                    <p>Apartment 12B</p>
                    <p>Colombo 03, Western Province</p>
                    <p>Sri Lanka 00300</p>
                    <p>Phone: +94 77 123 4567</p>
                </div>
            </CardContent>
        </Card>
    );
}
