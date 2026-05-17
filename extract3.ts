async function run() {
  const urls = [
    'https://newswatchgh.com/catholics-urged-to-venture-into-politics-to-change-society/'
  ];

  for (const url of urls) {
    try {
        const res = await fetch(url);
        const html = await res.text();
        const imgMatches = [...html.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi)];
        console.log("URL:", url);
        for (const match of imgMatches.slice(0, 10)) {
            if (!match[1].includes('logo') && !match[1].includes('avatar') && !match[1].includes('icon')) {
                console.log(match[1]);
            }
        }
    } catch(e) {
        console.log(e);
    }
  }
}

run();
