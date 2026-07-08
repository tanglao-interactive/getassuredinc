# Get Assured Inc. Page Background Image Checklist

Reference style: bright real estate finance hero image with a miniature house, white desktop, mortgage documents or related page objects, soft green bokeh, shallow depth of field, and burgundy/rose accents.

Implementation rule: each visible page gets a distinct generated background image. Generated images avoid embedded readable text/logos so page titles remain accessible HTML text.

## Requested Backgrounds

- [x] Homepage
  - Page: `/`
  - Asset: `src/images/backgrounds/home.png`
  - CSS hook: `.hero--home`

- [x] Apply Now
  - Page: `/apply-now/`
  - Asset: `src/images/backgrounds/apply-now.png`
  - CSS hook: `.page-hero--apply`

- [x] Inquire Now
  - Page: `/inquire-now/`
  - Asset: `src/images/backgrounds/inquire-now.png`
  - CSS hook: `.page-hero--inquire`

- [x] Resources
  - Page: `/resources/`
  - Asset: `src/images/backgrounds/resources.png`
  - CSS hook: `.page-hero--resources`

- [x] About Us
  - Page: `/about_us/`
  - Asset: `src/images/backgrounds/about-us.png`
  - CSS hook: `.page-hero--about`

- [x] Agents
  - Page: `/agents/`
  - Asset: `src/images/backgrounds/agents.png`
  - CSS hook: `.page-hero--agents`

- [x] Contact Us
  - Page: `/contact_us/`
  - Asset: `src/images/backgrounds/contact-us.png`
  - CSS hook: `.page-hero--contact`

- [x] Helpful Links
  - Page: `/page/links/`
  - Asset: `src/images/backgrounds/links.png`
  - CSS hook: `.page-hero--links`

- [x] News
  - Page: `/page/news/`
  - Asset: `src/images/backgrounds/news.png`
  - CSS hook: `.page-hero--news`

- [x] F.A.Q
  - Page: `/page/faq/`
  - Asset: `src/images/backgrounds/faq.png`
  - CSS hook: `.page-hero--faq`

- [x] Blog
  - Page: `/page/blog/`
  - Asset: `src/images/backgrounds/blog.png`
  - CSS hook: `.page-hero--blog`

- [x] Forms
  - Page: `/page/forms/`
  - Asset: `src/images/backgrounds/forms.png`
  - CSS hook: `.page-hero--forms`

## Notes

- [x] The hero CSS applies a light overlay so page copy remains readable over each image.
- [x] Images were copied into the project under `src/images/backgrounds/` and are included by the existing Eleventy passthrough copy for `src/images`.
- [x] `src/images/backgrounds/resource-detail.png` is retained as an extra generated fallback image, but it is not assigned to a page now that each resource child page has its own background.
