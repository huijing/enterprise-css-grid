import Option1 from "../components/Option1/Option1";
import Option2 from "../components/Option2/Option2";
import Option3 from "../components/Option3/Option3";

export default function Basic() {
  return (
    <>
      <main style={{ paddingTop: "2em", paddingBottom: "2em" }}>
        <Option1 />

        <hr style={{ margin: "3em", border: "1px solid" }} />

        <Option2 />

        <hr style={{ margin: "3em", border: "1px solid" }} />

        <Option3 />
      </main>
    </>
  );
}
