import { Metadata } from 'next';
import { buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Fazer Login',
};

export default function Login() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-6 text-center">Login</h1>
        <Input type="text" placeholder="Usuário" />
        <Input className="mt-4" type="password" placeholder="Senha" />
        <Link
          href="/dashboard"
          className={`${buttonVariants({
            variant: 'outline',
          })} mt-4 w-full block`}
        >
          Login
        </Link>
        <div className="mt-4 text-sm flex justify-between">
          <Link
            href="/registro"
            className={`${buttonVariants({ variant: 'outline' })} w-48`}
          >
            Registre-se
          </Link>
          <Link
            href="/recover"
            className={`${buttonVariants({ variant: 'outline' })} w-48`}
          >
            Esqueceu a senha
          </Link>
        </div>
        <div className="mt-4 text-sm">
          <Link
            href="/"
            className={`${buttonVariants({ variant: 'outline' })} w-full`}
          >
            Voltar
          </Link>
        </div>
      </div>
    </main>
  );
}
