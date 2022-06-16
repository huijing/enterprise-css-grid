import ComponentStyles from "../components/ComponentStyles/ComponentStyles";
import WrapperStyles from "../components/WrapperStyles/WrapperStyles";
import TailwindStyles from "../components/TailwindStyles/TailwindStyles";

import data from "../data.json";

export default function Demo() {
  return (
    <>
      <main>
        <ComponentStyles
          heading={data.heading}
          image={data.image}
          navLinks={data.navLinks}
          subhead={data.subhead}
          details1={data.details1}
          details2={data.details2}
        />

        <hr style={{ margin: "3em", border: "1px solid" }} />

        <WrapperStyles
          heading={data.heading}
          image={data.image}
          navLinks={data.navLinks}
          subhead={data.subhead}
          details1={data.details1}
          details2={data.details2}
        />

        <hr style={{ margin: "3em", border: "1px solid" }} />

        <TailwindStyles
          heading={data.heading}
          image={data.image}
          navLinks={data.navLinks}
          subhead={data.subhead}
          details1={data.details1}
          details2={data.details2}
        />
      </main>
    </>
  );
}
