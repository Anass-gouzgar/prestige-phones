// components
import Header from "./_components/Header";
import Description from "./_components/Description";

export default function Quality() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full max-w-[1400px] flex flex-col items-center gap-10 py-16 sm:px-5 px-2">
        <Header />
        <Description />
      </div>
    </div>
  );
}
