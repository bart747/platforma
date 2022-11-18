import Link from "next/link"

function Footer() {
  return (
    <footer className="m-8 text-sm mx-auto max-w-xl">
      <div>©2016-2022 Bartosz Wieczorek.</div>
      <div>
        Some rights reserved —{" "}
        <Link href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</Link> —
        please attribute and link back.
      </div>
    </footer>
  );
}

export default Footer;
