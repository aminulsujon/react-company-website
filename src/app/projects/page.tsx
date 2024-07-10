import Image from "next/image";
import Link from "next/link";
import Bottomnav from './../components/Bottomnav';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="text-green-700 text-4xl pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="/"
            target="_self"
            rel="noopener noreferrer"
          >
            THIRD {" "}
            <Image
              src="square-gear.svg"
              alt="square gear"
              className="dark:invert animate-spin"
              width={50}
              height={12}
              priority
            /> GEAR
          </a>
        </div>
        <p className="text-green-700 fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            Authorized&nbsp;
          <code className="font-mono font-bold">System Integrator</code>
        </p>
      </div>

      <div className="relative z-[-1] sm:flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/square-gear.svg"
          alt="square gear"
          width={180}
          height={37}
          priority
        />
        <div className="ml-4">
          <h2 className="font-bold mb-2">Our Projects</h2>
            <div className="mb-2">
            <Image
                className="float-left mr-2 relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/a.png"
                alt="square gear"
                width={30}
                height={20}
                priority
              />
              Akij Ceramic Automation Systems
              </div>
            <div className="mb-2">
            <Image
                className="float-left mr-2 relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/w.png"
                alt="square gear"
                width={30}
                height={20}
                priority
              />
              Walton Industrial Automation Project</div>
            <div className="mb-2">
            <Image
                className="float-left mr-2 relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/s.png"
                alt="square gear"
                width={30}
                height={20}
                priority
              />
              Square Industrial Control</div>
            <div className="mb-2">
            <Image
                className="float-left mr-2 relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/m.png"
                alt="square gear"
                width={30}
                height={20}
                priority
              />
              Meghna Routing Automation</div>
        </div>
      </div>

      <Bottomnav />
    </main>
  );
}
