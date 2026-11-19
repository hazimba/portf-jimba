import "server-only";

export type SEOData = {
  date: string;
  clicks: number;
  impressions: number;
  ctr: number;
};

type SearchAnalyticsResponse = {
  rows?: {
    keys: string[];
    clicks: number;
    impressions: number;
    ctr: number;
  }[];
};

type OAuthTokenResponse = {
  access_token: string;
  expires_in: number;
  token_type: string;
};

// const SITE_URL = "sc-domain:kembumijati.com";

async function getAccessToken(): Promise<string> {
  const clientId = process.env.GSC_CLIENT_ID;
  const clientSecret = process.env.GSC_CLIENT_SECRET;
  const refreshToken = process.env.GSC_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error("Missing Google OAuth credentials");
  }

  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      grant_type: "refresh_token",
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    const error = await response.text();
    console.error("Google OAuth error:", response.status, error);
    throw new Error(`Google OAuth failed: ${response.status}`);
  }

  const result = (await response.json()) as OAuthTokenResponse;

  if (!result.access_token) {
    throw new Error("Google OAuth did not return an access token");
  }

  return result.access_token;
}

export async function getSearchConsoleData(
  siteUrl: string
): Promise<SEOData[]> {
  const accessToken = await getAccessToken();

  const pacificToday = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Los_Angeles",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());

  const endDate = new Date(`${pacificToday}T12:00:00Z`);
  endDate.setUTCDate(endDate.getUTCDate() - 3);

  const startDate = new Date(endDate);
  startDate.setUTCDate(startDate.getUTCDate() - 27);

  const formatDate = (date: Date) => date.toISOString().slice(0, 10);

  const response = await fetch(
    `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(
      siteUrl
    )}/searchAnalytics/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        startDate: formatDate(startDate),
        endDate: formatDate(endDate),
        dimensions: ["date"],
        type: "web",
        aggregationType: "byProperty",
        dataState: "final",
        rowLimit: 100,
      }),
      next: {
        revalidate: 86400,
      },
    }
  );

  if (!response.ok) {
    const error = await response.text();
    console.error("Search Console API error:", response.status, error);

    throw new Error(`Google Search Console API failed: ${response.status}`);
  }

  const result = (await response.json()) as SearchAnalyticsResponse;

  return (result.rows ?? []).map((row) => ({
    date: row.keys[0],
    clicks: row.clicks,
    impressions: row.impressions,
    ctr: row.ctr * 100,
  }));
}
