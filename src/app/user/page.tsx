import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { SectionHeader } from "@/components/SectionHeader";
import { FadeIn } from "@/components/FadeIn";

interface User {
  name: string;
  username: string;
  company: { name: string };
  email: string;
}

async function getUsers(): Promise<User[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error(`Failed to fetch users: ${response.status}`);
  }
  return response.json();
}

export default async function UserPage() {
  const users = await getUsers();

  return (
    <section className="w-full py-24 bg-white">
      <div className="container px-4 md:px-8 max-w-6xl mx-auto">
        <FadeIn>
          <SectionHeader
            title="Users Table"
            subtitle="A server-side fetched list of users."
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="bg-white rounded-4xl border border-gray-100 shadow-xl shadow-gray-100/50 p-4 md:p-8 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="px-4 text-brand-purple font-bold text-xs uppercase tracking-wider">
                    Name
                  </TableHead>
                  <TableHead className="px-4 text-brand-purple font-bold text-xs uppercase tracking-wider">
                    Username
                  </TableHead>
                  <TableHead className="px-4 text-brand-purple font-bold text-xs uppercase tracking-wider">
                    Email
                  </TableHead>
                  <TableHead className="px-4 text-brand-purple font-bold text-xs uppercase tracking-wider">
                    Company Name
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.email} className="hover:bg-primary-50/50">
                    <TableCell className="px-4 font-bold text-black">
                      {user.name}
                    </TableCell>
                    <TableCell className="px-4 font-medium text-gray-600">
                      {user.username}
                    </TableCell>
                    <TableCell className="px-4 text-gray-500">
                      {user.email}
                    </TableCell>
                    <TableCell className="px-4 text-gray-500">
                      {user.company.name}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
