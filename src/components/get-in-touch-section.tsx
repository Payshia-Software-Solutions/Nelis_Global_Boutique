
"use client";

import { Phone, Headset, Mail, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const contactMethods = [
    {
        icon: Phone,
        title: "Phone",
        detail: "+94 775 430 700",
    },
    {
        icon: Headset,
        title: "Hotline",
        detail: "+94 718 885 777",
    },
    {
        icon: Mail,
        title: "Email",
        detail: "nelisglobalboutique@gmail.com",
    },
];

const businessHours = [
    {
        day: "Monday - Friday",
        time: "9:00 AM - 5:00 PM",
    },
    {
        day: "Saturday",
        time: "9:00 AM - 1:00 PM",
    },
    {
        day: "Sunday",
        time: "Closed",
    },
];

export function GetInTouchSection() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="flex justify-center items-center gap-3">
                        <Phone className="h-8 w-8 text-primary" />
                        <h2 className="text-4xl font-bold">Get in Touch</h2>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {contactMethods.map((method, index) => (
                        <Card key={index} className="text-center p-8 bg-card shadow-sm hover:shadow-lg transition-shadow">
                            <div className="mb-4 inline-block bg-primary/10 text-primary p-4 rounded-full">
                                <method.icon className="h-10 w-10" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                            <p className="text-muted-foreground">{method.detail}</p>
                        </Card>
                    ))}
                </div>

                <div className="text-center">
                     <div className="flex justify-center items-center gap-3 mb-8">
                        <h2 className="text-3xl font-bold">Business Hours</h2>
                    </div>
                    <Card className="max-w-3xl mx-auto p-8 bg-muted/40 border-dashed">
                        <div className="grid sm:grid-cols-3 gap-8 text-center">
                           {businessHours.map((item, index) => (
                               <div key={index} className="space-y-1">
                                   <h4 className="font-semibold text-lg">{item.day}</h4>
                                   <p className="text-muted-foreground">{item.time}</p>
                               </div>
                           ))}
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}
