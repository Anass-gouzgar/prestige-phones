export default function Header({title}) {
  return (
    <div className="w-full flex flex-col gap-2">
      <span className="text-MainOrange sm:text-2xl text-xl font-medium">
        Réparation mobile
      </span>
      <h1 className="font-extrabold text-Gray [font-size:_clamp(2.25em,5vw,3rem)]">
        {title}
      </h1>
    </div>
  );
}
