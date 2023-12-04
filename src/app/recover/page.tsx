import '../globals.css';
import { buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export default function Recover() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Recuperação de Senha</h1>
      <Input type="password" placeholder="Nova Senha" />
      <Input type="password" placeholder="Confirme sua Nova Senha" />
      <Link
        className={buttonVariants({ variant: 'outline' })}
        href={'../login'}
      >
        Redefinir a Senha
      </Link>
      <a href="../login">Voltar</a>
    </main>
  );
}
