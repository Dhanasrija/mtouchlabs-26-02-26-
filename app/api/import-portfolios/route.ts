import { sql } from '@/lib/db';
import { NextResponse } from 'next/server';
import * as fs from 'fs';
import * as path from 'path';

export const dynamic = 'force-dynamic';

// List of portfolio folder names
const PORTFOLIO_FOLDERS = [
  'abu-dhabi-judicial-department-mobile-app-development',
  'adfini8-mobile-advertising-platform-development',
  'app-and-web-development-for-ecommerce-services',
  'app-solutions-for-medical-device-companies',
  'b2b-grocery-shopping-mobile-app-development-and-web-development',
  'b2b-lead-intelligence-platform',
  'best-on-demand-grocery-delivery-android-app-development',
  'bikers-community-social-networking-app-development',
  'cabs-booking-app-development-company',
  'call-management-mobile-app-development',
  'car-booking-app-rent-ride',
  'custom-crm-software-development-company',
  'custom-matrimonial-mobile-app-development',
  'devotional-mobile-app-development',
  'drpick-healthcare-app',
  'event-management-and-gifting-app',
  'fractional-property-ownership-web-development',
  'grocery-delivery-android-app-development',
  'healthcare-super-app',
  'hitech-shuttle-bus-management-platform',
  'hotel-booking-ios-app-development',
  'hyper-local-delivery-mobile-app-development',
  'key-plantation-ngo-mobile-app-development',
  'lip-sync-video-dubbing-mobile-app-development',
  'loyalty-program-management-mobile-app-development',
  'make-your-taxi-business-smart-with-our-uber-clone-app-development',
  'multi-vendor-ecommerce-mobile-app-development',
  'on-demand-chef-app-development-company',
  'on-demand-chef-management-web-development',
  'on-demand-home-services-mobile-app-development',
  'on-demand-service-mobile-app-development',
  'on-demand-service-providers-web-and-mobile-app-development',
  'online-astrology-consultation-mobile-app-development',
  'online-delivery-grocery-shopping-mobile-app-development',
  'online-food-ordering-mobile-app-development',
  'online-generic-medicine-delivery-mobile-app-development',
  'online-generic-medicine-mobile-app-development-and-web-development',
  'online-grocery-delivery-android-app-development',
  'online-grocery-shopping-mobile-app-development',
  'online-learning-android-app-development',
  'online-learning-platform-mobile-app-development',
  'online-shopping-and-international-shipping-service-mobile-app',
  'onlyshop-mobile-shopping-app-development',
  'otloffers-mobile-app-development',
  'pg-hostel-management-mobile-app-development',
  'photo-editor-mobile-app-development',
  'rahayel-parking-lot-management-system',
  'real-estate-lead-app',
  'retailer-management-system-mobile-web-app',
  'secure-ecommerce-shopping-platform',
  'short-video-sharing-mobile-app-development',
  'social-community-mobile-app-development',
  'spa-and-salon-booking-flutter-app-development',
  'staff-and-student-management-enterprise-mobile-app-development',
  'telangana-ecommerce-mobile-app-development',
  'web-and-app-development-for-education-services',
  'web-and-app-development-for-real-estate-services',
  'web-and-app-development-for-temple-services',
];

function extractBetween(text: string, start: string, end: string): string {
  const si = text.indexOf(start);
  if (si === -1) return '';
  const ei = text.indexOf(end, si + start.length);
  if (ei === -1) return text.substring(si + start.length);
  return text.substring(si + start.length, ei).trim();
}

function extractMetadata(content: string): { title: string; description: string } {
  const titleMatch = content.match(/title:\s*["'`]([^"'`]+)["'`]/);
  const descMatch = content.match(/description:\s*["'`]([^"'`]+)["'`]/);
  return {
    title: titleMatch ? titleMatch[1].replace(' | mTouch Labs', '').replace(' | mTouchLabs', '').trim() : '',
    description: descMatch ? descMatch[1].trim() : '',
  };
}

function extractH1(content: string): string {
  // Match <h1 ...>content</h1> across multiple lines
  const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  if (!h1Match) return '';
  // Strip inner JSX tags
  return h1Match[1]
    .replace(/<span[^>]*>/gi, '')
    .replace(/<\/span>/gi, '')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractSubtitle(content: string): string {
  // Look for p.h-light
  const match = content.match(/className="h-light"[^>]*>([\s\S]*?)<\/p>/i);
  if (!match) return '';
  return match[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
}

function extractImage(content: string): string {
  // Look for image in sol-img section
  const match = content.match(/className="sol-img[^"]*"[\s\S]*?src="([^"]+)"/i);
  if (match) return match[1];
  // Fallback: look for portfolio image
  const match2 = content.match(/src="(\/images\/portfolio\/[^"]+)"/i);
  return match2 ? match2[1] : '';
}

function extractAbout(content: string): string {
  // Look for details-port section
  const detailsMatch = content.match(/className="details-port"[\s\S]*?<p>([\s\S]*?)<\/p>/i);
  if (detailsMatch) {
    return detailsMatch[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
  }
  return '';
}

function extractTechStack(content: string): string[] {
  const techs: string[] = [];
  const techSection = content.match(/className="technolo-sec"([\s\S]*?)(?:<\/div>\s*<\/div>\s*<\/div>)/i);
  if (!techSection) return techs;
  
  // Find all iwt-content > p tags
  const matches = techSection[1].matchAll(/<div className="iwt-content">\s*<p>([\s\S]*?)<\/p>/gi);
  for (const m of matches) {
    const tech = m[1].replace(/<[^>]+>/g, '').trim();
    if (tech && !techs.includes(tech)) techs.push(tech);
  }
  return techs;
}

function extractRequirements(content: string): string {
  // Look for "Project Requirements" heading
  const match = content.match(/Project Requirements[\s\S]*?<\/h[23]>\s*(?:<\/div>)?\s*<p>([\s\S]*?)<\/p>/i);
  if (!match) return '';
  let text = match[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
  
  // Also get bullet points if any
  const ulMatch = content.match(/Project Requirements[\s\S]*?<ul[^>]*>([\s\S]*?)<\/ul>/i);
  if (ulMatch) {
    const items = ulMatch[1].matchAll(/<li>([\s\S]*?)<\/li>/gi);
    for (const item of items) {
      text += '\n• ' + item[1].replace(/<[^>]+>/g, '').trim();
    }
  }
  return text;
}

function extractBusinessImpact(content: string): string {
  const match = content.match(/Business Impact[\s\S]*?<\/h[23]>\s*(?:<\/div>)?\s*<p>([\s\S]*?)<\/p>/i);
  if (!match) return '';
  let text = match[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
  
  const ulMatch = content.match(/Business Impact[\s\S]*?<ul[^>]*>([\s\S]*?)<\/ul>/i);
  if (ulMatch) {
    const items = ulMatch[1].matchAll(/<li>([\s\S]*?)<\/li>/gi);
    for (const item of items) {
      text += '\n• ' + item[1].replace(/<[^>]+>/g, '').trim();
    }
  }
  return text;
}

function extractFeatures(content: string): { title: string; description: string }[] {
  const features: { title: string; description: string }[] = [];
  
  // Pattern 1: features in list items with h6
  const featureMatches = content.matchAll(/<li>\s*<h6>([\s\S]*?)<\/h6>\s*<\/li>/gi);
  for (const m of featureMatches) {
    const text = m[1].replace(/<[^>]+>/g, '').trim();
    const parts = text.split('–').length > 1 ? text.split('–') : text.split(' - ');
    if (parts.length > 1) {
      features.push({ title: parts[0].trim(), description: parts.slice(1).join(' - ').trim() });
    } else {
      features.push({ title: text, description: '' });
    }
  }
  
  // Pattern 2: feature cards with h3 + p
  if (features.length === 0) {
    const cardMatches = content.matchAll(/className="ree-card-content[^"]*">\s*<h3[^>]*>([\s\S]*?)<\/h3>\s*<p>([\s\S]*?)<\/p>/gi);
    for (const m of cardMatches) {
      features.push({
        title: m[1].replace(/<[^>]+>/g, '').trim(),
        description: m[2].replace(/<[^>]+>/g, '').trim(),
      });
    }
  }

  // Pattern 3: numbered features like "1. Title\nDescription"
  if (features.length === 0) {
    const numberedMatches = content.matchAll(/<h[34][^>]*>\s*\d+\.\s*([\s\S]*?)<\/h[34]>\s*<p>([\s\S]*?)<\/p>/gi);
    for (const m of numberedMatches) {
      features.push({
        title: m[1].replace(/<[^>]+>/g, '').trim(),
        description: m[2].replace(/<[^>]+>/g, '').trim(),
      });
    }
  }

  return features;
}

function extractTypography(content: string): { font: string; style_description: string } {
  const typoMatch = content.match(/className="typo-head"[\s\S]*?<p>([\s\S]*?)<\/p>/i);
  if (!typoMatch) return { font: '', style_description: '' };
  
  const fontText = typoMatch[1].replace(/<span>/g, ' - ').replace(/<[^>]+>/g, '').trim();
  
  const styleMatch = content.match(/className="heading-paragrapph[\s\S]*?<h3[^>]*>([\s\S]*?)<\/h3>\s*<p>([\s\S]*?)<\/p>/i);
  const styleDesc = styleMatch ? styleMatch[1].replace(/<[^>]+>/g, '').trim() : '';
  
  return { font: fontText, style_description: styleDesc };
}

function extractColorPalette(content: string): { name: string; hex: string }[] {
  const colors: { name: string; hex: string }[] = [];
  
  // Pattern: color-box with background style + color-detailss with h6 + p
  const colorSection = content.match(/className="color-palette"([\s\S]*?)(?:<\/section>|<\/div>\s*<\/div>\s*<\/div>\s*<\/div>)/i);
  if (!colorSection) return colors;
  
  const colorMatches = colorSection[1].matchAll(/background:\s*["']?(#[A-Fa-f0-9]{3,8})["']?\s*\}\}[\s\S]*?<h6>([\s\S]*?)<\/h6>\s*<p>([\s\S]*?)<\/p>/gi);
  for (const m of colorMatches) {
    colors.push({
      name: m[2].replace(/<[^>]+>/g, '').trim(),
      hex: m[1].trim(),
    });
  }
  
  return colors;
}

function extractAppScreens(content: string): string[] {
  const screens: string[] = [];
  // Look for app screen images in portfolio sections
  const screenSection = content.match(/App Screens[\s\S]*?(?=Web Screens|<\/section>)/i);
  if (screenSection) {
    const imgMatches = screenSection[0].matchAll(/src="([^"]+)"/gi);
    for (const m of imgMatches) {
      if (m[1].includes('/images/') && !m[1].includes('icon')) screens.push(m[1]);
    }
  }
  return screens;
}

function extractWebScreens(content: string): string[] {
  const screens: string[] = [];
  const screenSection = content.match(/Web Screens[\s\S]*?(?=Types Of|Features|<\/section>)/i);
  if (screenSection) {
    const imgMatches = screenSection[0].matchAll(/src="([^"]+)"/gi);
    for (const m of imgMatches) {
      if (m[1].includes('/images/') && !m[1].includes('icon')) screens.push(m[1]);
    }
  }
  return screens;
}

function extractPlayStoreUrl(content: string): string {
  const match = content.match(/href="(https:\/\/play\.google\.com\/[^"]+)"/i);
  return match ? match[1] : '';
}

function extractAppStoreUrl(content: string): string {
  const match = content.match(/href="(https:\/\/apps\.apple\.com\/[^"]+)"/i);
  return match ? match[1] : '';
}

function extractFaqs(content: string): { question: string; answer: string }[] {
  const faqs: { question: string; answer: string }[] = [];
  
  // Pattern: accordion-title + accordion-content
  const faqMatches = content.matchAll(/className="accordion-title">([\s\S]*?)<\/span>[\s\S]*?className="accordion-content">\s*(?:<div[^>]*>)?\s*<p>([\s\S]*?)<\/p>/gi);
  for (const m of faqMatches) {
    const q = m[1].replace(/<[^>]+>/g, '').trim();
    const a = m[2].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
    if (q && a) faqs.push({ question: q, answer: a });
  }
  
  // Pattern 2: cse_study FAQ
  if (faqs.length === 0) {
    const faqMatches2 = content.matchAll(/className="cse_study_faq_question"[^>]*>([\s\S]*?)<\/[^>]+>[\s\S]*?className="cse_study_faq_answer"[^>]*>([\s\S]*?)<\/[^>]+>/gi);
    for (const m of faqMatches2) {
      faqs.push({ question: m[1].replace(/<[^>]+>/g, '').trim(), answer: m[2].replace(/<[^>]+>/g, '').trim() });
    }
  }

  return faqs;
}

function guessCategory(title: string, slug: string, about: string): string {
  const text = (title + ' ' + slug + ' ' + about).toLowerCase();
  if (text.includes('ecommerce') || text.includes('shopping') || text.includes('shop')) return 'Ecommerce';
  if (text.includes('crm') || text.includes('lead') || text.includes('b2b')) return 'CRM';
  if (text.includes('healthcare') || text.includes('medical') || text.includes('medicine') || text.includes('doctor') || text.includes('health')) return 'Health Care';
  if (text.includes('education') || text.includes('learning') || text.includes('student')) return 'Ed-tech';
  if (text.includes('real estate') || text.includes('property')) return 'Real Estate';
  if (text.includes('transport') || text.includes('taxi') || text.includes('cab') || text.includes('shuttle') || text.includes('car-booking') || text.includes('parking')) return 'Transport Management';
  if (text.includes('retail') || text.includes('grocery') || text.includes('delivery')) return 'Retail Management';
  if (text.includes('legal') || text.includes('judicial')) return 'Legal';
  if (text.includes('social') || text.includes('community') || text.includes('video sharing')) return 'Social Media';
  if (text.includes('salon') || text.includes('chef') || text.includes('food') || text.includes('hotel') || text.includes('hostel')) return 'Online Services';
  if (text.includes('devotional') || text.includes('temple') || text.includes('astrology')) return 'Online Services';
  return 'Utility';
}

export async function GET() {
  const appDir = path.join(process.cwd(), 'app');
  const results: { slug: string; status: string; title?: string }[] = [];
  let imported = 0;
  let errors = 0;
  let skipped = 0;

  for (const folder of PORTFOLIO_FOLDERS) {
    try {
      const filePath = path.join(appDir, folder, 'page.tsx');
      if (!fs.existsSync(filePath)) {
        results.push({ slug: folder, status: 'file_not_found' });
        skipped++;
        continue;
      }

      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check if already exists
      const existing = await sql`SELECT id FROM portfolios WHERE slug = ${folder}`;
      if (existing.length > 0) {
        results.push({ slug: folder, status: 'already_exists' });
        skipped++;
        continue;
      }

      const meta = extractMetadata(content);
      const h1Title = extractH1(content);
      const title = h1Title || meta.title || folder.replace(/-/g, ' ');
      const subtitle = extractSubtitle(content) || meta.description;
      const image = extractImage(content);
      const about = extractAbout(content);
      const techStack = extractTechStack(content);
      const requirements = extractRequirements(content);
      const businessImpact = extractBusinessImpact(content);
      const features = extractFeatures(content);
      const typography = extractTypography(content);
      const colorPalette = extractColorPalette(content);
      const appScreens = extractAppScreens(content);
      const webScreens = extractWebScreens(content);
      const playStoreUrl = extractPlayStoreUrl(content);
      const appStoreUrl = extractAppStoreUrl(content);
      const faqSchema = extractFaqs(content);
      const category = guessCategory(title, folder, about);
      const tags = techStack.join(', ');

      await sql`
        INSERT INTO portfolios (slug, title, subtitle, category, image, about, tech_stack, requirements, business_impact, features, app_screens, web_screens, typography, color_palette, play_store_url, app_store_url, faq_schema, tags, published)
        VALUES (${folder}, ${title}, ${subtitle}, ${category}, ${image}, ${about}, ${JSON.stringify(techStack)}, ${requirements}, ${businessImpact}, ${JSON.stringify(features)}, ${JSON.stringify(appScreens)}, ${JSON.stringify(webScreens)}, ${JSON.stringify(typography)}, ${JSON.stringify(colorPalette)}, ${playStoreUrl}, ${appStoreUrl}, ${JSON.stringify(faqSchema)}, ${tags}, ${true})
      `;

      imported++;
      results.push({ slug: folder, status: 'imported', title });

    } catch (err) {
      errors++;
      results.push({ slug: folder, status: 'error: ' + String(err).substring(0, 100) });
    }
  }

  return NextResponse.json({
    summary: {
      total: PORTFOLIO_FOLDERS.length,
      imported,
      skipped,
      errors,
    },
    results,
  });
}