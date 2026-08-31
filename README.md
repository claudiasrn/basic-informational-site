# Basic Informational Site

A minimal Node.js server built with the core `http`, `fs/promises`, and `url` modules — no frameworks. Created as part of [The Odin Project](https://www.theodinproject.com/lessons/nodejs-basic-informational-site) Node.js curriculum.

## What it does

Serves four static HTML pages based on the request URL:

| Route          | Page             |
|----------------|------------------|
| `/`            | `index.html`     |
| `/about`       | `about.html`     |
| `/contact-me`  | `contact-me.html`|
| anything else  | `404.html` (with a 404 status code) |

## Notes

- Routing is done by parsing `req.url` with the `URL` class and matching `.pathname`.
- File paths are resolved with `__dirname` so the server works regardless of the directory it's run from.
- Failed file reads return a `500` response.