import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #1db964;
  gap: 5rem;
  img{
    height: 20vh;
  }
  button{
    padding: 1rem 5rem;
    border-radius: 5rem;
    border: none;
    background-color: black;
    color: #49f585;
    font-size: 1.4rem;
    cursor: pointer;
  }
`;

function Login() {
  return (
    <Container>
      <img src="https://storage.googleapis.com/spotifynewsroom-jp.appspot.com/1/2020/12/Spotify_Logo_CMYK_Black.png" alt="spotify" />
      <button>Connect Spotify</button>
    </Container>
  )
}

export default Login