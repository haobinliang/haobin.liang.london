export interface Props {
  datetime: string | Date;
  size?: "sm" | "lg";
  className?: string;
  leadingText?: string;
}

const FormattedDatetime = ({ datetime }: { datetime: string | Date }) => {
  const myDatetime = new Date(datetime);

  const date = myDatetime.toLocaleDateString([], {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const time = myDatetime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    // timeZoneName: "longGeneric",
  });

  // const deltaSeconds = Math.round((myDatetime.getTime() - Date.now()) / 1000);

  // const cutoffs = [
  //   60,
  //   3600,
  //   86400,
  //   86400 * 7,
  //   86400 * 30,
  //   86400 * 365,
  //   Infinity,
  // ];

  // const units: Intl.RelativeTimeFormatUnit[] = [
  //   "second",
  //   "minute",
  //   "hour",
  //   "day",
  //   "week",
  //   "month",
  //   "year",
  // ];

  // const unitIndex = cutoffs.findIndex(
  //   cutoff => cutoff > Math.abs(deltaSeconds)
  // );

  // const divisor = unitIndex ? cutoffs[unitIndex - 1] : 1;

  // const rtf = new Intl.RelativeTimeFormat([], { numeric: "auto" });

  // const relativeTime = rtf.format(
  //   Math.floor(deltaSeconds / divisor),
  //   units[unitIndex]
  // );

  return (
    <>
      {/* {relativeTime} */}
      {/* <span aria-hidden="true"> | </span> */}
      {date}
      <span aria-hidden="true"> | </span>
      <span className="sr-only">&nbsp;at&nbsp;</span>
      {time}
    </>
  );
};

export default function Datetime({
  datetime,
  size = "sm",
  className,
  leadingText,
}: Props) {
  return (
    <p
      className={`flex items-center space-x-2 opacity-80 ${
        className ? className : ""
      } ${size === "sm" ? "text-sm" : "text-base"}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${
          size === "sm" ? "scale-90" : "scale-100"
        } inline-block h-6 w-6 fill-skin-base`}
        aria-hidden="true"
      >
        <path d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"></path>
        <path d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z"></path>
      </svg>
      {leadingText && <span>{leadingText}</span>}
      <span>
        <FormattedDatetime datetime={datetime} />
      </span>
    </p>
  );
}
