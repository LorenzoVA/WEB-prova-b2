import './globals.css';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Bem Vindo a Página Inicial</h1>
      <Link className={buttonVariants({ variant: 'outline' })} href={'./login'}>
        Clique Aqui Para Fazer Login
      </Link>
      <Link
        className={buttonVariants({ variant: 'outline' })}
        href={'./registro'}
      >
        CLique aqui para se registrar
      </Link>
    </main>
  );
}
