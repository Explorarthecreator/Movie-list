import TrendingFilter from "@/components/TrendingFilter";
import TrendingMovie from "@/components/TrendingMovie";
import TrendingPeople from "@/components/TrendingPeople";
import TrendingTv from "@/components/TrendingTv";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Explorar Movie List</h1>

      <TrendingFilter />
      <div className="space-y-6">
        <TrendingMovie />

        <TrendingPeople />
        <TrendingTv />
      </div>
    </div>
  );
}
