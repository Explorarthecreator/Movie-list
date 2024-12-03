import TrendingFilter from "@/components/TrendingFilter";
import TrendingMovie from "@/components/TrendingMovie";
import TrendingPeople from "@/components/TrendingPeople";
import TrendingTv from "@/components/TrendingTv";

export default function Home() {
  return (
    <div className="space-y-5">
      <h1 className="text-2xl lg:text-4xl font-bold">
        Welcome to Explorar Movie App
      </h1>

      <TrendingFilter />
      <div className="space-y-6 md:space-y-8 lg:space-y-12">
        <TrendingMovie />

        <TrendingPeople />
        <TrendingTv />
      </div>
    </div>
  );
}
