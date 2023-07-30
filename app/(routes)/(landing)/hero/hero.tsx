import Image from "next/image";
import heroBg from "@/public/hero-bg.webp";
import voidlabsLogo from "@/public/voidlabs-logo.svg";

export default function Hero() {
  return (
    <section id="home" className="flex flex-col min-h-screen items-center p-6 relative">
      <Image
        src={heroBg}
        alt="heroBg"
        className="object-cover -z-10"
        placeholder="blur"
        priority
        fill
        quality={100}
        sizes="100vw"
      />
      <article className="flex flex-col min-h-screen gap-4 items-center justify-center text-center">
        <h1 className="text-xl font-semibold text-white">Welcome to</h1>
        <Image
          src={voidlabsLogo}
          alt="voidlabs logo"
          priority
        />
        <p className="text-xl text-white">
          where the full potential of blockchain data is unleashed
        </p>
      </article>
    </section>
  );
}
