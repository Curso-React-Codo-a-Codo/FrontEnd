import Link from "next/link";

export default function Navbar(props) {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/testing">Test</Link>
        </li>
        <li>
          <Link href="/api/hello">API</Link>
        </li>
      </ul>
    </div>
  );
}
