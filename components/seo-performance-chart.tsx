"use client";

import { useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { SEOData } from "@/lib/google-search-console";

type Metric = "clicks" | "impressions" | "ctr";

export default function SEOPerformanceChart({ data }: { data: SEOData[] }) {
  const [metric, setMetric] = useState<Metric>("impressions");

  const clicks = data.reduce((sum, row) => sum + row.clicks, 0);
  const impressions = data.reduce((sum, row) => sum + row.impressions, 0);
  const ctr = impressions ? (clicks / impressions) * 100 : 0;

  const metrics = [
    { key: "clicks", label: "Clicks", value: clicks.toLocaleString() },
    {
      key: "impressions",
      label: "Impressions",
      value: impressions.toLocaleString(),
    },
    { key: "ctr", label: "CTR", value: `${ctr.toFixed(1)}%` },
  ] as const;

  return (
    <section className="rounded-xl border bg-card/50 p-4 space-y-5">
      <div>
        <h2 className="font-bold text-base">SEO Performance</h2>
        <p className="text-xs text-muted-foreground mt-1">
          Google Search Console · Latest 28-day reporting window
        </p>
      </div>

      {data.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          No Search Console data available for this period.
        </p>
      ) : (
        <>
          <div className="grid grid-cols-3 gap-2">
            {metrics.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => setMetric(item.key)}
                aria-pressed={metric === item.key}
                className={`rounded-lg border p-2 text-center transition-colors ${
                  metric === item.key
                    ? "border-primary bg-primary/10"
                    : "hover:bg-muted"
                }`}
              >
                <span className="block text-[10px] text-muted-foreground">
                  {item.label}
                </span>
                <span className="block text-sm font-bold mt-1">
                  {item.value}
                </span>
              </button>
            ))}
          </div>

          <div className="h-56 w-full min-w-0">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
                margin={{ top: 8, right: 8, left: -24, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                <XAxis
                  dataKey="date"
                  tick={{ fontSize: 9 }}
                  tickFormatter={(value: string) => value.slice(5)}
                  minTickGap={15}
                />
                <YAxis
                  tick={{ fontSize: 10 }}
                  width={48}
                  tickFormatter={(value: number) =>
                    metric === "ctr" ? `${value}%` : String(value)
                  }
                />
                <Tooltip
                  formatter={(value) => [
                    metric === "ctr"
                      ? `${Number(value).toFixed(2)}%`
                      : Number(value).toLocaleString(),
                    metrics.find((m) => m.key === metric)?.label,
                  ]}
                />
                <Line
                  type="monotone"
                  dataKey={metric}
                  stroke="#4ADE80"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 4 }}
                  connectNulls={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <p className="text-[10px] text-muted-foreground">
            Reporting period: {data[0].date} to {data[data.length - 1].date}.
            Updated from Google&apos;s latest available finalized data.
          </p>
        </>
      )}
    </section>
  );
}
