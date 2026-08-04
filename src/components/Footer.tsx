import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-subtle py-8 px-5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js &
          Framer Motion.
        </p>
        <div className="flex items-center gap-5">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            LinkedIn
          </a>
          <a href={profile.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            YouTube
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-primary">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
