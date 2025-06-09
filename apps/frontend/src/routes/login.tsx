import { createFileRoute } from '@tanstack/react-router';
import { LoginForm } from '../features/login/components';
import { Separator } from '@myorg/ui';

export const Route = createFileRoute('/login')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="flex flex-col px-xxxl py-xl gap-md bg-surface rounded-sm w-[400px]">
        <p className="text-lg font-medium">Войти</p>

        <Separator orientation="horizontal" />
        <LoginForm />
      </div>
    </div>
  );
}
