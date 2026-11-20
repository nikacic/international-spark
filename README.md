# International Spark

Croatian company website. Plain HTML, CSS and JavaScript; no build step.

## Preview

Run `python -m http.server 8000 --directory international-spark-website` from this repository and open http://localhost:8000.

## Publish

Push to `main`, then set repository Settings > Pages > Source to GitHub Actions. The included workflow publishes the `international-spark-website` folder. All asset URLs are relative so the website supports a GitHub Pages project URL and a future custom domain.

## Review version

Contact details are intentionally omitted. The contact form is visibly disabled until a real endpoint is configured. Set `data-endpoint` on the form to the actual HTTPS Formspree URL to activate delivery; verify delivery before customer use. Add verified phone, email, address and OIB, update the Electrician JSON-LD, and add the domain-specific canonical and Open Graph image URLs when the domain is available. No fictitious contact details or domain are published.

The original design brief and reference screenshots are in `international-spark-website`.
