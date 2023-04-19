import React from "react";
import agriculture from "./Images/agriculture.jpg";
// import scene from "./images/scene.jpg";
import "./CSS/about.css";

function About() {
    return (
        <>
            <div className="about" id="about">
                <div className="about_us">
                    <h1 className="aboutus">About Us</h1>
                </div>
                <div className="about_text_img">
                    <img
                        src={agriculture}
                        alt="inner_view"
                        className="about_img"
                    />
                    <p className="about_text">
                        The history of agriculture in India dates back to the
                        neolithic. India ranks second worldwide in farm outputs.
                        As per Indian economic survey 2018, agriculture employed
                        more than 50% of the Indian work force and contributed
                        17–18% to country's GDP. We understand the challenges
                        and opportunities that come with farming, and our goal
                        is to provide you with the information, resources, and
                        tools you need to succeed. Our website offers a wealth
                        of information on various aspects of farming, from crop
                        management to market trends. Our team of experts
                        provides up-to-date advice and guidance on topics such
                        as soil management, pest control, irrigation, and much
                        more. At our website, we believe that farmers are the
                        backbone of our society, and we are committed to
                        supporting and empowering them in every way we can.
                        Whether you are a seasoned farmer or just starting out,
                        we are here to help you every step of the way. Thank you
                        for choosing our website, and we look forward to working
                        with you!
                    </p>
                </div>
            </div>
        </>
    );
}

export default About;
