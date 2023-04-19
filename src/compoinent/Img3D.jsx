import styled from "styled-components";

const Mario = () =>{

    return(
        <div className="3d" > 
            <article>
                <img src="https://as.com/meristation/imagenes/2013/10/08/album/1381235520_235520_000001_album_normal.jpg" alt="" />
                <img src="https://fs-prod-cdn.nintendo-europe.com/media/images/08_content_images/games_6/nintendo_switch_7/nswitch_supermario3dlandandbowsersfury/SuperMario3DWorld_BowersFury_Overview_intro_chars.png" alt="" />
            </article>
        </div>
    )
}
export default Mario;

const Article = styled.article`
  display: flex;
  width: 600px;
  height: 430px;
  position: relative;
  transition: all .3s ease;

  &:hover {
    transform: perspective(250px)
    rotateX(10deg)
    translateY(-5%)
    translateZ(0);
  }
  
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(
      to bottom,
      transparent 10%,
      rgba (0,0,0,0.5) 50%,
      rgba (0,0,0) 95%
    );
    opacity: 0;
    transition: all .3s ease;
  }


  > img{

    &:last-child {
        position: absolute;
        width: 550px;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        transform: translateY(25%);
        transition: .3s ease;
        opacity: 0;
    }
  }
`