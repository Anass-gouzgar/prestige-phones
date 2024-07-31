import Image from "next/image";

// icons
import appleIcon from "@/public/assets/images/apple-icon.svg";

export default function Step({ index, step }) {
  return (
    <div className="w-full flex justify-center items-start">
      <div className="w-full max-w-[400px] h-auto flex flex-col gap-2">
        <Image src={appleIcon} className="w-16" alt="step icon" />
        <div>
          <span className="text-sm text-MainOrange">Étape {index + 1}</span>
        </div>
        <h3 className="font-semibold text-lg">{step?.title}</h3>
        <p className="text-sm text-slate-600 text-justify">
          {step?.description}
        </p>
      </div>
    </div>
  );
}
