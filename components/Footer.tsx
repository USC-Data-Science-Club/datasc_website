import GridBackdrop from "./ui/GridBackdrop";

export default function Footer() {
  return (
    <footer className="relative border-t border-ink/10 px-6 py-12">
      <GridBackdrop />
      <div className="relative mx-auto w-full max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="DataSC Logo" className="h-8 w-8" />
              <span className="text-xl font-semibold">DataSC</span>
            </div>
            <p className="text-sm text-ink/55">
              USC's home for hands-on data science learning, built to be welcoming,
              practical, and career-relevant.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.1em] text-gold/80">
              quick_links
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-ink/60">
              <li><a href="/#about" className="transition hover:text-gold-raw">About</a></li>
              <li><a href="/#curriculum" className="transition hover:text-gold-raw">Curriculum</a></li>
              <li><a href="/#projects" className="transition hover:text-gold-raw">Projects</a></li>
              <li><a href="/#eboard" className="transition hover:text-gold-raw">Eboard</a></li>
              <li><a href="/#socials" className="transition hover:text-gold-raw">Socials</a></li>
              <li><a href="/#faq" className="transition hover:text-gold-raw">FAQ</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.1em] text-gold/80">
              follow_us
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-ink/60">
              <li>
                <a
                  href="https://www.instagram.com/datasc.official"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-gold-raw"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/datasc/"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-gold-raw"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=datasc@usc.edu"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-gold-raw"
                >
                  Email Us
                </a>
              </li>
              <li>
                <a
                  href="https://usc.enterprise.slack.com/archives/C0B9S4D8MT3"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-gold-raw"
                >
                  Slack
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.1em] text-gold/80">
              contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-ink/60">
              <li>USC University Park</li>
              <li>Los Angeles, CA 90089</li>
              <li>
                <a href="mailto:datasc@usc.edu" className="transition hover:text-gold-raw">
                  datasc@usc.edu
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-ink/10 pt-8 text-center font-mono text-[13px] text-ink/40">
          © {new Date().getFullYear()} DataSC at USC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
