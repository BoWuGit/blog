const fs = require('fs');
const pkg = require('./package.json');
const filename = 'assets/js/main.min.js';
const script = fs.readFileSync(filename);
const padStart = str => ('0' + str).slice(-2)
const dateObj = new Date;
const date = `${dateObj.getFullYear()}-${padStart(dateObj.getMonth() + 1)}-${padStart(dateObj.getDate())}`;
<<<<<<< HEAD
const banner = `/*!
=======
const banner = `---
layout:
---

/*!
>>>>>>> f227c81aa0e2fed521dea34ed86b9214c8289277
 * Minimal Mistakes Jekyll Theme ${pkg.version} by ${pkg.author}
 * Copyright ${dateObj.getFullYear()} Michael Rose - mademistakes.com | @mmistakes
 * Licensed under ${pkg.license}
 */
`;

if (script.slice(0, 3) != '/**') {
  fs.writeFileSync(filename, banner + script);
}