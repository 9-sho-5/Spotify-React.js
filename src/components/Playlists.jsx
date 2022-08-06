import React, { useEffect } from 'react'
import { useStateProvider } from "../utils/StateProvider"
import axios from 'axios'

function Playlists() {
  const [{ token, dispatch }] = useStateProvider();
  useEffect(() => {
    const getPlayListData = async () => {
      const response = await axios.get(
        'https://api.spotify.com/v1/me/playlists',
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
    };
    getPlayListData();
  }, [ token, dispatch ]);
  return (
    <div>
      Playlists
    </div>
  )
}

export default Playlists
