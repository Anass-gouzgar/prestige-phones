// components
import Header from "./_components/Header";
import Description from "./_components/Description";

export default function index({ title, description }) {
  return (
    <div className="w-full flex justify-center items-center py-16 sm:px-5 px-2">
      <div className="w-full max-w-[1200px] flex flex-col sm:gap-16 gap-10">
        <Header title={title} />
        <Description description={description} />
      </div>
    </div>
  );
}
