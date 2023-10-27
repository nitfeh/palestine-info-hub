import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  const nakbaDate = new Date('1948/05/15').getTime();
  const today = new Date().getTime();
  const timeDifference = today - nakbaDate;
  const yearsPassed = Math.round(timeDifference / 1000 / 60 / 60 / 24 / 365);

  return (
    <>
      <main className="relative isolate min-h-full">
        <Image
          src="/4042.jpg"
          alt=""
          width="2000"
          height="2000"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
        />
        <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
          <p className="text-base font-semibold leading-8 text-white">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Page Not Found
          </h1>
          <p className="mt-4 text-base text-white/70 hover:text-white sm:mt-6 drop-shadow">
            But don’t lose hope. Over the course of {yearsPassed} years, we
            certainly didn’t lose it.
          </p>
          <div className="mt-10 flex justify-center">
            <Link
              href="/"
              className="text-sm font-semibold leading-7 text-white"
            >
              <span aria-hidden="true">&larr;</span>{' '}
              <span className="hover:underline underline-offset-2">
                Back to home
              </span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
