
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ConfirmationShippingDetails({ orderData }: { orderData: any }) {
    const { formValues } = orderData;
    const { firstName, lastName, address, apartment, city, postalCode, country, phone } = formValues;
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Shipping To</CardTitle>
                <Button variant="link" className="text-primary p-0 h-auto">Edit</Button>
            </CardHeader>
            <CardContent>
                <div className="text-sm space-y-1">
                    <p className="font-semibold">{firstName} {lastName}</p>
                    <p>{address}</p>
                    {apartment && <p>{apartment}</p>}
                    <p>{city}, {postalCode}</p>
                    <p>{country}</p>
                    <p>Phone: {phone}</p>
                </div>
            </CardContent>
        </Card>
    );
}
