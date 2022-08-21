import cn from "classnames";
import styles from "./ComponentStyles.module.scss";

interface TextLink {
  content: string;
  href: string;
}

interface ComponentStylesProps {
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

export default function ComponentStyles({
  heading,
  image,
  navLinks,
  subhead,
  details1,
  details2
}: ComponentStylesProps) {
  return (
    <>
      <section className={cn("l-grid", styles.section)}>
        <h1 className={cn("l-grid__item--full", styles.heading)}>{heading}</h1>
        <img
          className={cn("l-grid__item--full", styles.image)}
          src={image.src}
          alt={image.alt}
        />
        {navLinks.map((navItem) => (
          <a
            className={cn("l-grid__item--third", styles.link)}
            href={navItem.href}
            key={navItem.content}
          >
            {navItem.content}
          </a>
        ))}
        <p className={styles.subhead}>{subhead}</p>
        <p className={styles.details1}>{details1}</p>
        <p className={styles.details2}>{details2}</p>
      </section>
    </>
  );
}
