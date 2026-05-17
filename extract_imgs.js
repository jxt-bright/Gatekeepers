const https = require('https');
const http = require('http');

function fetchUrl(urlStr) {
  return new Promise((resolve) => {
    const lib = urlStr.startsWith('https') ? https : http;
    lib.get(urlStr, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', () => resolve(''));
  });
}

async function run() {
  const urls = [
    'https://ghanaiantimes.com.gh/aacc-appoints-agbeko-as-executive-member-of-epeppa/',
    'https://www.cbcgha.org/the-bishops/most-rev-matthew-k-gyamfi/',
    'https://epistlesofrealitiesblog.wordpress.com/2021/05/12/part-2-my-encounter-with-the-archbishop-duncan-williams-celebrating-a-general/'
  ];

  for (const url of urls) {
    const html = await fetchUrl(url);
    const imgMatches = [...html.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi)];
    console.log("URL:", url);
    for (const match of imgMatches.slice(0, 15)) {
        console.log(match[1]);
    }
  }
}

run();
