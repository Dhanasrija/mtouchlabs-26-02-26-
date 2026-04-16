import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);
const SITE = 'https://www.mtouchlabs.com';

async function upsertBlog(blog) {
  const canonical = `${SITE}/blog/${blog.slug}`;
  // Check if exists
  const existing = await sql`SELECT id FROM blogs WHERE slug = ${blog.slug}`;
  if (existing.length > 0) {
    await sql`UPDATE blogs SET
      title = ${blog.title},
      description = ${blog.description},
      content = ${blog.content},
      image = ${blog.image},
      author = ${blog.author},
      category = ${blog.category},
      tags = ${blog.tags},
      meta_title = ${blog.meta_title},
      meta_description = ${blog.meta_description},
      og_title = ${blog.og_title},
      og_description = ${blog.og_description},
      og_image = ${blog.image},
      focus_keyword = ${blog.focus_keyword},
      canonical_url = ${canonical},
      schema_type = ${'BlogPosting'},
      faq_schema = ${JSON.stringify(blog.faq_schema)},
      publish_date = ${blog.publish_date ? new Date(blog.publish_date) : new Date()},
      status = ${blog.status || 'published'},
      published = ${blog.status === 'published' || blog.status === undefined},
      updated_at = ${new Date()}
    WHERE slug = ${blog.slug}`;
    console.log(`✅ Updated: ${blog.title} (slug: ${blog.slug})`);
  } else {
    await sql`INSERT INTO blogs (
      slug, title, description, content, image, author, category, tags,
      meta_title, meta_description, og_title, og_description, og_image,
      focus_keyword, canonical_url, schema_type, faq_schema,
      publish_date, status, published
    ) VALUES (
      ${blog.slug}, ${blog.title}, ${blog.description}, ${blog.content},
      ${blog.image}, ${blog.author}, ${blog.category}, ${blog.tags},
      ${blog.meta_title}, ${blog.meta_description},
      ${blog.og_title}, ${blog.og_description}, ${blog.image},
      ${blog.focus_keyword}, ${canonical},
      ${'BlogPosting'}, ${JSON.stringify(blog.faq_schema)},
      ${blog.publish_date ? new Date(blog.publish_date) : new Date()},
      ${blog.status || 'published'}, ${blog.status === 'published' || blog.status === undefined}
    )`;
    console.log(`✅ Created: ${blog.title} (slug: ${blog.slug})`);
  }
}

// ═══════════════════════════════════════════
// BLOG 1: Mobile App Development Cost in India
// ═══════════════════════════════════════════
const blog1 = {
  slug: 'mobile-app-development-cost-india',
  title: 'Mobile App Development Cost in India (2026 Guide)',
  description: 'Explore mobile app development cost in India in 2026. Detailed pricing, features, timelines & cost breakdown for startups and businesses.',
  meta_title: 'Mobile App Development Cost in India (2026 Guide) | mTouch Labs',
  meta_description: 'Explore mobile app development cost in India in 2026. Detailed pricing, features, timelines & cost breakdown for startups and businesses.',
  og_title: 'Mobile App Development Cost in India (2026 Guide)',
  og_description: 'Complete cost breakdown for building mobile apps in India with pricing, features and timelines.',
  focus_keyword: 'mobile app development cost in India',
  category: 'Mobile',
  author: 'mTouch Labs',
  tags: '{mobile app development,app development cost,India,2026,startups,iOS,Android}',
  image: '/images/blog/mobile-app-development-cost-india.png',
  publish_date: '2026-04-15T09:00:00Z',
  status: 'published',
  faq_schema: [
    { question: "What is the minimum cost to develop a mobile app in India?", answer: "The minimum cost typically starts from ₹3,00,000 for a basic app with essential features like login, simple UI, and basic functionality." },
    { question: "How long does it take to build a mobile app?", answer: "It usually takes 2 to 6 months depending on features and complexity. Basic apps take 2-3 months, while advanced apps take 6+ months." },
    { question: "Which platform is more cost-effective: Android or iOS?", answer: "Android development is generally slightly more affordable due to open-source tools, but cross-platform frameworks like Flutter can reduce costs for both." },
    { question: "Can I reduce app development cost?", answer: "Yes, by building an MVP first, prioritizing essential features, using cross-platform technologies, and partnering with an experienced team like mTouch Labs." },
    { question: "Is India a good choice for app development?", answer: "Yes, India offers high-quality development at competitive pricing, with costs 60-70% lower than the US and UK markets." }
  ],
  content: `
<h2 id="introduction">Introduction</h2>
<p>Planning to build a mobile app in 2026? One of the first questions every business asks is: <strong>"What is the mobile app development cost in India?"</strong></p>
<p>India has become a preferred destination for app development due to its balance of affordability and high-quality engineering. However, the cost of building an app varies depending on multiple factors such as features, complexity, and scalability.</p>
<p>Whether you're a startup or an enterprise, understanding the cost structure helps you plan your budget effectively. Businesses looking for scalable solutions often choose <a href="/mobile-app-development-company">mobile app development services</a> from trusted partners.</p>
<p>This guide gives you a clear, practical, and business-focused breakdown to help you make the right decision.</p>

<h2 id="average-cost">Average Mobile App Development Cost in India</h2>
<p>The estimated cost of mobile app development in India:</p>
<table><thead><tr><th>App Type</th><th>Estimated Cost</th></tr></thead><tbody>
<tr><td>Basic Apps</td><td>₹3,00,000 – ₹8,00,000</td></tr>
<tr><td>Mid-Level Apps</td><td>₹8,00,000 – ₹20,00,000</td></tr>
<tr><td>Advanced Apps</td><td>₹20,00,000+</td></tr>
</tbody></table>
<p>These ranges depend on the scope, integrations, and performance requirements.</p>
<p><em>Note: The cost ranges mentioned above are indicative and may vary based on business requirements, features, integrations, and scalability needs.</em></p>

<h2 id="key-factors">Key Factors Affecting App Development Cost</h2>
<h3>1. App Complexity</h3>
<p>The more features your app includes, the higher the cost. Simple informational apps cost less than feature-rich platforms with real-time data.</p>
<h3>2. Platform Selection</h3>
<ul><li>Android</li><li>iOS</li><li>Cross-platform (cost-efficient approach using Flutter or React Native)</li></ul>
<h3>3. UI/UX Design</h3>
<p>Better user experience increases engagement but requires more design effort. Companies looking for premium design should <a href="/hire-mobile-app-designers-in-india">hire mobile app designers</a> with proven portfolios.</p>
<h3>4. Backend & APIs</h3>
<p>Apps with dashboards, real-time data, and integrations require more development work and infrastructure.</p>

<h2 id="cost-by-complexity">Cost Breakdown by App Complexity</h2>
<table><thead><tr><th>App Level</th><th>Features Included</th><th>Estimated Cost</th></tr></thead><tbody>
<tr><td>Basic</td><td>Login, simple UI</td><td>₹3L – ₹8L</td></tr>
<tr><td>Medium</td><td>APIs, payments, dashboards</td><td>₹8L – ₹20L</td></tr>
<tr><td>Advanced</td><td>AI, real-time tracking, scaling</td><td>₹20L+</td></tr>
</tbody></table>

<h2 id="feature-wise-cost">Feature-Wise Cost Estimation</h2>
<table><thead><tr><th>Feature</th><th>Estimated Cost</th></tr></thead><tbody>
<tr><td>User Authentication</td><td>₹20K – ₹50K</td></tr>
<tr><td>Payment Gateway</td><td>₹50K – ₹1.5L</td></tr>
<tr><td>Push Notifications</td><td>₹20K – ₹60K</td></tr>
<tr><td>Admin Panel</td><td>₹1L – ₹5L</td></tr>
<tr><td>Third-party APIs</td><td>₹50K – ₹3L</td></tr>
</tbody></table>
<p>For apps that require <a href="/generative-ai-development-company">AI-powered features</a>, expect additional investment in model training and integration.</p>

<h2 id="timeline-vs-cost">Timeline vs Cost</h2>
<p>The development timeline directly impacts cost:</p>
<ul><li><strong>2–3 months</strong> → Basic apps</li><li><strong>4–6 months</strong> → Medium apps</li><li><strong>6+ months</strong> → Complex apps</li></ul>
<p>Faster delivery often increases cost due to additional resources required.</p>

<h2 id="india-vs-global">Cost Comparison: India vs Global Markets</h2>
<table><thead><tr><th>Country</th><th>Estimated Cost Range</th></tr></thead><tbody>
<tr><td>USA</td><td>₹50L – ₹2Cr+</td></tr>
<tr><td>UK</td><td>₹40L – ₹1.5Cr</td></tr>
<tr><td>India</td><td>₹3L – ₹40L</td></tr>
</tbody></table>
<p>India offers a strong balance of cost efficiency and quality development, making it the preferred destination for global businesses.</p>

<h2 id="reduce-cost">How to Reduce App Development Cost</h2>
<ul>
<li>Start with an <strong>MVP</strong> (Minimum Viable Product)</li>
<li>Focus on essential features first</li>
<li>Use cross-platform technologies like Flutter or React Native</li>
<li>Partner with an experienced <a href="/custom-software-development-company">custom app development company</a> that optimizes resources</li>
</ul>

<h2 id="why-mtouch-labs">Why Choose mTouch Labs</h2>
<p>At <a href="/">mTouch Labs</a>, we help businesses:</p>
<ul>
<li>Build scalable and high-performance mobile apps</li>
<li>Integrate AI-driven features</li>
<li>Optimize development cost without compromising quality</li>
</ul>
<p>With 14+ years of experience and 1500+ apps delivered, our focus is on delivering long-term value and scalability. <a href="/hire-mobile-app-developers-in-india">Hire mobile app developers</a> from our expert team today.</p>

<h2 id="final-thoughts">Final Thoughts</h2>
<p>Understanding the mobile app development cost in India is essential for making informed business decisions. Instead of focusing only on cost, businesses should consider scalability, performance, and long-term value.</p>
<p>A well-built app is an investment, not just an expense.</p>
<p><strong>Planning to build your app?</strong> <a href="/contact-us">Contact mTouch Labs</a> today for a free consultation and accurate cost estimation.</p>
`
};

// ═══════════════════════════════════════════
// BLOG 2: Custom Web App Development Guide
// ═══════════════════════════════════════════
const blog2 = {
  slug: 'custom-web-application-development-guide',
  title: 'Custom Web App Development Guide (2026)',
  description: 'Learn how custom web application development helps businesses scale. Complete guide covering process, features and benefits.',
  meta_title: 'Custom Web App Development Guide (2026) | mTouch Labs',
  meta_description: 'Learn how custom web application development helps businesses scale. Complete guide covering process, features and benefits.',
  og_title: 'Custom Web App Development Guide (2026)',
  og_description: 'Step-by-step guide to building scalable custom web applications for modern businesses.',
  focus_keyword: 'custom web application development',
  category: 'Web',
  author: 'mTouch Labs',
  tags: '{web development,custom web app,web application,2026,SaaS,business}',
  image: '/images/blog/custom-web-application-development.png',
  publish_date: '2026-04-17T09:00:00Z',
  status: 'published',
  faq_schema: [
    { question: "What is a custom web application?", answer: "A custom web application is software built specifically for a business's unique needs, workflows, and goals." },
    { question: "How long does it take to develop a web application?", answer: "Web application development typically takes between 2 to 6 months depending on the complexity and features." },
    { question: "Is custom web development better than ready-made software?", answer: "Yes, custom web development offers better scalability, flexibility, and long-term value compared to ready-made solutions." },
    { question: "Which technologies are best for web applications?", answer: "Popular technologies include React, Next.js, Node.js, and Python for building scalable and high-performance web applications." },
    { question: "Why choose mTouch Labs for custom web app development?", answer: "mTouch Labs provides scalable, secure, and performance-driven custom web applications tailored to business needs with end-to-end support." },
    { question: "Does mTouch Labs provide end-to-end web application development?", answer: "Yes, mTouch Labs offers complete web application development services including planning, design, development, testing, and maintenance." }
  ],
  content: `
<h2 id="introduction">Introduction</h2>
<p>In 2026, businesses are no longer relying on basic websites to manage operations or serve customers. They need powerful, scalable, and flexible digital solutions.</p>
<p>This is where <strong>custom web app development</strong> plays a critical role. Instead of adjusting your business to fit software, custom web applications are designed to fit your business perfectly.</p>
<p>Many businesses invest in <a href="/custom-software-development-company">custom software development</a> to build scalable systems that grow with them.</p>

<h2 id="what-is-custom-web-app">What is Custom Web App Development?</h2>
<p>Custom web app development refers to building web-based software tailored specifically to your business processes, goals, and users. Unlike generic tools, custom applications:</p>
<ul><li>Adapt to your workflow</li><li>Solve specific business problems</li><li>Scale as your business grows</li></ul>

<h2 id="why-businesses-prefer">Why Businesses Prefer Custom Web Apps</h2>
<h3>1. Tailored Functionality</h3>
<p>Every feature is built based on your exact needs — no unnecessary bloat.</p>
<h3>2. Scalability</h3>
<p>As your business grows, your application can evolve without limitations.</p>
<h3>3. Seamless Integrations</h3>
<p>Custom apps integrate with CRM systems, payment gateways, APIs, and third-party tools seamlessly.</p>
<h3>4. Enhanced Security</h3>
<p>You get full control over data and security implementation.</p>

<h2 id="core-features">Core Features of Modern Web Applications</h2>
<p>A high-performing <a href="/web-development-company">web application</a> typically includes:</p>
<ul>
<li>Secure authentication system</li>
<li>Responsive design across devices</li>
<li>Real-time data processing</li>
<li>Admin dashboard</li>
<li>API integrations</li>
<li>Performance optimization</li>
</ul>

<h2 id="development-process">Step-by-Step Development Process</h2>
<h3>1. Requirement Analysis</h3>
<p>Understanding business goals, users, and functionality requirements.</p>
<h3>2. UI/UX Design</h3>
<p>Designing intuitive and engaging user interfaces that drive conversions.</p>
<h3>3. Development</h3>
<p>Frontend and backend development begins using modern technology stacks.</p>
<h3>4. Testing & Quality Assurance</h3>
<p>Ensuring performance, security, and usability across all scenarios.</p>
<h3>5. Deployment & Maintenance</h3>
<p>Launching the product and continuously improving it based on user feedback.</p>

<h2 id="technology-stack">Choosing the Right Technology Stack</h2>
<p>Selecting the right technology stack ensures performance and scalability:</p>
<table><thead><tr><th>Layer</th><th>Technologies</th></tr></thead><tbody>
<tr><td>Frontend</td><td>React.js, Next.js</td></tr>
<tr><td>Backend</td><td>Node.js, Python</td></tr>
<tr><td>Database</td><td>MongoDB, PostgreSQL</td></tr>
</tbody></table>

<h2 id="custom-vs-readymade">Custom vs Ready-Made Solutions</h2>
<table><thead><tr><th>Factor</th><th>Custom Web App</th><th>Ready-Made Software</th></tr></thead><tbody>
<tr><td>Flexibility</td><td>High</td><td>Limited</td></tr>
<tr><td>Scalability</td><td>High</td><td>Restricted</td></tr>
<tr><td>Customization</td><td>Full</td><td>Minimal</td></tr>
<tr><td>Long-term Value</td><td>High</td><td>Medium</td></tr>
</tbody></table>
<p>Custom solutions offer significantly better long-term business value.</p>

<h2 id="use-cases">Real Business Use Cases</h2>
<p>Custom web applications are widely used across industries:</p>
<ul>
<li>CRM systems</li>
<li>Ecommerce platforms</li>
<li><a href="/saas-development-services">SaaS products</a></li>
<li>Booking systems</li>
<li>Internal dashboards</li>
</ul>

<h2 id="choosing-partner">How to Choose the Right Development Partner</h2>
<p>When selecting a development company, consider:</p>
<ul>
<li>Technical expertise and modern stack proficiency</li>
<li>Portfolio and past projects</li>
<li>Industry experience</li>
<li>Scalability approach</li>
<li>Post-launch support</li>
</ul>

<h2 id="final-thoughts">Final Thoughts</h2>
<p>Custom web app development is a strategic investment that enables businesses to operate efficiently and scale effectively. Instead of limiting your growth with generic tools, a custom solution helps you build a strong digital foundation.</p>
<p><strong>Looking to build a scalable web application?</strong> <a href="/contact-us">Contact mTouch Labs</a> today for expert custom web app development solutions.</p>
`
};

// ═══════════════════════════════════════════
// BLOG 3: AI App Development Guide
// ═══════════════════════════════════════════
const blog3 = {
  slug: 'ai-app-development-guide',
  title: 'AI App Development Guide (2026): Benefits & Use Cases',
  description: 'Explore AI app development in 2026. Learn benefits, real-world use cases, process and how businesses can leverage AI for growth.',
  meta_title: 'AI App Development Guide (2026): Benefits & Use Cases',
  meta_description: 'Explore AI app development in 2026. Learn benefits, real-world use cases, process and how businesses can leverage AI for growth.',
  og_title: 'AI App Development Guide (2026)',
  og_description: 'Complete guide to AI app development with use cases, benefits and business impact.',
  focus_keyword: 'AI app development',
  category: 'AI',
  author: 'mTouch Labs',
  tags: '{AI,artificial intelligence,app development,machine learning,2026,automation}',
  image: '/images/blog/ai-app-development-guide.png',
  publish_date: '2026-04-20T09:00:00Z',
  status: 'published',
  faq_schema: [
    { question: "What is AI app development?", answer: "AI app development involves building applications that use artificial intelligence to automate tasks, analyze data, and improve user experience." },
    { question: "How is AI used in mobile applications?", answer: "AI is used in mobile applications for personalization, chatbots, recommendation systems, predictive analytics, and automation of user interactions." },
    { question: "Is AI app development expensive?", answer: "AI app development cost depends on the complexity of features, data requirements, and level of automation. Advanced AI solutions typically require higher investment." },
    { question: "What industries benefit from AI applications?", answer: "Industries such as healthcare, ecommerce, fintech, SaaS, and logistics benefit significantly from AI applications through automation and data-driven decision-making." },
    { question: "What technologies are used in AI app development?", answer: "Technologies used in AI app development include machine learning, natural language processing, computer vision, Python, TensorFlow, and PyTorch." },
    { question: "Why choose mTouch Labs for AI app development?", answer: "mTouch Labs offers scalable AI-powered application development with a focus on performance, security, and long-term business value." },
    { question: "Does mTouch Labs provide end-to-end AI development services?", answer: "Yes, mTouch Labs provides complete AI development services including strategy, development, integration, testing, and ongoing support." }
  ],
  content: `
<h2 id="introduction">Introduction</h2>
<p>Artificial Intelligence is no longer a future concept — it is actively transforming how businesses operate and how users interact with applications.</p>
<p>In 2026, <strong>AI-powered applications</strong> are becoming a core competitive advantage. From personalized recommendations to intelligent automation, AI enables businesses to deliver smarter and more efficient digital experiences.</p>
<p>Companies investing in <a href="/generative-ai-development-company">AI development services</a> are seeing significant improvements in efficiency and user engagement.</p>

<h2 id="what-is-ai-app-dev">What is AI App Development?</h2>
<p>AI app development involves integrating artificial intelligence capabilities into applications to enable:</p>
<ul><li>Learning from data</li><li>Predictive analysis</li><li>Automation</li><li>Personalized user experiences</li></ul>
<p>Unlike traditional apps, AI-powered apps continuously improve based on user behavior and data patterns.</p>

<h2 id="why-ai-transforming">Why AI is Transforming Applications</h2>
<p>Businesses are adopting AI because it helps:</p>
<ul>
<li>Improve decision-making with data-driven insights</li>
<li>Automate repetitive tasks and workflows</li>
<li>Enhance user engagement through personalization</li>
<li>Deliver real-time insights for faster action</li>
</ul>
<p>AI turns applications into intelligent systems, not just tools.</p>

<h2 id="key-benefits">Key Benefits of AI in Apps</h2>
<h3>1. Personalization</h3>
<p>AI analyzes user behavior to deliver tailored experiences — from content recommendations to dynamic pricing.</p>
<h3>2. Automation</h3>
<p>Reduces manual effort by automating workflows, customer support, and data processing.</p>
<h3>3. Predictive Insights</h3>
<p>Helps businesses anticipate trends, user needs, and market shifts before they happen.</p>
<h3>4. Enhanced User Experience</h3>
<p>Improves engagement through smarter interactions, voice interfaces, and intelligent search.</p>

<h2 id="use-cases">Real-World AI Use Cases</h2>
<p>AI applications are widely used across industries:</p>
<ul>
<li><strong>Ecommerce</strong> → Product recommendations and dynamic pricing</li>
<li><strong>Healthcare</strong> → Patient data analysis and diagnostics</li>
<li><strong>Finance</strong> → Fraud detection and risk assessment</li>
<li><strong>SaaS</strong> → Workflow automation and intelligent analytics</li>
</ul>
<p>AI enables businesses to operate more efficiently and make data-backed decisions. Learn more about our <a href="/machine-learning-development-company">machine learning solutions</a>.</p>

<h2 id="development-process">AI App Development Process</h2>
<h3>1. Requirement Analysis</h3>
<p>Understanding business goals, data availability, and use cases.</p>
<h3>2. Data Collection & Preparation</h3>
<p>AI models rely heavily on quality data — collection, cleaning, and structuring are critical.</p>
<h3>3. Model Development</h3>
<p>Training machine learning models using appropriate algorithms and frameworks.</p>
<h3>4. Integration</h3>
<p>Embedding AI capabilities into existing or new applications.</p>
<h3>5. Testing & Optimization</h3>
<p>Ensuring model accuracy, performance, and reliability in production.</p>

<h2 id="technologies">Technologies Behind AI Applications</h2>
<p>Common technologies used in AI development:</p>
<ul>
<li>Machine Learning (ML)</li>
<li>Natural Language Processing (NLP)</li>
<li>Computer Vision</li>
<li>Python, TensorFlow, PyTorch</li>
</ul>

<h2 id="challenges">Challenges in AI App Development</h2>
<ul>
<li>Data quality and availability issues</li>
<li>High development complexity</li>
<li>Integration challenges with legacy systems</li>
<li>Ongoing model maintenance and retraining</li>
</ul>
<p>Proper planning and an experienced partner helps overcome these challenges effectively.</p>

<h2 id="choosing-partner">How to Choose the Right AI Development Partner</h2>
<p>When selecting an AI development partner, consider:</p>
<ul>
<li>Proven AI expertise and real-world project experience</li>
<li>Scalability approach for growing data needs</li>
<li>Strong data security and privacy practices</li>
<li>End-to-end service capability</li>
</ul>

<h2 id="final-thoughts">Final Thoughts</h2>
<p>AI app development is reshaping how businesses operate across every industry. The key is to start with clear goals, quality data, and the right technology partner.</p>
<p><strong>Ready to build AI-powered applications?</strong> <a href="/contact-us">Contact mTouch Labs</a> today for expert AI development services tailored to your business needs.</p>
`
};

// ═══════════════════════════════════════════
// SCHEDULED BLOGS (future dates — will be auto-generated by Claude)
// ═══════════════════════════════════════════
const scheduledBlogs = [
  { slug: 'ecommerce-app-development-cost-india', title: 'Ecommerce App Development Cost in India', category: 'Ecommerce', publish_date: '2026-04-26T09:00:00Z' },
  { slug: 'nextjs-latest-version-2026-features', title: 'Next.js Latest Version 2026: Features & Updates', category: 'Web', publish_date: '2026-04-29T09:00:00Z' },
  { slug: 'how-to-build-saas-product-from-scratch', title: 'How to Build a SaaS Product from Scratch', category: 'SaaS', publish_date: '2026-04-24T09:00:00Z' },
];

async function main() {
  console.log('📝 Publishing blogs...\n');

  // Publish the 3 full blogs
  await upsertBlog(blog1);
  await upsertBlog(blog2);
  await upsertBlog(blog3);

  // Note about scheduled blogs
  console.log('\n📅 Upcoming scheduled blogs (will be auto-generated by Claude on their dates):');
  for (const sb of scheduledBlogs) {
    console.log(`   - ${sb.publish_date.split('T')[0]}: ${sb.title}`);
  }

  // Verify canonical URLs
  const blogs = await sql`SELECT slug, canonical_url FROM blogs WHERE canonical_url NOT LIKE '%/blog/%' OR canonical_url IS NULL`;
  if (blogs.length > 0) {
    console.log(`\n🔧 Fixing ${blogs.length} blogs with wrong canonical URLs...`);
    for (const b of blogs) {
      const correct = `${SITE}/blog/${b.slug}`;
      await sql`UPDATE blogs SET canonical_url = ${correct} WHERE slug = ${b.slug}`;
    }
    console.log('✅ All canonical URLs fixed to /blog/slug format');
  } else {
    console.log('\n✅ All canonical URLs already in /blog/slug format');
  }

  console.log('\n🎉 Done!');
}

main().catch(e => { console.error('❌ Error:', e.message); process.exit(1); });
