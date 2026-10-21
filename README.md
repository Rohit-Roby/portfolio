# Rohit Roby — Data Engineering & Applied AI Portfolio

A responsive, accessible, static portfolio that highlights independently documented cloud data engineering, ML engineering and quantitative analytics repositories.

## Highlights

- Clear data-engineering positioning rather than a generic technology list.
- Featured projects link directly to their GitHub source repositories.
- Responsive dark visual system, semantic HTML, keyboard focus states and reduced-motion support.
- Search metadata, social sharing tags and a mobile navigation menu.
- Static HTML, CSS and vanilla JavaScript: no build chain, credentials or server required.

## Featured work

1. [UK Crime Data Pipeline](https://github.com/Rohit-Roby/uk-crime-data-pipeline) — Python, Google Cloud, BigQuery, dbt, Cloud Run, CI/CD and Power BI.
2. [Text-to-3D ML Data Platform](https://github.com/Rohit-Roby/text-to-3d-ml-platform) — text-conditioned 3D generation with an offline smoke-test path.
3. [Black–Scholes Greeks Dashboard](https://github.com/Rohit-Roby/BlackScholes-Greeks-Dashboard) — FastAPI options analytics and interactive visualisation.

Descriptions are intended to reflect each project's README; they do not imply deployed public demo URLs unless verified.

## Preview locally

Open `index.html` in a browser, or run from this folder:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000.

## Deploy

In repository **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)` and save. Your repository Pages URL will normally be `https://Rohit-Roby.github.io/portfolio/`. Alternatively deploy with Netlify or Vercel as a static website.

> This repository is currently a separate site from `Rohit-Roby.github.io`. Deploying it does not automatically replace the user-site repository.

## Maintenance

- Edit `index.html` to update project descriptions, links and contact details.
- Change design tokens in the `:root` block of `styles.css`.
- Keep project claims grounded in verified implementations; refresh descriptions when repos change.
- Avoid including private addresses, API keys, phone numbers, or client-confidential details.

## License

Site content and design © Rohit Roby. Third-party projects and dependencies retain their own licenses.
