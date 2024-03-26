import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { User } from "@/interfaces/user";

function page() {
  const users: User[] = [
    {
      id: 1,
      name: "Mullin",
      email: "nmullin0@netlog.com",
      takenExams: 1,
      createdExams: 1,
      totalPoints: 1,
    },
    {
      id: 2,
      name: "alieldeba",
      email: "tgamell1@jigsy.com",
      takenExams: 6,
      createdExams: 2,
      totalPoints: 2,
    },
    {
      id: 3,
      name: "Wyness",
      email: "awyness2@typepad.com",
      takenExams: 3,
      createdExams: 3,
      totalPoints: 3,
    },
    {
      id: 4,
      name: "Rosebotham",
      email: "orosebotham3@msn.com",
      takenExams: 4,
      createdExams: 4,
      totalPoints: 4,
    },
    {
      id: 5,
      name: "Burnell",
      email: "mburnell4@marketwatch.com",
      takenExams: 5,
      createdExams: 5,
      totalPoints: 5,
    },
    {
      id: 6,
      name: "Goldis",
      email: "sgoldis5@devhub.com",
      takenExams: 6,
      createdExams: 6,
      totalPoints: 6,
    },
    {
      id: 7,
      name: "Brew",
      email: "abrew6@e-recht24.de",
      takenExams: 7,
      createdExams: 7,
      totalPoints: 7,
    },
    {
      id: 8,
      name: "Cromblehome",
      email: "scromblehome7@netvibes.com",
      takenExams: 8,
      createdExams: 8,
      totalPoints: 8,
    },
    {
      id: 9,
      name: "Beauchop",
      email: "ebeauchop8@home.pl",
      takenExams: 9,
      createdExams: 9,
      totalPoints: 9,
    },
    {
      id: 10,
      name: "Dugood",
      email: "hdugood9@furl.net",
      takenExams: 20,
      createdExams: 10,
      totalPoints: 10,
    },
    {
      id: 11,
      name: "Skelhorn",
      email: "cskelhorna@spotify.com",
      takenExams: 11,
      createdExams: 17,
      totalPoints: 11,
    },
    {
      id: 12,
      name: "alieldeba",
      email: "bbracherb@vk.com",
      takenExams: 12,
      createdExams: 12,
      totalPoints: 12,
    },
    {
      id: 13,
      name: "Hay",
      email: "khayc@ycombinator.com",
      takenExams: 13,
      createdExams: 13,
      totalPoints: 13,
    },
    {
      id: 14,
      name: "McIlwaine",
      email: "cmcilwained@privacy.gov.au",
      takenExams: 14,
      createdExams: 14,
      totalPoints: 14,
    },
    {
      id: 15,
      name: "alieldeba",
      email: "bingmane@about.com",
      takenExams: 15,
      createdExams: 15,
      totalPoints: 15,
    },
    {
      id: 16,
      name: "Corriea",
      email: "bcorrieaf@army.mil",
      takenExams: 16,
      createdExams: 16,
      totalPoints: 16,
    },
    {
      id: 17,
      name: "Rizzotto",
      email: "mrizzottog@umich.edu",
      takenExams: 17,
      createdExams: 17,
      totalPoints: 17,
    },
    {
      id: 18,
      name: "alieldeba",
      email: "rsurmanh@macromedia.com",
      takenExams: 18,
      createdExams: 18,
      totalPoints: 18,
    },
    {
      id: 19,
      name: "Linkleter",
      email: "ilinkleteri@ucoz.com",
      takenExams: 19,
      createdExams: 19,
      totalPoints: 19,
    },
    {
      id: 20,
      name: "Rapelli",
      email: "arapellij@unesco.org",
      takenExams: 20,
      createdExams: 20,
      totalPoints: 20,
    },
  ];

  return (
    <main>
      <div className="relative max-w-2xl mx-auto sm:text-center">
        <div className="relative z-10">
          <h3 className="text-3xl font-semibold sm:text-4xl">Leaderboard</h3>
          <p className="mt-3 text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            congue, nisl eget molestie varius, enim ex faucibus purus.
          </p>
        </div>
      </div>
      <div className="mt-12 border rounded p-5">
        <Table>
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">id</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="text-center">Created Exams</TableHead>
              <TableHead className="text-center">Taken Exams</TableHead>
              <TableHead className="text-center">Total Points</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users
              .sort((a, b) => b.totalPoints - a.totalPoints)
              .map((user: User, idx: number) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium text-center">
                    {idx + 1}
                  </TableCell>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell className="text-center">
                    {user.createdExams}
                  </TableCell>
                  <TableCell className="text-center">
                    {user.takenExams}
                  </TableCell>
                  <TableCell className="text-center">
                    {user.totalPoints}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </main>
  );
}

export default page;
