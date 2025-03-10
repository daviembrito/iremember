import { Button } from '../components/Button';

export function Home() {
  return (
    <div className='flex flex-col items-center justify-center gap-80 min-h-screen'>
      <header>
        <h1 className='font-extrabold text-5xl'>iRemember</h1>
      </header>

      <main>
        <Button>Play</Button>
      </main>

      <footer>
        <p className='italic'>Made by Davi Brito</p>
      </footer>
    </div>
  );
}
