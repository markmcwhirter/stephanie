export default function MediaPage() {
    return (
        <div id="mediapage">

        <div  className="flex-container narrative styled-paragraph">
            <div className="flex-child">
                <p>Click on the links will take you to an external site</p>
                <div>
                    <a href="https://www.god.tv">
                        <img src="images/godtv.png" className="image_sizer" />
                    </a>
                </div>
                <div>
                    <a href="https://ukchristian.news/finally-free-stephanie-mckittrick/">
                    <img src="images/UKChristian.jpg" className="image_sizer" />
                    </a>
                </div>
            </div>
            <div className="flex-child">
                <img src="images/StephanieSpeaking.jpg"  className="image_sizer" />
            </div>

        </div>
    </div>
        )
    }
    