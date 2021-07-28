
export function Contact() {

    return <section >
        <div className="main-container flex">
            <div className="contact-content flex column">
                <h1>Contact</h1>
                <h2>ask us About</h2>
                <span>
                    {/* SVG  */}
                    The quality of our talent network
                </span>
                <span>
                    {/* SVG  */}
                    The quality of our talent network
                </span>
                <span>
                    {/* SVG  */}
                    The quality of our talent network
                </span>
                <span>
                    {/* SVG  */}
                    The quality of our talent network
                </span>
            </div>
        </div>
        <form className="flex column">
            <input type="text" placeholder="Name"/>
            <input type="text" placeholder="Email Address"/>
            <input type="text" placeholder="Company Name"/>
            <input type="text" placeholder="Title"/>
            <input type="text" placeholder="Message"/>
            <button>Submit</button>
        </form>
    </section>
}