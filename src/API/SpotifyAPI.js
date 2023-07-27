import React, { useEffect } from "react";

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
myHeaders.append(
  "Cookie",
  "__Host-device_id=AQDqehpXgk0HbJWPk4pe7BhKVcuky3C_qB01C7ALfXXraKmQHymssLH7rebikdbjx5yqCLScG2cY4uR_mgJCY0OnNV-OyVOagd4; sp_tr=false"
);

const urlencoded = new URLSearchParams();
urlencoded.append("grant_type", "client_credentials");
urlencoded.append("client_id", "44570ae4f23c4b5d98bbe7ad17aa49ff");
urlencoded.append("client_secret", "317eb7f3110d47e284eb83c034bbaec4");

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: urlencoded,
  redirect: "follow",
};

// fetch token
export const getToken = async () => {
  const response = await fetch(
    "https://accounts.spotify.com/api/token",
    requestOptions
  );

  if (!response.ok) {
    const message = `An Error has occured${response.status}`;
    throw new Error(message);
  }
  const result = await response.json();
  const token = result.access_token;
  return token;
};

// fetch artists
const myHeaders1 = new Headers();
myHeaders1.append("Authorization", `Bearer ${await getToken()}`);
const reqOptions = {
  method: "GET",
  headers: myHeaders1,
  redirect: "follow",
};

export const artistsData = async () => {
  const response = await fetch(
    "https://api.spotify.com/v1/artists?ids=5y8tKLUfMvliMe8IKamR32%2C6HvZYsbFfjnjFrWF950C9d%2C7pbDxGE6nQSZVfiFdq9lOL%2C7wbkl3zgDZEoZer357mVIw%2C0blbVefuxOGltDBa00dspv",
    reqOptions
  );
  const result = await response.json();
  // console.log(reqOptions);
  return result;
};
// export const getArtists = async () => {
//   const response = await fetch(
//     "https://api.spotify.com/v1/artists?ids=5y8tKLUfMvliMe8IKamR32%2C6HvZYsbFfjnjFrWF950C9d%2C7pbDxGE6nQSZVfiFdq9lOL%2C7wbkl3zgDZEoZer357mVIw",
//     reqOptions
//   );
//   if (!response.ok) {
//     const message = `An Error has occured ${response.status}`;
//     throw new Error(message);
//   }
//   const result = await response.json();
//   return [result];
// };

export default function SpotifyAPI() {
  useEffect(() => {
    getToken();
    artistsData();
  }, []);
}
