import styled from "styled-components";

const Flowers = () => {


  return (
    <div className="App">
      <div className="galeri">
        <Section>
          <ContentImg src="https://storage.googleapis.com/fpc_fotos_cdn/fotos2/92-72/1_w800_q80.webp" alt=""></ContentImg>
          <ContentImg src="https://storage.googleapis.com/fpc_fotos_cdn/fotos2/550/1_w800_q80.webp" alt=""></ContentImg>
          <ContentImg src="https://storage.googleapis.com/fpc_fotos_cdn/fotos2/390/1_w800_q80.webp" alt=""></ContentImg>
          <ContentImg src="https://storage.googleapis.com/fpc_fotos_cdn/fotos2/127-86/1_w800_q80.webp" alt="" ></ContentImg>
        </Section>

      </div>
    </div>
  )
}

export default Flowers;

const Section = styled.section`
  display: flex;
  width: 600px;
  height: 430px;
  gap: 1rem;

`
const ContentImg = styled.img`
    width: 0px;
    flex-grow: 1;
    object-fit: cover;
    opacity: .8;
    transition: 3s ease;

    &:hover {
      cursor: crosshair;
      width: 300px;
      opacity: 1;
      filter: contrast(120%);
    }
`