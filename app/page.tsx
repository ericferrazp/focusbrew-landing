import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="flex flex-col mx-auto px-4 py-2 items-center mt-60 max-w-3xl">
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

    {/*Botões das primeiras grids*/}
      <section>
      <h2 className="text-center mt-10 font-bold text-3xl mx-auto max-w-2xl mb-7">
        Why FocusBrew?
      </h2>
      <div className= 'grid grid-cols-3 gap-6 mx-auto max-w-5xl mt-3 p-4'>

        <div className='flex flex-col mx-auto bg-zinc-800 rounded-xl border border-zinc-600 p-3'>
          <h3 className ='text-center'> Pomodoro Timer </h3>
          <p className='text-center'>Customizable focus sessions for deep work</p>
        </div>

        <div className='flex flex-col mx-auto bg-zinc-800 rounded-xl border border-zinc-600 p-3'>
          <h3 className='text-center'> Habit Tracking </h3>
          <p className='text-center'>Track your daily habits and build consistency</p>
        </div>

        <div className='flex flex-col mx-auto bg-zinc-800 rounded-xl border border-zinc-600 p-3'>
         <h3 className='text-center'> Progress Analytic</h3>
         <p className='text-center'>See your evolution over time with clear insights</p>
        </div>
      </div>
      </section>

      <section className='flex flex-col text-center mx-auto max-w-3xl'>
    <h2> Simple, transparent pricing</h2>
    <p>And very affordable</p>
    <div className='grid grid-cols-2 gap-6 ' >
      <div className='bg-zinc-800 rounded-xl border border-zinc-600 p-6'>
        <h3> Freemium </h3>
        <p> 0,00$</p>
        <p> Limited performance... </p>
        <Button className='text-1xl py-6 px-4 mx-auto'> Buy now </Button>
      </div>

      <div className='bg-emerald-800 rounded-xl border-2 border-emerald-500 p-6'>
        <h3> Pro Pass </h3>
        <p> 20,00$ </p>
        <p> MAXIMUM performance! </p>
        <Button className='text-1xl py-6 px-4 mx-auto'> Buy now </Button>
      </div>

    </div>

      </section>

    </main>
  );
}