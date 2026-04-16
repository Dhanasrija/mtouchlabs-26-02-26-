import TopBar from "./TopBar";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="ree-header fixed-top" style={{ zIndex: 10000 }}>
      <TopBar />
      <Navbar />
    </header>
  );
}
