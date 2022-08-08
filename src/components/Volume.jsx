import React from 'react'
import styled from 'styled-components';
import axios from 'axios'
import { useStateProvider } from "../utils/StateProvider"

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    input[type="range"] {
        -webkit-appearance: none;
        appearance: none;
        background-color: rgba(255, 255, 255, .7);
        height: 2px;
        max-width: 100px;
        width: 100%;
        border-radius: 6px;

        &:focus,
        &:active {
            outline: none;
        }

        &::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            cursor: pointer;
            position: relative;
            width: 15px;
            height: 15px;
            display: block;
            border: 1px solid #717171;
            background-color: #fff;
            border-radius: 50%;
            -webkit-border-radius: 50%;
        }
    }
`;

function Volume() {
    // Premium Only
    const [{ token } ] = useStateProvider();
    const setVolume = async ( e ) => {
        await axios.put(
            `https://api.spotify.com/v1/me/player/volume`,
            {},
            {
                params: {
                    volume_percent: parseInt( e.target.value ),
                },
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                },
            }
        );
    }
    return (
        <Container>
            <input type="range" min={ 0 } max={ 100 } onMouseUp={ ( e ) => setVolume( e )} />
        </Container>
    )
}

export default Volume
