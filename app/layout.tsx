import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Interview Question Difficulty Calibrator',
  description: 'Calibrate coding interview question difficulty with AI-powered ratings, time estimates, and success rate predictions.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="dd37c101-73e7-4d3e-8cbd-4a7786655d97"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
