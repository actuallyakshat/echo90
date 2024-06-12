import { currentUser } from "@clerk/nextjs/server";
import LandingPage from "./_components/LandingButton";

export default async function Home() {
  const userDetails = await currentUser();
  return (
    <main className="h-full min-h-screen bg-background pt-16">
      <section className="h-full w-full pt-28">
        <div className="flex h-full w-full flex-col items-center justify-center gap-6">
          <h1 className="text-6xl font-extrabold">
            Reflect. <span className="mr-2 text-primary">Grow.</span>
            Thrive.
          </h1>
          <h4 className="w-full max-w-lg text-center text-lg font-semibold leading-normal tracking-wide text-foreground-muted">
            <span className="font-bold text-primary">Echo90</span> is a
            journaling app offering diverse prompts to inspire reflection,
            introspection, and personal growth.
          </h4>
          <LandingPage />
        </div>
      </section>
    </main>
  );
}
