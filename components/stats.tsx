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

export default function Stats(statInfo: {
  textLength: number;
  words: number;
  uppercase: number;
  lowercase: number;
  special: number;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Kiraan</CardTitle>
        <CardDescription>analisis kiraan huruf anda</CardDescription>
      </CardHeader>
      <StatsInfo label="Huruf" number={statInfo.textLength} style="" />
      <StatsInfo label="Huruf besar" number={statInfo.uppercase} style="" />
      <StatsInfo label="Huruf kecil" number={statInfo.lowercase} style="" />
      <StatsInfo label="Perkataan" number={statInfo.words} style="" />
      <StatsInfo label="Karakter khas" number={statInfo.special} style="" />
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
