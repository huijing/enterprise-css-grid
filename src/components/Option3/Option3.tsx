export default function Option3() {
  return (
    <section className="tw-grid xs:tw-grid-cols-4 sm:tw-grid-cols-8 md:tw-grid-cols-12 xs:tw-gap-3 lg:tw-gap-4 xs:tw-mx-3 sm:tw-mx-[30px] md:tw-mx-[50px] lg:tw-mx-[90px] xl:tw-mx-[180px]">
      <p className="tw-col-span-full">Option 3: Use Tailwind classes</p>
      <p className="tw-col-span-full md:tw-col-span-6">Well, this is spicy</p>
      <p className="tw-col-span-full md:tw-col-span-6">
        FWIW, Tailwind has managed to support grid fairly well in this latest
        version
      </p>
      <p className="tw-col-span-full md:tw-col-span-4">
        You will have to learn the tailwind classes to use them correctly
      </p>
      <p className="tw-col-span-full md:tw-col-span-4">
        This basic example is able to match the previous 2 options
      </p>
      <p className="tw-col-span-full md:tw-col-span-4">
        Tailwind comes out the box with opinionated defaults
      </p>
      <p className="tw-col-span-full md:tw-col-span-3">
        But they do allow you to customize your own if theirs doesn't fit you
      </p>
      <p className="tw-col-span-full md:tw-col-span-3">
        At some point, there will be bigger issues to think about
      </p>
      <p className="tw-col-span-full md:tw-col-span-3">
        Does it make sense to abstract constantly repeated patterns into
        something much DRY-er?
      </p>
      <p className="tw-col-span-full md:tw-col-span-3">
        There also remains the issue of code maintenance, which all 3 options
        still have
      </p>
    </section>
  );
}
