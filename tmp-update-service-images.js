const fs = require('fs');
const path = require('path');

const base = 'c:/shahmeer/Work/docto-suha-new/app/services';
const slugs = [
  'custom-web-development',
  'enterprise-software-development',
  'graphic-design',
  'mvp-development',
  'ppc',
  'responsive-web-design',
  'saas-development',
  'seo',
  'social-media-marketing',
  'ui-ux-design',
  'web-portal-development',
];

for (const slug of slugs) {
  const file = path.join(base, slug, 'page.jsx');
  if (!fs.existsSync(file)) {
    console.log('missing', file);
    continue;
  }
  let c = fs.readFileSync(file, 'utf8');
  c = c.replace(/heroImage\s*=\s*"[^"]*"/, `heroImage="/assets/img/services-page/${slug}/001.webp"`);
  c = c.replace(/sectionTwoImage\s*=\s*"[^"]*"/, `sectionTwoImage="/assets/img/services-page/${slug}/002.webp"`);
  c = c.replace(/sectionTwoImageAlt\s*=\s*"[^"]*"/, 'sectionTwoImageAlt="Service page image 2"');
  c = c.replace(/valueImage\s*=\s*"[^"]*"/, `valueImage="/assets/img/services-page/${slug}/003.webp"`);
  c = c.replace(/valueImageAlt\s*=\s*"[^"]*"/, 'valueImageAlt="Service page image 3"');
  c = c.replace(/buildImage\s*=\s*"[^"]*"/, `buildImage="/assets/img/services-page/${slug}/004.webp"`);
  fs.writeFileSync(file, c, 'utf8');
  console.log('updated', slug);
}
