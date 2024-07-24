/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/n6fjpxIPU0m
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Syne } from 'next/font/google'
import { Rethink_Sans } from 'next/font/google'

syne({
  subsets: ['latin'],
  display: 'swap',
})

rethink_sans({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link";
import { Header } from "./header";

export function Landing() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="px-4 md:px-6 w-full">
            <div className="flex w-full justify-around items-center flex-nowrap">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Elasticsearch Management made easy.
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    View the state of your cluster in a blink. Cortex is the
                    ultimate tool for Elasticsearch admins.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Get Started
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <img src="/flow.png" alt="Hero" width="600" />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="flex flex-col px-4 md:px-6 items-center justify-around space-y-4">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Powerful Tools for Elasticsearch Admins
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Manage your Elasticsearch clusters with ease. Monitor
                  performance, visualize data, and scale your infrastructure.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Real-Time Monitoring</h3>
                  <p className="text-muted-foreground">
                    Get real-time insights into your Elasticsearch clusters.
                    Monitor performance, track errors, and receive alerts.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Cluster Management</h3>
                  <p className="text-muted-foreground">
                    Easily manage your Elasticsearch clusters. Scale up or down,
                    perform rolling upgrades, and more.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Data Visualization</h3>
                  <p className="text-muted-foreground">
                    Visualize your Elasticsearch data with powerful dashboards
                    and charts. Gain deeper insights into your data.
                  </p>
                </div>
              </div>
              <img
                src="/stats.png"
                alt="Image"
                className="w-full h-full object-cover rounded-lg shadow-lg justify-end"
              />
            </div>
          </div>
        </section>
        <section className="w-full p-12 md:p-24 lg:p-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Written in Rust & Typescript ⚡
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Cortex is built with performance in mind. Our backend is written
                in Rust, while the frontend is built with TypeScript and React.
                Cortex is fully open source and free to use.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <GaugeIcon className="w-6 h-6 mr-4 text-primary" />
                  <div>
                    <h3 className="font-medium mb-2">
                      Shard Relocation Information
                    </h3>
                    <p>
                      Cortex provides detailed information about shard
                      relocation, helping you understand the state of your
                      Elasticsearch cluster.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <LayoutPanelLeftIcon className="w-6 h-6 mr-4 text-primary" />
                  <div>
                    <h3 className="font-medium mb-2">
                      Cluster Architecture Visualization
                    </h3>
                    <p>
                      Cortex features flowcharts that visually represent the
                      architecture of your Elasticsearch cluster, making it
                      easier to understand and manage.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <LaptopIcon className="w-6 h-6 mr-4 text-primary" />
                  <div>
                    <h3 className="font-medium mb-2">
                      Modern and Responsive UI
                    </h3>
                    <p>
                      The Cortex interface is designed to be intuitive and
                      responsive, providing a seamless user experience on any
                      device.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <RocketIcon className="w-6 h-6 mr-4 text-primary" />
                  <div>
                    <h3 className="font-medium mb-2">High Performance</h3>
                    <p>
                      Cortex is powered by Rust, ensuring high performance and
                      reliability when managing your Elasticsearch clusters.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Cortex. This is an open source, noncommercial project.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function Clock1Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 14.5 8" />
    </svg>
  );
}

function GaugeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>
  );
}

function LaptopIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
    </svg>
  );
}

function LayoutPanelLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="7" height="18" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
    </svg>
  );
}

function Link2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 17H7A5 5 0 0 1 7 7h2" />
      <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
      <line x1="8" x2="16" y1="12" y2="12" />
    </svg>
  );
}

function RocketIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
