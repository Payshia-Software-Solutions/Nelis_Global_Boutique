
import Script from 'next/script';

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "https://server-nelis.payshia.com";

async function getAnalyticsId() {
  try {
    const response = await fetch(`${apiBaseUrl}/key-settings/get/google-analytics-id?company_id=3&location_id=4`, {
      next: { revalidate: 3600 } // Revalidate every hour
    });
    if (!response.ok) {
      console.error('Failed to fetch Google Analytics ID:', response.statusText);
      return null;
    }
    const data = await response.json();
    return data.value || null;
  } catch (error) {
    console.error('Error fetching Google Analytics ID:', error);
    return null;
  }
}

export async function GoogleAnalytics() {
  const gaId = await getAnalyticsId();

  if (!gaId) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `,
        }}
      />
    </>
  );
}
