interface TextLink {
  content: string;
  href: string;
}

interface HeroProps {
  heading: string;
  image: {
    src: string;
    alt: string;
  };
  navLinks: TextLink[];
  subhead: string;
  details1: string;
  details2: string;
}

export default function TwHero({
  heading,
  image,
  navLinks,
  subhead,
  details1,
  details2
}: HeroProps) {
  return (
    <>
      <section className="tw-grid xs:tw-grid-cols-4 sm:tw-grid-cols-8 md:tw-grid-cols-12 xs:tw-gap-3 lg:tw-gap-4 xs:tw-mx-3 sm:tw-mx-[30px] md:tw-mx-[50px] lg:tw-mx-[90px] xl:tw-mx-[180px] md:tw-grid-rows-[var(--step-5)_var(--step-5)_55vh_repeat(3,_min-content)] tw-transform-style-3d">
        <h1 className="tw-font-cinzeldeco tw-text-step-5 tw-leading-[1.2] tw-text-center tw-txt-shadow tw-col-span-full lg:tw-col-start-2 lg:tw-col-end-[-2] tw-row-start-1 tw-row-end-3">
          {heading}
        </h1>
        <img
          className="tw-img-mask tw-translate-z tw-col-span-full lg:tw-col-start-2 lg:tw-col-end-[-2] tw-row-start-2 tw-row-end-4"
          src={image.src}
          alt={image.alt}
        />
        {navLinks.map((navItem) => (
          <a
            className="tw-font-cinzel tw-text-step-3 tw-leading-[1.1] tw-text-center tw-txt-shadow tw-align-center tw-transition-transform tw-col-span-full md:tw-col-span-4 hover:tw-scale-[1.05] first-of-type:maxSm:tw-col-start-1 first-of-type:maxSm:tw-col-end-3 last-of-type:maxSm:tw-col-start-3 last-of-type:maxSm:tw-col-end-5 first-of-type:btwSmMd:tw-col-start-1 first-of-type:btwSmMd:tw-col-end-5 last-of-type:btwSmMd:tw-col-start-5 last-of-type:btwSmMd:tw-col-end-9 maxMd:tw-mb-[0.5em] first-of-type:maxMd:tw-text-left last-of-type:maxMd:tw-text-right"
            href={navItem.href}
            key={navItem.content}
          >
            {navItem.content}
          </a>
        ))}
        <p className="tw-text-step-1 tw-col-span-full sm:tw-col-span-5 sm:tw-pt-[2em] sm:tw-pb-[1em] md:tw-col-span-6">
          {subhead}
        </p>
        <p className="tw-col-span-full sm:tw-col-start-4 sm:tw-col-end-9 md:tw-col-start-5 md:tw-col-end-9">
          {details1}
        </p>
        <p className="tw-col-span-full sm:tw-col-start-4 sm:tw-col-end-9 md:tw-col-start-9 md:tw-col-end-13">
          {details2}
        </p>
      </section>
    </>
  );
}
