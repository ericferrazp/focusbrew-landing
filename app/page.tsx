import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/navbar"


export default function Home() {
  return (
    <main className="min-h-full text-white">
      <Navbar />

      <section className="relative flex flex-col items-center py-50 w-full border-b-4 border-emerald-500">
        <div
         className='absolute inset-0 -z-10'
      style={{
      backgroundImage: "url('/pomodoro.avif')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      filter: "blur(5px)",
      }}
      />

      <div className="max-w-3xl mx-auto px-4 flex flex-col items-center">
        <h1 className ="mb-2 text-emerald-500 font-bold text-4xl rounded-xl border border-zinc-600 p-3 bg-zinc-900">
          FocusBrew! Your assistant app to Podomoro!
        </h1>
         <p className =" text-2xl text-center">
          Customized specially for you
        </p>
        
        <Button className="text-2xl py-6 px-4">
          Begin your journey here
        </Button>
        </div>
      </section>

    {/*Botões das primeiras grids*/}
      <section>
      <h2 className="text-center mt-10 font-bold text-3xl mx-auto max-w-2xl mb-3">
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

  <section className='flex flex-col text-center mx-auto max-w-3xl mb-1'>
      <h2 className='mt-5'> Simple, transparent pricing</h2>
      <p className='mb-7'>And very affordable</p>
    <div className='grid grid-cols-2 gap-6 mb-3' >
      <div className='bg-zinc-800 rounded-xl border border-zinc-600 p-6'>
        <h3> Freemium </h3>
        <p> 0,00$</p>
        <p className='mb-2'> Limited performance... </p>
        <Button className='text-1xl py-6 px-4 mx-auto'> Buy now </Button>
      </div>

      <div className='bg-emerald-800 rounded-xl border-2 border-emerald-500 p-6'>
        <h3> Pro Pass </h3>
        <p> 20,00$ </p>
        <p className='mb-2'> MAXIMUM performance! </p>
        <Button className='text-1xl py-6 px-4 mx-auto'> Buy now </Button>
      </div>
    </div>

  </section>









  <footer className='text-center mx-auto'>
    <p className='text-sm text-emerald-500'>© 2026 FocusBrew. All rights reserved.</p>
    <p className='text-sm'> Link1 Link2 Link3</p>
  </footer>

    </main>
  );
}