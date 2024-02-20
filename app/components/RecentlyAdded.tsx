import Image from "next/image";
import prisma from "../utils/db";
import MovieCard from "./MovieCard";

async function getData() {
  const data = await prisma.movie.findMany({
    select: {
      title: true,
      overview: true,
      youtubeString: true,
      imageString: true,
      WatchLists: true,
      id: true,
      age: true,
      release: true,
      duration: true
    },
    orderBy: {
      createdAt: "desc"
    },
    take: 4
  })
  return data;
}

export default async function RecentlyAdded() {
  const data = await getData();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-6">
      {
        data.map(movie => (
          <div key={movie.id} className="relative h-48">
            <Image
              src={movie.imageString}
              alt="Movie"
              width={500}
              height={400}
              className="rounded-sm absolute w-full h-full"
            />

            <div className="h-60 relative z-10 w-full transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100 cursor-pointer">
              <div className="bg-gradient-to-b from-transparent via-black/50 to-black z-10 w-full h-full rounded-lg flex items-center justify-center border">
                <Image
                  src={movie.imageString}
                  alt="Movie"
                  width={800}
                  height={800}
                  className="rounded-lg absolute w-full h-full -z-10 object-cover"
                />

                <MovieCard
                  key={movie.id}
                  title={movie.title}
                  overview={movie.overview}
                  movieId={movie.id}
                  watchListId={movie.WatchLists[0]?.id}
                  youtubeUrl={movie.youtubeString}
                  watchList={movie.WatchLists.length > 0 ? true : false}
                  age={movie.age}
                  year={movie.release}
                  time={movie.duration}
                />
              </div>
            </div>
          </div>
        ))
      }
    </div >
  )
}