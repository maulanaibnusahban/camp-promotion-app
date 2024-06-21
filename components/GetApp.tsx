import React from "react";
import Button from "./Button";
import Image from "next/image";

function GetApp() {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">Get for free now!</h2>
          <p className="regular-16 text-gray-10">Availible on iOS and Android</p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button type="button" title="Download App" variant="btn_white" icon="/apple.svg" full={true} />
            <Button type="button" title="Download App" variant="btn_dark_green_outline" icon="/android.svg" full={true} />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <Image src="/phones.png" alt="phones" height={550} width={870} />
        </div>
      </div>
    </section>
  );
}

export default GetApp;
