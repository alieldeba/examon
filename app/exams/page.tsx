import React from "react";
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {
    AlertDialog,
    // AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Link from "next/link";

function page() {
    let features = [
        {
            id: 1,
            title: "Business Systems Development Analyst",
            teacher: "Stronack",
            numberOfQuestions: 20,
            subject: "Programmer Analyst IV",
        },
        {
            id: 2,
            title: "Product Engineer",
            teacher: "Okenfold",
            numberOfQuestions: 25,
            subject: "Analyst Programmer",
        },
        {
            id: 3,
            title: "Financial Advisor",
            teacher: "Bartholomaus",
            numberOfQuestions: 10,
            subject: "Staff Scientist",
        },
        {
            id: 4,
            title: "Programmer Analyst I",
            teacher: "Benkhe",
            numberOfQuestions: 15,
            subject: "Help Desk Technician",
        },
        {
            id: 5,
            title: "Help Desk Technician",
            teacher: "Enefer",
            numberOfQuestions: 30,
            subject: "VP Quality Control",
        },
        {
            id: 6,
            title: "Tax Accountant",
            teacher: "McClelland",
            numberOfQuestions: 20,
            subject: "Paralegal",
        },
    ];
    return (
        <>
            <div className="relative max-w-2xl mx-auto sm:text-center">
                <div className="relative z-10">
                    <h3 className="text-3xl font-semibold sm:text-4xl">
                        Exams
                    </h3>
                    <p className="mt-3 text-muted-foreground">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec congue, nisl eget molestie varius, enim ex
                        faucibus purus.
                    </p>
                </div>
            </div>
            <div className="relative mt-12">
                <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((item, idx) => (
                        <AlertDialog key={idx}>
                            <AlertDialogTrigger>
                                <li className="space-y-3 p-4 border rounded-lg">
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>
                                                Some more info about exam {item.id}
                                            </AlertDialogTitle>
                                            <AlertDialogDescription>
                                                Lorem, ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Quis eligendi amet, sit
                                                reiciendis debitis nam fugiat
                                                ducimus quam ipsa beatae!
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>
                                                Cancel
                                            </AlertDialogCancel>
                                            {/* TODO: need to make it as a component */}
                                            <Link
                                                href={`/emails/${item.id}`}
                                                className={cn(buttonVariants())}
                                            >
                                                Start Exam
                                            </Link>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                    <div className="text-indigo-600 pb-3">
                                        {item.title}
                                    </div>
                                    <h4 className="text-lg font-semibold">
                                        {item.teacher}
                                    </h4>
                                    <h4 className="text-lg font-semibold">
                                        {item.subject}
                                    </h4>
                                    <h4 className="text-lg font-semibold">
                                        Number of questions:{" "}
                                        {item.numberOfQuestions}
                                    </h4>
                                </li>
                            </AlertDialogTrigger>
                        </AlertDialog>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default page;
