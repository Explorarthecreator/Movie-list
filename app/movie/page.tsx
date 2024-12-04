import MovieFilter from "@/components/MovieFilter";
import MovieGrid from "@/components/MovieGrid";

export default function Movie() {
  return (
    <div className="space-y-8 lg:space-y-12">
      <div>
        <p>Movie</p>
        <MovieFilter />
      </div>

      <div>
        <MovieGrid />
      </div>
    </div>
  );
}
