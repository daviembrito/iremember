import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

export function Home() {
  return (
    <div className='flex flex-col items-center justify-between min-h-screen'>
      <header className='mt-4'>
        <h1 className='font-extrabold text-6xl'>iRemember</h1>
      </header>

      <main>
        <Link to='/game'>
          <Button>Play</Button>
        </Link>
      </main>

      <footer className='mb-4'>
        <p className='italic'>Made by Davi Brito</p>
      </footer>
    </div>
  );
}
