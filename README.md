# 3 options for implementing CSS grid in a React application

_I believe these approaches can also be ported to other frontend frameworks_

## Option 1: Component styles (CSS modules approach)

This approach scopes the styles specific to the component in the component folder itself. You are essentially writing vanilla CSS and free to organise your CSS in any manner of your choosing. Users have full control over the set up of the grid and item placement.

## Option 2: Grid and Col wrapper components

This approach introduces 2 layout wrapper components, 1 for the grid container and 1 for the grid item. It provides a more controlled grid setup by allowing users to pass in grid-related options as props to the respective components.

## Option 3: Styling with Tailwind classes

This approach uses the grid-related classes provided by Tailwind for the grid implementation. Users set up the grid using the pre-defined classes Tailwind provides.

## Commentary

There are clearly pros and cons to all 3 options. Which means that there is not 1 single “correct” approach to do this. What is more important during the assessment process is to ask the following questions:

- Are there preferred technologies used within the organisation?
- How is big is your application and how is it structured?
- Who is responsible for the maintenance and development of new components or pages on the application?
  - Is it a small team of full-time developers overseeing the entire project?
  - Is it numerous teams responsible for their own respective set of components and pages?
  - Are there cases where code is contributed by new developers often?
  - What is the overall CSS skill level of the developers contributing to the codebase?

## Local development

If you are interested in playing around with the code yourself, feel free to fork the repository then run the following steps:

1. `git clone git@github.com:YOUR_USER_NAME/enterprise-css-grid.git`
2. `cd enterprise-css-grid`
3. `yarn install`
4. `yarn start`
5. In a separate terminal window, `npx tailwindcss -i ./src/stylesheets/tailwind.css -o ./public/output.css --watch` // this is to make sure the Tailwind output is compiled correctly

Unfortunately, you can't fork it directly on CodeSandbox because even though the original version is a CodeSandbox container, when you fork it, you end up with a client environment instead. You can preview the thing up there though.
