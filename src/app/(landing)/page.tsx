import clsx from "clsx";
import { type Metadata } from "next";
import { Chakra_Petch } from "next/font/google";
import Image from "next/image";
import { FaDiscord } from "react-icons/fa";
import { GiVerticalBanner } from "react-icons/gi";

const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: "700",
});

export default function Page() {
  return (
    <div className="flex flex-grow items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Image
          className="rounded-full border-2 border-gray-50 duration-300 hover:cursor-pointer hover:border-gray-50/5 hover:shadow-[0_5px_60px_-15px_rgba(255,255,255,0.5)]"
          src="/images/pfp.png"
          alt="Logo"
          width={128}
          height={128}
        />

        <div
          className={clsx(
            "text-4xl font-bold tracking-wider",
            chakraPetch.className
          )}
        >
          OVERTURN
        </div>

        <div className="flex items-center space-x-4">
          <a href="/discord" target="_blank">
            <FaDiscord
              aria-label="Discord"
              className="h-7 w-7 duration-150 hover:scale-105"
            />
          </a>

          <a
            href="https://www.bungie.net/en/ClanV2?groupid=1942977"
            target="_blank"
          >
            <GiVerticalBanner
              aria-label="Clan"
              className="h-7 w-7 duration-150 hover:scale-105"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Overturn",
};
