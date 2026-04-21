import TopBar from "./TopBar";
import Navbar from "./Navbar";
import NavActiveSync from "./NavActiveSync";

export default function Header() {
  return (
    <header className="ree-header fixed-top" style={{ zIndex: 10000 }}>
      <TopBar />
      <Navbar />
      {/*
        Client-side companion to Navbar. The server Navbar sets the correct
        `active-link` class on the first page render (via middleware's
        x-pathname header), but Next.js does NOT re-render the root layout on
        client-side navigation — so without this component the highlight
        stays stuck on whichever tab was active at initial load (usually
        Home). NavActiveSync listens to pathname changes and keeps the
        top-level navbar highlight in sync on every route change.
      */}
      <NavActiveSync />
    </header>
  );
}
