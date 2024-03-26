import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import { Exam } from "@/interfaces/exam";

function ExamCard({ exam }: { exam: Exam }) {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="relative m-auto max-w-[380px] h-[120px] flex items-center justify-center space-y-3 p-4 border rounded-lg bg-secondary hover:bg-[#e8ebee] dark:hover:bg-[#1c2737] shadow-[4px_4px_0_#d1d5d9] dark:shadow-[4px_4px_0_#1e293bb8] active:shadow-[0px_0px_0_#000] dark:active:shadow-[0px_0px_0_#000] active:translate-x-1 active:translate-y-1 transition-all">
          <div className="mt-3 truncate">
            <h3 className="text-xl truncate">{exam.title}</h3>
            <p className="text-xs font-semibold absolute p-1 -top-0 right-0 text-primary">
              {exam.subject}
            </p>
            <span className="absolute -top-1 left-0 p-1 font-bold text-green-500">
              {exam.numberOfQuestions}
            </span>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <div className="truncate">
            <DialogTitle className="uppercase tracking-wide">
              {exam.title}
            </DialogTitle>
            <p className="tracking-wide text-xs uppercase font-bold mt-2">
              By: {exam.teacher}
            </p>
          </div>
          <DialogDescription>{exam.desc}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Link href={`/exams/${exam.id}`} className="w-full">
            <Button className="w-full">Start Exam</Button>
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ExamCard;
