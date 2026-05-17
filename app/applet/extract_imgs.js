async function run() {
  const urls = [
    'https://ghanaiantimes.com.gh/aacc-appoints-agbeko-as-executive-member-of-epeppa/',
    'https://www.cbcgha.org/the-bishops/most-rev-matthew-k-gyamfi/',
    'https://epistlesofrealitiesblog.wordpress.com/2021/05/12/part-2-my-encounter-with-the-archbishop-duncan-williams-celebrating-a-general/'
  ];

  for (const url of urls) {
    try {
        const res = await fetch(url);
        const html = await res.text();
        const imgMatches = [...html.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi)];
        console.log("URL:", url);
        for (const match of imgMatches) {
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
