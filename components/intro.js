import Image from "next/image"

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <a href="/">
        <div className="rdc-logo">
          <Image
            src="/rdc-logo-01.svg"
            width={125}
            height={125}
          />
        </div>
      </a>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        <a
          href="/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          home
        </a>{"\t "}
        <a
          href="/about"
          className="underline hover:text-success duration-200 transition-colors"
        >
          about
        </a>
      </h4>
    </section>
  );
}