import Grid from "../Grid/Grid";
import Col from "../Col/Col";
import styles from "./WrapperStyles.module.scss";

interface TextLink {
  content: string;
  href: string;
}

interface WrapperStylesProps {
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

export default function WrapperStyles({
  heading,
  image,
  navLinks,
  subhead,
  details1,
  details2
}: WrapperStylesProps) {
  return (
    <>
      <Grid className={styles.section} tag="section">
        <Col className={styles.heading} colWidth="full" tag="h1">
          {heading}
        </Col>
        <Col className={styles.image} colWidth="full">
          <img src={image.src} alt={image.alt} />
        </Col>
        {navLinks.map((navItem) => (
          <Col
            className={styles.link}
            colWidth="third"
            tag="a"
            href={navItem.href}
            key={navItem.content}
          >
            {navItem.content}
          </Col>
        ))}
        <Col className={styles.subhead} colWidth="full" tag="p">
          {subhead}
        </Col>
        <Col className={styles.details1} colWidth="full" tag="p">
          {details1}
        </Col>
        <Col className={styles.details2} colWidth="full" tag="p">
          {details2}
        </Col>
      </Grid>
    </>
  );
}
