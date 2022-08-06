import React, { useEffect } from 'react'
import { useStateProvider } from "../utils/StateProvider"
import axios from 'axios'
import { reducerCases } from '../utils/Constants';

function Playlists() {
  const [{ token, playlists }, dispatch ] = useStateProvider();
  useEffect(() => {
    const getPlayListData = async () => {
      const response = await axios.get(
        // TOP 50 JPop
        // 'https://api.spotify.com/v1/playlists/37i9dQZEVXbKXQ4mDTEBXq',
        // User Info
        'https://api.spotify.com/v1/me/playlists',
        // Current User's Playlists
        // 'https://api.spotify.com/v1/me/playlists',
        
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      const { items } = response.data
      const playlists = items.map(({ name, id }) => {
        return { name, id };
      });
      dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
      console.log(playlists)
    };
    getPlayListData();
  }, [ token, dispatch ]);
  return (
    <div>
      <ul>
        {
          playlists.map(({ name, id }) => {
            return (
              <li key={ id }>{ name }</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Playlists
