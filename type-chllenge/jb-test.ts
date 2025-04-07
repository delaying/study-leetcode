// 4/10 is as 타입문법 확인해보기!!

type AdDefaultType = {
  adId: string;
};

export type AdDisplayBannerType = {
  displayType: "BANNER";
} & AdDefaultType;

export type AdDisplayCardType = {
  displayType: "CARD";
  displayText: string;
} & AdDefaultType;

export type AdType = AdDisplayBannerType | AdDisplayCardType;

const a: AdType[] = [];

// adType -> displayType
function test(aa: AdType[]) {
  return aa.filter(
    (ad): ad is AdDisplayBannerType => ad.displayType === "BANNER"
  );
}
