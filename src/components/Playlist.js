import React from "react";
import Button from "./Button";
import Track from "./Track";
import { artistsData } from "../API/SpotifyAPI";
import { getToken } from "../API/SpotifyAPI";

// console.log(await getToken());

console.log(await artistsData());
const artistDatas = await artistsData();

const artistData = artistDatas.artists.map(
  (data) => (
    // const anotherTracks = {
    //   trackImg: data.images[0],
    //   trackSinger: data.name,
    //   trackTitle: data.genres[0],
    //   trackYear: "2023",
    //   bgColor: "#D8DADE",
    // };

    <Track
      trackImg={data.images[0].url}
      trackSinger={data.name}
      trackTitle={data.genres[0]}
      trackYear="2023"
      bgColor="#D8DADE"
      href={data.href}
    />
  )
  // console.log(data)
);

const tracks = [
  {
    trackImg: "lofi-chillhop-mix",
    trackYear: "2023",
    trackTitle: "Lofi Chillhop Mix",
    trackSinger: "Lofi Girl",
    bgColor: "#BE786A",
  },
  {
    trackImg: "jazz-music",
    trackYear: "2022",
    trackTitle: "Jazz Music",
    trackSinger: "FKJ",
    bgColor: "#B3724F",
  },
  {
    trackImg: "R&B-playlist",
    trackYear: "2020",
    trackTitle: "R&B Playlist",
    trackSinger: "Joji",
    bgColor: "#661117",
  },
  {
    trackImg: "soul-genre",
    trackYear: "2019",
    trackTitle: "Soul Genre",
    trackSinger: "Ichiko Aoba",
    bgColor: "#8680A6",
  },
  {
    trackImg: "kpop-music",
    trackYear: "2022",
    trackTitle: "K-pop Music",
    trackSinger: "NewJeans",
    bgColor: "#D8DADE",
  },
];

const trackData = tracks.map((track) => (
  <Track
    trackImg={track.trackImg}
    trackYear={track.trackYear}
    trackTitle={track.trackTitle}
    trackSinger={track.trackSinger}
    bgColor={track.bgColor}
  />
));

export default function Playlist() {
  return (
    <div className="playlist">
      <div className="playlist-container">
        <div className="playlist-header">
          <div className="playlist-header-text">
            <h1>Study Playlist</h1>
            <p>
              Browse recently playlist for study. What are you waiting for? All
              playlist are free!
            </p>
          </div>
          <div className="playlist-header-btn">
            <Button text="View All" type="secondary" />
          </div>
        </div>
        {/* Grid for tracks */}
        <div className="tracks-container">
          {trackData}
          {artistData}
        </div>
      </div>
    </div>
  );
}
