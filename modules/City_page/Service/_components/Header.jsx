export default function Header({ title }) {
  return (
    <div className="w-full flex flex-col gap-2">
      <span className="text-MainOrange sm:text-2xl text-xl font-medium">
        Notre service
      </span>
      <h1 className="max-w-[900px] font-extrabold text-Gray [font-size:_clamp(2.25em,5vw,3rem)]">
        {title}
      </h1>
    </div>
  );
}
