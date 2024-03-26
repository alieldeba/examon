import React from "react";
import { Button } from "@/components/ui/button";
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
import ExamCard from "@/components/ExamCard";

function page() {
  let exams = [
    {
      id: 1,
      title: "Business Systems Development Analyst",
      teacher: "Stronack",
      numberOfQuestions: 20,
      subject: "Programming",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis eligendi amet, sit reiciendis debitis nam fugiat ducimus quam ipsa beatae!",
    },
    {
      id: 2,
      title: "Product Engineer",
      teacher: "Okenfold",
      numberOfQuestions: 25,
      subject: "Data Analysis",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis eligendi amet, sit reiciendis debitis nam fugiat ducimus quam ipsa beatae!",
    },
    {
      id: 3,
      title: "Financial Advisor",
      teacher: "Bartholomaus",
      numberOfQuestions: 10,
      subject: "History",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis eligendi amet, sit reiciendis debitis nam fugiat ducimus quam ipsa beatae!",
    },
    {
      id: 4,
      title: "Programmer Analyst I",
      teacher: "Benkhe",
      numberOfQuestions: 15,
      subject: "Geography",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis eligendi amet, sit reiciendis debitis nam fugiat ducimus quam ipsa beatae!",
    },
    {
      id: 5,
      title: "Help Desk Technician",
      teacher: "Enefer",
      numberOfQuestions: 30,
      subject: "English",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis eligendi amet, sit reiciendis debitis nam fugiat ducimus quam ipsa beatae!",
    },
    {
      id: 6,
      title: "Tax Accountant",
      teacher: "McClelland",
      numberOfQuestions: 20,
      subject: "Arabic",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis eligendi amet, sit reiciendis debitis nam fugiat ducimus quam ipsa beatae!",
    },
    {
      id: 7,
      title: "Business Systems Development Analyst",
      teacher: "Stronack",
      numberOfQuestions: 20,
      subject: "Programming",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis eligendi amet, sit reiciendis debitis nam fugiat ducimus quam ipsa beatae!",
    },
    {
      id: 8,
      title: "Product Engineer",
      teacher: "Okenfold",
      numberOfQuestions: 25,
      subject: "Data Analysis",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis eligendi amet, sit reiciendis debitis nam fugiat ducimus quam ipsa beatae!",
    },
    {
      id: 9,
      title: "Financial Advisor",
      teacher: "Bartholomaus",
      numberOfQuestions: 10,
      subject: "History",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis eligendi amet, sit reiciendis debitis nam fugiat ducimus quam ipsa beatae!",
    },
    {
      id: 10,
      title: "Programmer Analyst I",
      teacher: "Benkhe",
      numberOfQuestions: 15,
      subject: "Geography",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis eligendi amet, sit reiciendis debitis nam fugiat ducimus quam ipsa beatae!",
    },
    {
      id: 11,
      title: "Help Desk Technician",
      teacher: "Enefer",
      numberOfQuestions: 30,
      subject: "English",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis eligendi amet, sit reiciendis debitis nam fugiat ducimus quam ipsa beatae!",
    },
    {
      id: 12,
      title: "Tax Accountant",
      teacher: "McClelland",
      numberOfQuestions: 20,
      subject: "Arabic",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis eligendi amet, sit reiciendis debitis nam fugiat ducimus quam ipsa beatae!",
    },
  ];
  return (
    <>
      <div className="relative max-w-2xl mx-auto sm:text-center">
        <div className="relative z-10">
          <h3 className="text-3xl font-semibold sm:text-4xl">Exams</h3>
          <p className="mt-3 text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            congue, nisl eget molestie varius, enim ex faucibus purus.
          </p>
        </div>
      </div>
      <div className="relative mt-12">
        <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {exams.map((exam, idx) => (
            <ExamCard key={idx} exam={exam} />
          ))}
        </section>
      </div>
    </>
  );
}

export default page;
