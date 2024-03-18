import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

type StatsProps = {
  label: string;
  number: number;
  style: string;
};

export default function Stats(statInfo: { textLength: number; words: number }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Stats</CardTitle>
        <CardDescription>analysis ayat anda</CardDescription>
      </CardHeader>
      <StatsInfo label="Perkataan" number={statInfo.words} style="" />
      <StatsInfo label="Huruf" number={statInfo.textLength} style="" />
    </Card>
  );
}

function StatsInfo({ label, number, style }: StatsProps) {
  return (
    <>
      <CardContent className={style}>
        <p>
          {label}: {number}
        </p>
      </CardContent>
    </>
  );
}
