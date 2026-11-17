const fs = require('fs');
let html = fs.readFileSync('fanout.html', 'utf8');

const target = `    <script>
      if (location.hash.indexOf("access_token") !== -1) {
        history.replaceState(null, "", location.pathname + location.search);
      }
    </script>`;

const shim = `    <script>
      if (location.hash.indexOf("access_token") !== -1) {
        history.replaceState(null, "", location.pathname + location.search);
      }
    </script>

    <!-- Local dev CORS interceptor for remote telemetry -->
    <script>
      (function() {
        const _fetch = window.fetch;
        window.fetch = function(input, init) {
          const url = typeof input === 'string' ? input : (input && input.url ? input.url : '');
          if (url && (url.includes('fanout-analytics') || url.includes('/v1/sessions'))) {
            return Promise.resolve(new Response(JSON.stringify({ ok: true, status: 'mocked' }), {
              status: 200,
              headers: { 'Content-Type': 'application/json' }
            }));
          }
          return _fetch.apply(this, arguments);
        };
      })();
    </script>`;

if (html.includes(target)) {
  html = html.replace(target, shim);
} else {
  // Try with \r\n if on Windows
  const targetCRLF = target.replace(/\n/g, '\r\n');
  const shimCRLF = shim.replace(/\n/g, '\r\n');
  if (html.includes(targetCRLF)) {
    html = html.replace(targetCRLF, shimCRLF);
  }
}

fs.writeFileSync('index.html', html, 'utf8');
console.log('Restored index.html successfully!');
