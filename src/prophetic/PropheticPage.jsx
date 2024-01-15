import Iframe from 'react-iframe'

export default function PropheticPage() {
    return (
        <div id="propheticpage" >
            <Iframe url="http://www.youtube.com/embed/videoseries?list=UC2I1BWQUziEPw-RgKvvlhsg"
                width="100%"
                height="100%"
                id="propheticFrame"
                className=""
                //display="initial"
                //position="absolute"
                frameborder="0" marginheight="0px" marginwidth="0px" allowfullscreen />

            <div id="homebar">
                <a href="#titlepage">Home</a>
            </div>
        </div>

    )
}
