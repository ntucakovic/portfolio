# Portfolio - Online Business Card
 
This project is intended to show progress on path of conquering React as it's my first project in React world (apart from mini projects during various online courses).

Started on September 30th, 2017 as an attempt to rewrite old 2014 site in current technologies.

First release is live on production since 3rd October.

Few notes and credits:
- Project started with `create-react-app`, which brings its (although minimal) architectural decisions,
which I'm not sure I'm quite fond of. Might take a different path along the way.
- Font Awesome 5 is used for iconography on both website and PDF resume.
- Used [mattboldt/typed.js](https://github.com/mattboldt/typed.js/) for typewriter effect on `Slogan`.

TODO:
- Improve SCSS on project.
    - SCSS architecture, check for better practices.
    - ~~Improve variable structure.~~ 
    - Improve components' styles and selectors.
    - ~~Integrate sass lint in build process and add rules to project.~~
- Add slide for work experience to match PDF resume.
- Add slide to highlight photography and favorite photos.
    - Possibly integrate with Flickr.
    - Take art direction in consideration when cropping photos.
    - Blur small SD image with SVG until proper quality is loaded, to improve perceived load time.  
- Print and no-js available experience should look and feel exactly like PDF resume.
    - Add `print.css` and needed markup in order to show resume exactly as on PDF resume.
    - Use `print.css` in case visitor disabled JS (Update `<noscript />` content).
    - Place resume markup in `<noscript />` and fetch from JS in order to have it available for print and to avoid duplicate content on indexing.
- Improve performance
    - Maybe place SVG paths in javascript files to avoid requests altogether. Since site is served over HTTP/2, more parallel requests are available so creating SVG sprite doesn't make much sense as it used to.
