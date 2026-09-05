# Portfolio page — sections, fields, and content template

Every `/portfolio/<slug>` page renders the same 20 sections in the same order.
The design is identical for all of them; only the **content** differs, and that
content comes entirely from one row in the `portfolios` table.

This file is the authoring format. Fill one copy per project and paste each
block into the matching field in the admin editor.

---

## Part 1 — The section list

`Source` is the database column the section reads.

| # | Section on the page | Source column | Shape |
|---|---|---|---|
| — | **Hero** — breadcrumb, tech pills, title, lead, meta strip | `title`, `subtitle`, `tech_stack`, `role` | — |
| 1 | Project Overview | `about` | paragraphs |
| 2 | Project Snapshot (table) | `category`, `description`, `role`, `duration`, `team_size`, `tech_stack`, `live_url` | short values |
| 3 | About the Industry / Client Background | **`industry_background`** ⚠️ | paragraphs |
| 4 | Business Challenges | `requirements` | one per line |
| 5 | Objectives & Requirements | **`objectives`** ⚠️ | one per line |
| 6 | Our Strategy & Approach | **`strategy_approach`** ⚠️ | paragraphs |
| 7 | Technology Stack | `tech_stack` | JSON array of strings |
| 8 | Solution Architecture | **`solution_architecture`** ⚠️ | paragraphs |
| 9 | Key Features & Functionalities | `features` | JSON `[{title, description}]` |
| 10 | UI/UX Design Highlights | **`ui_ux_highlights`** ⚠️ | one per line |
| 11 | Screens | `app_screens`, `web_screens` | JSON arrays of image paths |
| 12 | Color Palette | `color_palette` | JSON `[{name, hex}]` |
| 13 | Typography | `typography` | JSON `{font, style_description}` |
| 14 | Development Process | **`development_process`** ⚠️ | `Title: description` per line |
| 15 | Security & Performance | **`security_performance`** ⚠️ | one per line |
| 16 | Results & Business Impact | `business_impact` | `Title: description` per line |
| 17 | Future Scope & Scalability | **`future_scope`** ⚠️ | one per line |
| 18 | Conclusion | **`conclusion`** ⚠️ | paragraphs |
| 19 | FAQ | `faq_schema` | JSON `[{question, answer}]` |
| 20 | Download the App | `play_store_url`, `app_store_url` | URLs — section hides if both blank |
| — | Related Projects | automatic — 3 newest in the same `category` | — |
| — | CTA | static | — |

### ⚠️ Read this before writing anything

**Nine of those columns do not exist on the `portfolios` table.** The page asks
for them, gets nothing back, and falls through to hard-coded generic filler —
which is why every portfolio currently reads the same in those nine places
("Our team followed an agile development methodology…", "End-to-end encryption
for all data in transit using TLS 1.3…", and so on).

Missing: `industry_background`, `objectives`, `strategy_approach`,
`solution_architecture`, `ui_ux_highlights`, `development_process`,
`security_performance`, `future_scope`, `conclusion`.

Until they are added as `TEXT` columns and surfaced in the admin editor,
sections 3, 5, 6, 8, 10, 14, 15, 17 and 18 cannot be written per-project.

Columns that **do** exist and are currently unused by the page:
`challenges_solutions`, `key_features`, `gallery_images`, `github_url`.
`key_features` is plain text, and is not the same thing as the JSON `features`.

---

## Part 2 — Filled example: Golkonda Handicrafts

Copy this shape for every project.

### title
```
Golkonda Handicrafts — Telangana E-Commerce Website & Mobile App
```

### subtitle
```
A digital commerce platform developed for Golkonda Handicrafts to bring Telangana's traditional handicrafts and handloom products to customers through a dedicated eCommerce website and mobile application.
```

### category
```
Ecommerce
```

### description  *(one line — feeds the Snapshot "Solution" row)*
```
Web + Mobile Commerce Platform
```

### role / duration / team_size / live_url
```
role:      Design, Development & Backend
duration:  <fill in>
team_size: <fill in>
live_url:  https://golkondashop.telangana.gov.in/
```

### tags  *(comma-separated, single string — not an array)*
```
ecommerce, handicrafts, handlooms, telangana, government, web, mobile
```

### tech_stack  *(JSON array of strings)*
```json
["React Native", "Node.js", "Express", "MongoDB", "AWS", "Razorpay"]
```

### about  *(Project Overview — paragraphs, blank line between)*
```
Golkonda Handicrafts is a digital commerce initiative focused on making Telangana's handicrafts and handloom products accessible through online channels.

The project brings the organization's product catalogue into a dedicated digital shopping environment, allowing customers to explore products and place orders through web and mobile experiences.

Built around the Golkonda Shop digital presence, the platform provides an online storefront for showcasing traditional products to a broader customer base. mTouch Labs contributed to the development of the eCommerce website and mobile application, together with the supporting backend capabilities required to manage the platform.
```

### industry_background  ⚠️ *column does not exist yet*
```
Telangana has a strong tradition of handicrafts and handlooms. Bringing these products into a digital commerce environment creates an opportunity to make traditional collections easier to discover and access beyond physical retail channels.

The project sits at the intersection of traditional handicrafts and modern eCommerce — using digital technology to create a more accessible online channel for Telangana's craft products.
```

### requirements  *(Business Challenges — one per line)*
```
Creating a digital shopping presence — establishing a dedicated online channel where customers could discover products beyond physical retail.
Presenting diverse craft products online — organizing different types of handicrafts and handloom products into a structured digital catalogue.
Supporting web and mobile access — providing a consistent shopping experience across the website and the mobile application.
Making product discovery convenient — structuring the digital storefront so customers could navigate and find products easily.
Connecting experience with management — supporting operational requirements including product and commerce activity management.
```

### objectives  ⚠️ *column does not exist yet — one per line*
```
Expand digital reach beyond physical retail channels
Present the full craft catalogue in a structured, browsable form
Deliver one consistent experience across web and mobile
Give the organization control over products and orders
Build a platform that can grow with the catalogue
```

### strategy_approach  ⚠️ *column does not exist yet*
```
We began with the catalogue itself — how handloom and handicraft products are categorised, described and photographed — because the taxonomy decides whether a shopper can find anything. That shaped both the storefront navigation and the admin structure behind it.

The web storefront and the mobile app were then built against one shared backend, so a product added once appears in both, and order and inventory activity is managed in a single place.
```

### solution_architecture  ⚠️ *column does not exist yet*
```
A shared Node.js backend exposes one REST API. The React web storefront and the React Native mobile app are independent clients against it, so each can be released on its own schedule while product, order and inventory data stay in one place. MongoDB holds the catalogue; payments run through Razorpay; media and static assets are served from AWS.
```

### features  *(JSON array of objects)*
```json
[
  { "title": "Product Catalogue", "description": "Handicrafts and handlooms organised into browsable categories with detailed product pages." },
  { "title": "Search & Filters", "description": "Find products by category, craft type, price and availability." },
  { "title": "Cart & Checkout", "description": "Add to cart, review the order and check out on web or mobile." },
  { "title": "Online Payments", "description": "Integrated payment gateway supporting cards, UPI and net banking." },
  { "title": "Order Tracking", "description": "Customers follow an order from confirmation through to delivery." },
  { "title": "Admin Dashboard", "description": "Manage products, stock, orders and customers from one place." }
]
```

### ui_ux_highlights  ⚠️ *column does not exist yet — one per line*
```
Product photography given the space to carry the page, as craft buying is visual
Category navigation built around how buyers think about crafts, not internal codes
The same visual identity across the website and the mobile app
Checkout reduced to the fewest steps that still confirm the order clearly
Layouts that hold up on the low-end Android devices most buyers are using
```

### app_screens  *(JSON array — paths to real screenshots already in /public)*
```json
["/images/portfolio/golkonda/app-1.webp", "/images/portfolio/golkonda/app-2.webp", "/images/portfolio/golkonda/app-3.webp"]
```

### web_screens
```json
["/images/portfolio/golkonda/web-1.webp", "/images/portfolio/golkonda/web-2.webp"]
```

### color_palette  *(JSON array of objects)*
```json
[
  { "name": "Primary", "hex": "#8B1D24" },
  { "name": "Accent",  "hex": "#D4A03C" },
  { "name": "Ink",     "hex": "#1E293B" },
  { "name": "Surface", "hex": "#F8FAFC" }
]
```

### typography  *(JSON object)*
```json
{ "font": "Poppins", "style_description": "Poppins throughout — bold for headings, regular for body." }
```

### development_process  ⚠️ *column does not exist yet — `Title: description` per line*
```
Discovery & Catalogue Study: Understanding how craft products are categorised, described and photographed before any screens were drawn.
Design & Prototyping: Wireframes and a shared design system covering both the web storefront and the mobile app.
Backend & API: One Node.js service for catalogue, orders, inventory and payments, consumed by both clients.
Web & Mobile Build: The React storefront and the React Native app built in parallel against that shared API.
Testing & QA: Cross-device testing, payment-flow verification and order-lifecycle checks.
Deployment & Handover: Production release, admin training and post-launch support.
```

### security_performance  ⚠️ *column does not exist yet — one per line*
```
HTTPS across the whole site and app, with TLS on every API call
Payments handled entirely by the gateway — no card data touches our servers
Role-based admin access, so catalogue and order permissions are separate
Product images compressed and served in modern formats to keep pages fast on mobile data
Regular backups of catalogue and order data
```

### business_impact  *(Results — `Title: description` per line)*
```
Online sales channel established: The organization's craft catalogue became purchasable online for the first time.
Reach beyond physical retail: Products reachable by customers outside the range of the physical stores.
Structured catalogue: Handicrafts and handlooms organised so buyers can browse by craft type rather than hunting.
One platform, two surfaces: Web and mobile customers see the same catalogue, stock and pricing.
Operational control: Products, stock and orders managed from a single admin dashboard.
```

### future_scope  ⚠️ *column does not exist yet — one per line*
```
Multi-language support, starting with Telugu
Artisan profiles telling the story behind each craft
Logistics integration for live delivery tracking
Personalised recommendations based on browsing history
Export and international shipping support
```

### conclusion  ⚠️ *column does not exist yet*
```
Golkonda Handicrafts brings a traditional craft catalogue into a modern commerce platform without flattening what makes it distinctive. The shared backend means the web and mobile experiences stay in step, and the admin tooling leaves the organization able to run the catalogue itself.

mTouch Labs delivered the storefront, the mobile application and the backend that supports both.
```

### faq_schema  *(JSON array of objects)*
```json
[
  { "question": "What is Golkonda Handicrafts?", "answer": "A digital commerce platform for Telangana's handicrafts and handloom products, available as a website and a mobile application." },
  { "question": "What did mTouch Labs build?", "answer": "The eCommerce website, the mobile application, and the backend that supports both." },
  { "question": "What technologies were used?", "answer": "React Native for mobile, Node.js and Express for the backend, MongoDB for the catalogue, AWS for hosting and Razorpay for payments." },
  { "question": "Can customers order from mobile?", "answer": "Yes — the mobile app supports the full journey from browsing to checkout and order tracking." }
]
```

### play_store_url / app_store_url
```
Leave both blank if the app is not published — the Download section hides itself.
```

### SEO fields
```
meta_title:       Golkonda Handicrafts — Telangana eCommerce Website & App
meta_description: How mTouch Labs built the eCommerce website and mobile app for Golkonda Handicrafts, bringing Telangana's handloom and handicraft catalogue online.
canonical_url:    https://www.mtouchlabs.com/portfolio/golkonda-handicrafts
og_title:         Golkonda Handicrafts — Telangana eCommerce Platform
og_description:   A web and mobile commerce platform for Telangana's traditional crafts.
og_image:         /images/portfolio/golkonda/og.webp
```

---

## Part 3 — Writing rules that keep the pages consistent

1. **One line per item** in `requirements`, `objectives`, `ui_ux_highlights`,
   `security_performance`, `future_scope`. Do not add bullet characters — the
   page draws its own markers.
2. In `development_process` and `business_impact`, use `Title: description`.
   The text before the first colon becomes the card heading. No colon means
   the whole line becomes the heading with no body.
3. Write **5–6 items** per list section. Fewer looks thin; more overruns the
   grid.
4. `about`, `industry_background`, `strategy_approach`,
   `solution_architecture` and `conclusion` take **paragraphs**, separated by a
   blank line. Two or three paragraphs each.
5. **Screens must be real.** `app_screens` and `web_screens` point at files in
   `/public`. An empty array hides the Screens section entirely — better than
   a broken image.
6. Keep `category` spelled exactly as in the admin dropdown. Related Projects
   matches on it, so a typo isolates the project.
7. `tags` is one comma-separated string, not a JSON array.
