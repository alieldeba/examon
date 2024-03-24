import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
    {
      id: 21,
      name: "Danielkiewicz",
      email: "sdanielkiewiczk@t-online.de",
      takenExams: 21,
      createdExams: 21,
      totalPoints: 21,
    },
    {
      id: 22,
      name: "Bourley",
      email: "abourleyl@noaa.gov",
      takenExams: 22,
      createdExams: 22,
      totalPoints: 22,
    },
    {
      id: 23,
      name: "Greenland",
      email: "mgreenlandm@shareasale.com",
      takenExams: 23,
      createdExams: 23,
      totalPoints: 23,
    },
    {
      id: 24,
      name: "Giuroni",
      email: "pgiuronin@microsoft.com",
      takenExams: 24,
      createdExams: 24,
      totalPoints: 2000,
    },
    {
      id: 25,
      name: "Christofides",
      email: "christofides@gmail.com",
      takenExams: 25,
      createdExams: 15,
      totalPoints: 25,
    },
    {
      id: 26,
      name: "Clunie",
      email: "clunie@gmail.com",
      takenExams: 26,
      createdExams: 26,
      totalPoints: 6630,
    },
    {
      id: 27,
      name: "Whightman",
      email: "swhightmanq@webs.com",
      takenExams: 27,
      createdExams: 27,
      totalPoints: 27,
    },
    {
      id: 28,
      name: "Whiteford",
      email: "lwhitefordr@narod.ru",
      takenExams: 28,
      createdExams: 28,
      totalPoints: 28,
    },
    {
      id: 29,
      name: "alieldeba",
      email: "rgutchers@foxnews.com",
      takenExams: 29,
      createdExams: 29,
      totalPoints: 29,
    },
    {
      id: 30,
      name: "Rapelli",
      email: "rapelli@gmail.com",
      takenExams: 30,
      createdExams: 30,
      totalPoints: 30,
    },
    {
      id: 31,
      name: "Bartlomiej",
      email: "mbartlomieju@icq.com",
      takenExams: 31,
      createdExams: 31,
      totalPoints: 31,
    },
    {
      id: 32,
      name: "Antognetti",
      email: "bantognettiv@bandcamp.com",
      takenExams: 32,
      createdExams: 32,
      totalPoints: 32,
    },
    {
      id: 33,
      name: "Ryder",
      email: "cryderw@answers.com",
      takenExams: 33,
      createdExams: 33,
      totalPoints: 33,
    },
    {
      id: 34,
      name: "Leifer",
      email: "leifer@gmail.com",
      takenExams: 34,
      createdExams: 34,
      totalPoints: 34,
    },
    {
      id: 35,
      name: "de Guerre",
      email: "pdeguerrey@netlog.com",
      takenExams: 35,
      createdExams: 10,
      totalPoints: 35,
    },
    {
      id: 36,
      name: "Alti",
      email: "alti@gmail.com",
      takenExams: 36,
      createdExams: 36,
      totalPoints: 36,
    },
    {
      id: 37,
      name: "Bickerdike",
      email: "abickerdike10@umich.edu",
      takenExams: 37,
      createdExams: 37,
      totalPoints: 37,
    },
    {
      id: 38,
      name: "Beese",
      email: "hbeese11@soup.io",
      takenExams: 38,
      createdExams: 38,
      totalPoints: 38,
    },
    {
      id: 39,
      name: "alieldeba",
      email: "tinnes12@goo.gl",
      takenExams: 39,
      createdExams: 39,
      totalPoints: 39,
    },
    {
      id: 40,
      name: "Adelsberg",
      email: "ladelsberg13@bizjournals.com",
      takenExams: 40,
      createdExams: 40,
      totalPoints: 40,
    },
    {
      id: 41,
      name: "mohammed",
      email: "mohammed@gmail.com",
      takenExams: 41,
      createdExams: 41,
      totalPoints: 41,
    },
    {
      id: 42,
      name: "Stellino",
      email: "mstellino15@woothemes.com",
      takenExams: 42,
      createdExams: 42,
      totalPoints: 5180,
    },
    {
      id: 43,
      name: "Renzo",
      email: "arenzo16@loc.gov",
      takenExams: 43,
      createdExams: 43,
      totalPoints: 2800,
    },
    {
      id: 44,
      name: "Pearton",
      email: "pearton@gmail.com",
      takenExams: 44,
      createdExams: 44,
      totalPoints: 44,
    },
    {
      id: 45,
      name: "Martino",
      email: "lmartino18@huffingtonpost.com",
      takenExams: 45,
      createdExams: 22,
      totalPoints: 3860,
    },
    {
      id: 46,
      name: "Pincott",
      email: "apincott19@php.net",
      takenExams: 46,
      createdExams: 46,
      totalPoints: 46,
    },
    {
      id: 47,
      name: "alieldeba",
      email: "lfollitt1a@house.gov",
      takenExams: 47,
      createdExams: 47,
      totalPoints: 47,
    },
    {
      id: 48,
      name: "Honywill",
      email: "thonywill1b@skyrock.com",
      takenExams: 1,
      createdExams: 48,
      totalPoints: 48,
    },
    {
      id: 49,
      name: "Higbin",
      email: "fhigbin1c@liveinternet.ru",
      takenExams: 49,
      createdExams: 12,
      totalPoints: 49,
    },
    {
      id: 50,
      name: "Combes",
      email: "bcombes1d@shinystat.com",
      takenExams: 50,
      createdExams: 50,
      totalPoints: 50,
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
