import Grid from "../Grid/Grid";
import Col from "../Col/Col";

export default function Option2() {
  return (
    <Grid className="s-hero" tag="section">
      <Col className="s-hero__item" colWidth="full">
        Option 2: Grid and Col wrappers
      </Col>
      <Col className="s-hero__item" colWidth="half">
        It is still CSS though
      </Col>
      <Col className="s-hero__item" colWidth="half">
        Very similar to option 1, slightly more opinionated
      </Col>
      <Col className="s-hero__item" colWidth="third">
        As for media queries, if you want special placement
      </Col>
      <Col className="s-hero__item" colWidth="third">
        use your own custom CSS class however you like
      </Col>
      <Col className="s-hero__item" colWidth="third">
        (๑•̀ㅂ•́)و✧ CSS all the layout things
      </Col>
      <Col className="s-hero__item" colWidth="quarter">
        For now, we will provide pre-written styles
      </Col>
      <Col className="s-hero__item" colWidth="quarter">
        for full, half, third and quarter
      </Col>
      <Col className="s-hero__item" colWidth="quarter">
        for 1-col, 2-col, 3-col and 4-col
      </Col>
      <Col className="s-hero__item" colWidth="quarter">
        Would be good if this covers 80% of use cases
      </Col>
    </Grid>
  );
}
