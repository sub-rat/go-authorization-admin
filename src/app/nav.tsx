import Navbar from './navbar';
import { auth } from '@/auth';

export default async function Nav() {
  const session = await auth();
  let username = session?.user?.username;
  return <Navbar user={username} />;
}
