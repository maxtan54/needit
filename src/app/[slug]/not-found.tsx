import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-50 px-4 text-center">
      <Image
        src="/logo.png"
        alt="Logo"
        width={80}
        height={80}
        className="mb-8 rounded-xl"
      />
      <h1 className="text-2xl font-bold text-neutral-900 mb-2">
        Menu not available
      </h1>
      <p className="text-neutral-500 mb-8 max-w-sm">
        This menu link is no longer active or does not exist. Please ask a staff
        member for assistance.
      </p>
      <Link
        href="/"
        className="text-sm text-neutral-400 hover:text-neutral-600 underline underline-offset-4 transition-colors"
      >
        Learn about NeedIt
      </Link>
    </div>
  );
}
