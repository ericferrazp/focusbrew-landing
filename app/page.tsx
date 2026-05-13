import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="flex flex-col mx-auto px-4 py-2 items-center mt-60 border border-red-500 max-w-3xl">
        <h1 className ="mb-2 text-red-200 font-bold text-4xl">
          FocusBrew! Your assistant app to Podomoro!
        </h1>
        <p className ="mb-7 text-2xl">
          Customized specially for you! :)
        </p>
        <Button className="text-2xl py-6 px-4">
          Begin your journey here
        </Button>
      </section>

      <section>
      <h2 className="text-center mt-10 font-bold text-3xl border border-red-500 mx-auto max-w-2xl">
        Why FocusBrew?
      </h2>
      <div className= 'grid grid-cols-3 gap-6 border border-red-500 mx-auto max-w-5xl mt-3'>

        <div className='flex flex-col mx-auto'>
          <h3 className ='text-center'> Pomodoro Timer </h3>
          <p>Customizable focus sessions for deep work</p>
        </div>

        <div className='flex flex-col mx-auto'>
          
        </div>

        <div className='flex flex-col mx-auto'>
          a
        </div>

      </div>
      </section>

    </main>
  );
}