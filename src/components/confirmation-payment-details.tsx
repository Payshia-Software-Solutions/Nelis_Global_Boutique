
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const VisaIcon = () => (
    <svg width="38" height="24" viewBox="0 0 38 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="rounded">
        <rect width="38" height="24" rx="3" fill="#E0E0E0"/>
        <path d="M11.963 16.012H9.213L12.313 7.988H14.713L11.963 16.012ZM22.689 12.3L24.167 8.52H21.233L19.865 11.944L18.497 8.52H15.617L17.845 16.012H20.399L22.689 12.3Z" fill="#01579B"/>
        <path d="M26.242 16.012H28.712L26.544 7.988H24.334L22.84 10.938L21.346 7.988H18.91L21.96 16.012H24.11L26.242 16.012Z" fill="#F9A825"/>
    </svg>
);


export function ConfirmationPaymentDetails() {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Payment Details</CardTitle>
                <Button variant="link" className="text-primary p-0 h-auto">Edit</Button>
            </CardHeader>
            <CardContent className="space-y-4">
                <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Payment Method</p>
                    <div className="flex items-center gap-3">
                        <VisaIcon />
                        <span className="font-semibold">Visa ending in 1234</span>
                    </div>
                </div>
                <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Billing Address</p>
                    <div className="text-sm">
                        <p>John Doe</p>
                        <p>123 Main Street</p>
                        <p>Colombo 07, Western Province</p>
                        <p>Sri Lanka 00700</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
