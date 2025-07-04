import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <main className="flex flex-col items-center justify-between w-full flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold">Welcome to CianCode Portfolio</h1>
          <p className="mt-3 text-2xl">This is a Next.js website.</p>
        </main>
    </div>
  );
}
