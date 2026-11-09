# Sefik Egriboz — Professional Portfolio

**Live:** https://sefikegriboz.net/  
**Türkçe:** https://sefikegriboz.net/tr/

Bilingual static personal portfolio hosted on **GitHub Pages** using a custom domain managed with Cloudflare DNS.

## Purpose

The primary purpose is to support **permanent senior career opportunities** in solutions architecture, aviation IT, enterprise integration, data and AI, technical product ownership, and delivery leadership. Employers and recruiters can choose among five role-focused PDF CVs. Professional achievements, projects, experience and credentials give supporting context.

**Selected advisory and interim engagements are a secondary option**, positioned after the CV profiles and grounded in hands-on production work.

## Files and folders

```text
/
├── index.html                    English website
├── tr/index.html                 Turkish website
├── style.css                     Shared responsive stylesheet
├── script.js                     Mobile navigation and CV role selector
├── sefikEgriboz.jpg              Current profile portrait
├── social-preview.png            LinkedIn/OG image (1200 × 630)
├── favicon.svg
├── Sefik_Egriboz_E.pdf           Principal Solutions Architect
├── Sefik_Egriboz_A.pdf           Airline Operations
├── Sefik_Egriboz_T.pdf           Data & AI
├── Sefik_Egriboz_P.pdf           Platform Product Owner
├── Sefik_Egriboz_G.pdf           Technical Delivery & Transformation
├── certificates/                 Selected public certifications
├── sitemap.xml                   English and Turkish canonical URLs
├── google5deb26c3673d6e69.html  Google Search Console verification
└── .github/workflows/static.yml  GitHub Pages publishing
```

## Local preview

No Node.js, build steps, package manager or database is needed.

1. Download or clone the repository, retaining the folder structure.
2. Open `index.html` (English) or `tr/index.html` (Turkish) in a browser.
3. Optionally run `python -m http.server 8000` from the repository folder and open `http://localhost:8000/`.

## Updating and deploying

Commits to `main` deploy via GitHub Actions. GitHub Pages serves the files at the custom HTTPS domain.

- **Page content:** Edit both `index.html` and `tr/index.html` for bilingual changes.
- **Design:** Update `style.css`.
- **Interactive CV focus tabs and mobile navigation:** Update `script.js`.
- **CVs:** Replace the existing role PDF with the same filename so links stay valid.
- **Social sharing:** Both pages use `social-preview.png` for Open Graph previews. Refresh a cached LinkedIn preview with https://www.linkedin.com/post-inspector/.
- **SEO:** Preserve canonical links, `hreflang` and `sitemap.xml` when adding new pages.

## Contact

**Professional email:** sefik@sefikegriboz.net  
**LinkedIn:** https://www.linkedin.com/in/sefikegriboz/

Incoming email is routed outside GitHub by Cloudflare Email Routing. No credentials or SMTP/API secrets are stored in this public repository.

## Notes

All linked CVs and public certificates are accessible to website visitors. Performance and career outcomes are based on the provided CVs, not independently audited results. PDFs are separate documents and may contain different contact details from the website.

Updated: November 2026.
