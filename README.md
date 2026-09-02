# Basic Informational Site

A minimal Express.js server serving static HTML pages with route-based handling. Created as part of [The Odin Project](https://www.theodinproject.com/lessons/nodejs-basic-informational-site) Node.js curriculum.

## What it does

Serves four static HTML pages based on the request route:

| Route          | Page             |
|----------------|------------------|
| `/`            | `index.html`     |
| `/about`       | `about.html`     |
| `/contact-me`  | `contact-me.html`|
| anything else  | `404.html` (with a 404 status code) |

## Notes

- Built with [Express](https://expressjs.com/), using `app.get()` for each route and `res.sendFile()` to serve pages.
- Unmatched routes are caught with `app.use()` as a fallback handler.
- File paths are resolved with `__dirname` so the server works regardless of the directory it's run from.