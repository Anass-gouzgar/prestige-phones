// components
import Header from "./_components/Header";
import Description from "./_components/Description";
import Streets from "./_components/Streets";
import Map from "./_components/Map";
import RemoteRepair from "./_components/RemoteRepair";
import Button from "./_components/Button";

export default function index({ city, map, title, description }) {
  return (
    <div className="w-full flex justify-center items-center sm:px-5 px-2">
      <div className="w-full max-w-[1200px] flex flex-col sm:gap-16 gap-10">
        <Header title={title} />
        <Description description={description} />
        <Streets city={city} />
        <Map map={map} />
        <RemoteRepair />
        <Button />
      </div>
    </div>
  );
}
