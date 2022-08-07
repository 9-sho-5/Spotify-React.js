import React, { useEffect }  from 'react'
import styled from 'styled-components'
import { useStateProvider } from "../utils/StateProvider"
import axios from 'axios'
import { reducerCases } from '../utils/Constants';

const Container = styled.div`
  .track{
    display: flex;
    align-items: center;
    gap: 1rem;
    &__info{
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      h4,h6{
        margin: 0;
      }
      h4{
        color: white;
      }
      h6{
        color: #b3b3b3
      }
    }
  }
`;

function CurrentTrack() {
  const [{ token, currentlyPlaying }, dispatch ] = useStateProvider();
  useEffect(() => {
    const getCurrentTrack = async () => {
      const response = await axios.get(
        // currently playing
        'https://api.spotify.com/v1/me/player/currently-playing',
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      if( response.data !== "" ){
        const { item } = response.data;
        const currentlyPlaying = {
          id: item.id,
          name: item.name,
          artists: item.artists.map(( artist ) => artist.name ),
          image: item.album.images[2].url,
        };
        dispatch({ type: reducerCases.SET_CUTTENTLY_PLAYING, currentlyPlaying });
      }
    };
    getCurrentTrack();
  }, [ token, dispatch ]);
  return (
    <Container>
      {
        currentlyPlaying && (
          <div className="track">
            <div className="track__image">
              <img src={ currentlyPlaying.image } alt="currentlyPlaying" />
            </div>
            <div className="track__info">
              <h4>{ currentlyPlaying.name }</h4>
              <h6>{ currentlyPlaying.artists.join(", ") }</h6>
            </div>
          </div>
        )
      }
    </Container>
  )
}

export default CurrentTrack
