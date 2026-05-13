import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="flex flex-col mx-auto px-4 py-2 items-center mt-60">
        <h1 className ="mb-2 text-red-200 font-bold text-4xl">
          FocusBrew! Seu App assistente para estudos Pomodoro!
        </h1>
        <p className ="mb-7 text-2xl">
          Personalizado especialmente para você! :)
        </p>
        <Button className="text-2xl py-6 px-4">
          Comece sua jornada aqui
        </Button>
      </section>
    </main>
  );
}