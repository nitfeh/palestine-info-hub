'use client';

import Image from 'next/image';

export default function Gaza2023() {
  const mainStats = [
    { name: 'martyrs', count: 7028 },
    { name: 'injuries', count: 17439 },
  ];

  const warStart = new Date('2023/10/07').getTime();
  const today = new Date().getTime();
  const timeDifference = today - warStart;
  const daysPassed = Math.round(timeDifference / 1000 / 60 / 60 / 24);

  return (
    <>
      <div className="relative isolate min-h-screen w-full overflow-hidden">
        <div className="absolute z-50 w-full text-white flex justify-center h-full top-1/3">
          <h1 className="text-2xl md:text-8xl font-extrabold capitalize drop-shadow">
            {daysPassed} days of war crimes
          </h1>
        </div>

        <dl className="absolute w-full bottom-20 z-50 mt-5 grid grid-cols-1 gap-5 sm:gap-24 sm:grid-cols-2 px-24">
          {mainStats.map((stat) => (
            <div
              key={stat.name}
              className="overflow-hidden rounded bg-white px-4 py-5 shadow sm:p-8"
            >
              <dt className="truncate text-sm sm:text-base font-medium text-slate-500 capitalize">
                {stat.name}
              </dt>
              <dd className="mt-1 text-3xl sm:text-5xl font-semibold tracking-tight text-slate-800">
                {stat.count.toLocaleString()}+
              </dd>
            </div>
          ))}
        </dl>

        <div className="bg-slate-900/50 w-full h-full inset-0 absolute top-0" />
        <Image
          src="/gaza-2.jpg"
          alt=""
          width="2000"
          height="2000"
          className="absolute inset-0 saturate-[1.25] -z-10 h-full w-full object-cover object-top"
        />
        <div className="bg-slate-950/40 rounded-sm py-2 px-3 text-white/60 text-xs backdrop-blur absolute bottom-0">
          Ahmed Zakot / SOPA Images/ Sipa USA via Reuters Connect
        </div>
      </div>
    </>
  );
}
