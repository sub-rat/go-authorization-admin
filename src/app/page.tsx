import { Card, Title, Text } from '@tremor/react';
import Search from './search';
import UsersTable from './table';
import { UserService, models_User } from '@/services/generated/requests';


export default async function IndexPage({
  // searchParams
}: {
  // searchParams: { q: string };
}) {
  // const search = searchParams.q ?? '';
  // const users = (await UserService.getApiUsers()).data;

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Dashboard</Title>
      <Text>Welcome</Text>
      <Search />
      <Card className="mt-6">
        {/* <UsersTable users={users} /> */}
      </Card>
    </main>
  );
}
