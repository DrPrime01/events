import { format } from "date-fns";

import EventCard from "@/components/EventCard";
import Featured from "@/components/Featured";
import { API_URL } from "@/constants";
import SearchInput from "@/components/SearchInput";

export default async function Home({
  searchParams: { query },
}: {
  searchParams: { query: string };
}) {
  const response = await fetch(API_URL!);
  const data = await response.json();
  const featured = data?.slice(0, 3);

  const searchedResults = data?.filter((item: any) => {
    const lowerCaseQuery = query && query.toLowerCase();
    const venueMatches =
      item?.venue?.city &&
      item?.venue?.city?.toLowerCase().includes(lowerCaseQuery);
    const artistMatches =
      item?.artist?.name &&
      item?.artist?.name?.toLowerCase().includes(lowerCaseQuery);
    const lineupMatches =
      item?.lineup?.[0] &&
      item?.lineup?.[0]?.toLowerCase().includes(lowerCaseQuery);
    const titleMatches =
      item?.title && item?.title?.toLowerCase().includes(lowerCaseQuery);

    return venueMatches || artistMatches || lineupMatches || titleMatches;
  });

  return (
    <main className="min-h-screen mt-11 flex flex-col gap-y-5">
      <SearchInput />
      <div className="flex flex-col gap-y-5 relative">
        <p className="font-semibold text-pry">Featured Events</p>
        <Featured featured={featured} />
      </div>
      <div className="flex flex-col gap-y-5">
        <p className="font-semibold text-pry">All Events</p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {searchedResults?.length > 0
            ? searchedResults?.map((item: any) => (
                <EventCard
                  key={item?.id}
                  src={item?.artist?.image_url}
                  eventName={
                    item?.title ||
                    `${item?.artist?.name || item?.lineup[0]} Concert`
                  }
                  location={item?.venue?.city}
                  date="8th December, 2021"
                  price={15000}
                  btntext="Buy Ticket"
                  chiptext={format(item?.starts_at, "dd MMM")}
                  link={item?.url}
                />
              ))
            : Boolean(query)
            ? "No Event found"
            : data?.map((item: any) => (
                <EventCard
                  key={item?.id}
                  src={item?.artist?.image_url}
                  eventName={
                    item?.title ||
                    `${item?.artist?.name || item?.lineup[0]} Concert`
                  }
                  location={item?.venue?.city}
                  date="8th December, 2021"
                  price={15000}
                  btntext="Buy Ticket"
                  chiptext={format(item?.starts_at, "dd MMM")}
                  link={item?.url}
                />
              ))}
        </div>
      </div>
    </main>
  );
}
