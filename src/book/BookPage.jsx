export default function BookPage() {
    return (
        <div id="bookpage" className="torn-paper">
            <div className="flex-container narrative styled-paragraph">
                <div className="flex-child">
                    <img src="images/FinallyFreeCover.jpeg" className="image_sizer" alt='' />
                </div>
                <div className="flex-child">
                    <img src="images/FinallyFreeBack.jpeg" className="image_sizer" alt='' />
                </div>

            </div>
            <div className="vertical-space2"></div>
            <div id="homebar">
                <a href="#titlepage">Home</a>
            </div>
        </div>
    )
}
