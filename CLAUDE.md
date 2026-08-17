# hyades.github.com

Aayush Ahuja's personal site/blog, served via GitHub Pages at `hyades/hyades.github.com`. This is
the **`dev`** branch — the actual Jekyll source. Do all editing here, both for site content and
the resume.

## Branch structure — important
- **`dev`** (this branch) — Jekyll site (Chalk theme): `_config.yml`, `_posts/`, `_layouts/`,
  `_includes/`, `assets/`, Ruby toolchain. All content and tooling changes belong here.
- **`master`** — pure generated build output, no source files. Never hand-edit it; anything
  added there directly (not produced by a `dev` build) gets wiped by the next deploy.
- **Deploy** (`bin/deploy`, run from `dev`): builds with `bundle exec jekyll build`, deletes
  everything in the repo root except `_site` and `.git`, moves `_site/*` into place, and
  force-pushes the result to `master`. So: commit on `dev` → run `bin/deploy` → live site
  updates.

## Toolchain (modernized 2026-08)
Ruby 3.3.12 (via `rbenv`, pinned in `.ruby-version`), Jekyll 4.4.1, native Sass via
`jekyll-sass-converter`/`sass-embedded` (Dart Sass) — no more Ruby `sass` gem. `jekyll-assets`
(Sprockets-based, capped Jekyll at 3.x) and Bower have been removed entirely:
- `_assets/` was renamed to `assets/` and is now copied by Jekyll natively as a static directory
  — no asset pipeline/manifest step. `_foo.scss` partials vs. plain `.scss` (with Jekyll front
  matter) follow Jekyll's native Sass-partial convention.
- Former Bower JS deps (jQuery, Fluidbox, ScrollReveal) are vendored directly under
  `assets/javascripts/vendor/`, fetched once via `npm pack`/`npm install` and committed — not a
  live dependency.
- Templates reference assets with the `relative_url` Liquid filter (e.g.
  `{{ '/assets/javascripts/application.js' | relative_url }}`), not `{{ site.baseurl }}/...`
  string concatenation — since `baseurl: /` in `_config.yml`, the latter produces a
  protocol-relative `//assets/...` URL that browsers resolve to a different host. Always use
  `relative_url` for any new asset reference.

## Site development
```
bin/setup              # installs Ruby (Bundler) deps
bundle exec jekyll serve   # local dev server
bin/deploy              # build + force-push to master (publishes)
```
Posts live in `_posts/` (Markdown, Jekyll front matter), pages like `about.html`/`index.html` at
the root, layouts in `_layouts/`, partials in `_includes/`, styles/scripts/images in `assets/`.

**Gotcha:** `bin/deploy` shells out to `bundle`, which needs rbenv's shim for Ruby 3.3.12 on
`PATH`. A non-interactive shell (e.g. an agent's Bash tool) often doesn't have rbenv initialized,
so `bundle` silently resolves to the system Ruby (2.6) instead and `bundle exec jekyll build`
fails with a `Could not find 'bundler'` error. If that happens, run:
```
export PATH="$HOME/.rbenv/shims:$PATH"
```
first, then re-run `bin/deploy`. Check with `ruby -v` — it should report `3.3.12`, not `2.6.x`.
`bin/deploy` uses `set -e` and only does its destructive branch/file work *after* the Jekyll
build succeeds, so a build failure at this step is safe to just fix and retry.

## Resume workflow
Source of truth is `files/resume/build_resume.js` — a Node script (uses the `docx` package) that
generates the docx from a single `DATA` object defined at the top of the script (name, contact,
summary, `experience[]`, education, skills). Edit `DATA`, not the docx-building helper functions,
for content changes.

To update the resume:
```
cd files/resume
npm install                # only needed once / after dependency changes
node build_resume.js       # writes Aayush_Ahuja_Resume.docx
```
Commit both `build_resume.js` and the regenerated `Aayush_Ahuja_Resume.docx` —
`files/resume/node_modules/` is excluded via `.gitignore`, but `package.json` and
`package-lock.json` **are** tracked (small, deterministic installs).

**The live/linked resume is still the PDF**, not the docx: `resume/index.html` redirects to
`/files/Aayush_Ahuja_Resume.pdf`. There's no local docx→PDF conversion step (Word/Pages export
mangles the layout, and no LibreOffice is installed) — instead, use the `gws` CLI to round-trip
the docx through Google Docs' renderer, which is what produces the actual polished PDF (confirmed
via the PDF's `/Producer (Skia/PDF ... Google Docs Renderer)` metadata):
```
cd files/resume
node build_resume.js
gws drive files create \
  --json '{"name":"tmp-resume","mimeType":"application/vnd.google-apps.document"}' \
  --upload Aayush_Ahuja_Resume.docx \
  --upload-content-type application/vnd.openxmlformats-officedocument.wordprocessingml.document \
  --params '{"fields":"id"}'
# copy the returned id into both calls below
gws drive files export --params '{"fileId":"<id>","mimeType":"application/pdf"}' \
  --output ../Aayush_Ahuja_Resume.pdf
gws drive files delete --params '{"fileId":"<id>"}'   # clean up the temp Google Doc
```
Use the `gws` CLI directly for this — not Claude's Google Workspace connector/MCP tools; binary
docx uploads through the connector have been unreliable, and the user has a standing preference
for `gws`. `files/` also has several stale duplicate exports from past iterations
(`Resume-AayushAhuja-Latest*.pdf/.doc`, `Aayush_Ahuja_Resume.doc`, etc.) — safe to ignore or clean
up, `build_resume.js` / `Aayush_Ahuja_Resume.pdf` are the ones that matter.

### End-to-end checklist
1. Edit the `DATA` object in `files/resume/build_resume.js`.
2. `cd files/resume && node build_resume.js` — regenerates `Aayush_Ahuja_Resume.docx`.
3. Round-trip that docx through `gws` (commands above) — writes straight to
   `files/Aayush_Ahuja_Resume.pdf`, the file `/resume` actually links to.
4. Sanity-check the PDF (open it, or read it — it should still be **1 page**; if it overflows to
   2, cut content rather than shrinking fonts/margins, to stay visually consistent with past
   versions).
5. `git add` the four files that actually change: `files/resume/build_resume.js`,
   `files/resume/Aayush_Ahuja_Resume.docx`, `files/Aayush_Ahuja_Resume.pdf`, and this `CLAUDE.md`
   if it changed too. Commit on `dev`.
6. `git push origin dev`.
7. `bin/deploy` from `dev` (see the rbenv `PATH` gotcha above if `bundle` fails) — this is the
   step that actually publishes to the live site via `master`.
