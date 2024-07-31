import Link from "next/link";

export default function Button() {
  return (
    <Link
      href="/simulateur"
      className="w-fit bg-MainOrangeLight text-white px-7 py-2 rounded-lg shadow-lg hover:-translate-y-[3px] hover:shadow-xl duration-300"
    >
      Réparer mon appareil
    </Link>
  );
}
