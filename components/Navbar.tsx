import Link from "next/link";

export function Navbar() {
  return (
    <header>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/products">Shop</Link>
        <Link href="/commissions">Commissions</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}