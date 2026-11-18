// Optional HTTP preview. Run: node preview.cjs
// The page also works by opening index.html directly.
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = __dirname;
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg'};
const server = http.createServer((req, res) => {
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); }
  catch { res.writeHead(400); return res.end('Bad request'); }
  const relative = pathname.replace(/^\/+/, '') || 'index.html';
  const file = path.resolve(root, relative);
  if (file !== root && !file.startsWith(root + path.sep)) { res.writeHead(403); return res.end('Forbidden'); }
  // Serve just the public page, not authoring notes or local scripts.
  if (!['index.html','styles.css','script.js'].includes(relative) && !/^assets[\/\\][^\/\\]+$/.test(relative)) {
    res.writeHead(404); return res.end('Not found');
  }
  fs.readFile(file, (error, data) => {
    if (error) { res.writeHead(404); return res.end('Not found'); }
    res.writeHead(200, {'Content-Type':types[path.extname(file)] || 'application/octet-stream','Cache-Control':'no-store'});
    res.end(data);
  });
});
server.on('error', error => { console.error(error.message); process.exitCode = 1; });
server.listen(Number(process.env.PORT) || 4173, '127.0.0.1', () => console.log(`HyBrain preview: http://127.0.0.1:${server.address().port} - press Ctrl+C to stop.`));
