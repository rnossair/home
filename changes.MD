# Changes

- Created a new `remaster` folder as a standalone Next.js app.
- Rebuilt the portfolio as a single-page Next.js site with sections for hero, about, experience, projects, skills, and contact.
- Centralized the site content in `data/site.js` so text, links, and section data are easy to update.
- Added a sticky header and a new visual design with gradients, glass panels, and responsive layout styles.
- Copied the existing profile image, company logos, and resume PDF into `remaster/public` so the new app can serve them natively.
- Replaced the old React Router / CRA structure with Next.js app router files in `app/layout.js` and `app/page.js`.
- Added GitHub project loading on the projects section using client-side fetching.
- Verified the rebuild with `npm run build`, which completed successfully.
