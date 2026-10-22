import { Button } from "components/ui/button"
import { Input } from "components/ui/input"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-white text-muted-foreground">
      <div className="mx-auto max-w-container-md px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Newsletter</h3>
            <p>Subscribe to receive updates, access to exclusive deals, and more.</p>
            <div className="space-y-2 sm:max-w-md">
              <Input type="email" placeholder="Enter your email" aria-label="Email for newsletter" />
              <Button
                type="submit"
                className="w-full transition-[transform,background] duration-200 hover:bg-black/85 active:scale-[0.99]"
              >
                Subscribe
              </Button>
            </div>
          </div>
          <div className="flex justify-center gap-24 sm:justify-end">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">Shop</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/search" className="transition-colors hover:text-gray-700" prefetch={false}>
                    All Products
                  </Link>
                </li>
                <li>
                  <Link href="/category/electronics" className="transition-colors hover:text-gray-700" prefetch={false}>
                    Electronics
                  </Link>
                </li>
                <li>
                  <Link href="/category/fashion" className="transition-colors hover:text-gray-700" prefetch={false}>
                    Fashion
                  </Link>
                </li>
                <li>
                  <Link href="/category/sports-and-outdoors" className="transition-colors hover:text-gray-700" prefetch={false}>
                  Sports &amp; Outdoors
                  </Link>
                </li>
              </ul>
            </div>

            <div className="max-w-xs space-y-4">
              <h3 className="text-lg font-semibold text-primary">Contact</h3>
              <ul className="space-y-2">
                <li>27 Market Arcade, Banjara Hills, Hyderabad 500034</li>
                <li>
                  <a href="tel:+914045009100" className="transition-colors hover:text-gray-700">
                    +91 40 4500 9100
                  </a>
                </li>
                <li>
                  Alternative:{" "}
                  <a href="tel:+914045009101" className="transition-colors hover:text-gray-700">
                    +91 40 4500 9101
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@brightbazar.shop" className="transition-colors hover:text-gray-700">
                    hello@brightbazar.shop
                  </a>
                </li>
                <li>
                  Alternative:{" "}
                  <a href="mailto:support@brightbazar.shop" className="transition-colors hover:text-gray-700">
                    support@brightbazar.shop
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-muted-foreground/20 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="text-sm">© {new Date().getFullYear()} Bright Bazar.</div>
          </div>
          <div className="mt-8 flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <Link
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-muted-foreground transition-colors hover:text-primary"
              prefetch={false}
            >
              <svg height="20" viewBox="0 0 283 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="currentColor"
                  d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"
                />
              </svg>
              <span>Hosted on Vercel</span>
            </Link>
            <Link
              href="https://v0.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4 inline-flex w-fit items-center whitespace-nowrap rounded-lg border border-transparent bg-black px-5 py-1 text-sm font-medium text-white transition-colors hover:bg-black/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              prefetch={false}
            >
              Designed with <V0Icon className="ml-1 size-5 fill-white" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function V0Icon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" strokeLinejoin="round" {...props}>
      <title>{"Logo v0"}</title>
      <path
        fillRule="evenodd"
        d="M9.503 5.5h3.75c.06 0 .117.004.174.012L9.512 9.427A1.262 1.262 0 0 1 9.5 9.25V5.5H8v3.75A2.75 2.75 0 0 0 10.75 12h3.75v-1.5h-3.75c-.06 0-.12-.004-.177-.012L14.49 6.57c.009.059.013.119.013.18v3.75h1.5V6.75A2.75 2.75 0 0 0 13.253 4h-3.75v1.5ZM0 5v.004l5.125 6.527c.616.784 1.876.348 1.876-.649V5h-1.5v4.58L1.904 5H0Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

