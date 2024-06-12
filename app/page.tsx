import { auth, currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = auth();
  console.log(userId);
  return <main>Landing Page</main>;
}
