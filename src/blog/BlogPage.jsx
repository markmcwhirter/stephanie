import Iframe from 'react-iframe'

export default function BlogPage() {
    return (

        <div id="blogpage" >
            <Iframe url="http://146.190.48.100/"
                width="100%"
                height="100%"
                id="blogFrame"
                className=""
                //display="initial"
                //position="absolute"
                frameborder="0" marginheight="0px" marginwidth="0px" allowfullscreen />
            <div className="vertical-space2"></div>
            <div id="homebar">
                <a href="#titlepage">Home</a>
            </div>
        </div>
    )
}
