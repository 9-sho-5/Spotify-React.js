import React from 'react'
import styled from 'styled-components'
import { IoLibrary } from "react-icons/io5";
import { MdHomeFilled, MdSearch } from "react-icons/md"

const Container = styled.div`
    background-color: black;
    color: #b3b3b3;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    .top__links{
        display: flex;
        flex-direction: column;
        .logo{
            text-align: center;
            margin: 1rem 0;
            img{
                max-inline-size: 80%;
                block-size: auto;
            }
        }
        ul{
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
            li{
                display: flex;
                gap: 1rem;
                cursor: pointer;
                transition: 0.3s ease-in-out;
                &:hover{
                    color: white;
                }
            }
        }
    }
`;

function Sidebar() {
  return (
    <Container>
        <div className="top__links">
            <div className="logo">
                <img
                    src="https://storage.googleapis.com/spotifynewsroom-jp.appspot.com/1/2020/12/Spotify_Logo_RGB_White.png"
                    alt="spotify"
                />
            </div>
            <ul>
                <li>
                    <MdHomeFilled />
                    <span>HOME</span>
                </li>
                <li>
                    <MdSearch />
                    <span>Search</span>
                </li>
                <li>
                    <IoLibrary />
                    <span>Your Library</span>
                </li>
            </ul>
        </div>
    </Container>
  )
}

export default Sidebar
