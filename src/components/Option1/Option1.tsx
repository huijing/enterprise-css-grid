export default function Option1() {
  return (
    <section className="l-grid">
      <p className="l-grid__item--full">Option 1: Just write the CSS</p>
      <p className="l-grid__item--half">
        You set the CSS for the grid yourself
      </p>
      <p className="l-grid__item--half">
        Free to customise the markup and styling
      </p>
      <p className="l-grid__item--third">
        CSS conventions based on existing principles
      </p>
      <p className="l-grid__item--third">For example, this example uses BEM</p>
      <p className="l-grid__item--third">
        Most flexible also means people can choose not to follow convention
      </p>
      <p className="l-grid__item--quarter">
        You could probably use linting and other checks to enforce convention
      </p>
      <p className="l-grid__item--quarter">
        Clear documentation, regularly maintained, proper onboarding
      </p>
      <p className="l-grid__item--quarter">
        But this makes it most flexible building any layout within the grid
        system
      </p>
      <p className="l-grid__item--quarter">You can see this in the next demo</p>
    </section>
  );
}
