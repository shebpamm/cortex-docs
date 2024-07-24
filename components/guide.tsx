/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/Jinc3evcAmi
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Arimo } from 'next/font/google'

arimo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link";
import { Header } from "./header";

export function Guide() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12">
          <div>
            <h1 className="text-3xl font-bold mb-4">Welcome to Cortex!</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Cortex is a modern, intuitive, and feature-rich admin interface
              for managing and monitoring Elasticsearch clusters. Built with
              Rust and TypeScript, Cortex combines performance with a sleek user
              experience.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Prerequisites</h2>
            <div className="flex gap-2 text-muted-foreground">
              <CheckIcon className="w-5 h-5 mr-2 text-primary" />
              <span>Docker</span>
              <CheckIcon className="w-5 h-5 mr-2 text-primary" />
              <span>Elasticsearch (v7.x or higher)</span>
            </div>
            <h2 className="text-2xl font-bold mt-8 mb-4">
              Running Cortex with Docker
            </h2>
            <ol className="space-y-4 text-muted-foreground">
              <li>
                <div>
                  <p>
                    Start the Cortex container and connect it to your
                    Elasticsearch cluster:
                  </p>
                  <pre className="bg-muted p-4 rounded-lg">
                    <code>
                      docker run --network host --name cortex -e
                      CORTEX_PORT=9999 -it
                      shebpamm/cortex:latest
                    </code>
                  </pre>
                </div>
              </li>
            </ol>
            <h2 className="text-2xl font-bold mt-8 mb-4">Next Steps</h2>
            <Link href="/docs" className="text-m font-medium hover:underline underline-offset-4">
              Now that you've set up Cortex, explore the project further!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckIcon(props) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

