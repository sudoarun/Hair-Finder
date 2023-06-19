import React from "react";
import SearchContent from "../Search/SearchContent";

export default function Schedule() {
  return (
    <div className="mt-3">
      <h5 className="text-white text-center mb-4">
        <span className="py-2 ps-3 border">
          Your <span className="py-2 pe-3 text-black bg-white">Bookings</span>
        </span>
      </h5>

      <div className="container">
        <div className="border p-3">
          <div className="overflow-auto" style={{ height: "75vh" }}>
            <SearchContent btn={"cancel"} />
            <SearchContent btn={"cancel"} />
            <SearchContent btn={"cancel"} />
            <SearchContent btn={"cancel"} />
            <SearchContent btn={"cancel"} />
            <SearchContent btn={"cancel"} />
            <SearchContent btn={"cancel"} />
            <SearchContent btn={"cancel"} />
            <SearchContent btn={"cancel"} />
          </div>
        </div>
      </div>
    </div>
  );
}
