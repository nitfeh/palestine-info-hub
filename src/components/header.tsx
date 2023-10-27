import Link from 'next/link';

import { Bars3Icon } from '@heroicons/react/24/outline';

import Banner from '@/components/banner';

const navigation = [{ name: 'Gaza 2023', href: '/gaza-2023' }];

export default function Header() {
  const reporting = true;

  return (
    <header className="absolute bg-white/10 backdrop-blur inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Palestine Info Hub</span>
            <div className="relative font-mono font-medium leading-6 text-gray-900">
              $PalestineInfoHub
              {reporting && (
                <div className="absolute -right-2 -top-1 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </div>
              )}
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
      </nav>
      <Banner
        title="War on Gaza"
        text="We are providing real-time updates on Israeli Aggression Against Gaza Strip 2023."
      />
    </header>
  );
}
