import React from "react";
import "./CSS/pesticide.css";
import powderymildew from "./Images/powderymildew.jpg";
import fusariumwilt from "./Images/fusariumwilt.jpg";
import vectirium from "./Images/vectirium.jpg";
import snowmold from "./Images/snowmold.jpg";

const Pesticide = () => {
    return (
        <div>
            <div className="pesticide">
                <h1 id="headings">Plant Diseases and Their Treatments</h1>
                <div id="servicesd">
                    <div className="boxs">
                        <img src={powderymildew} alt="image" />
                        <h2 className="h-primary">Powedery Mildew</h2>
                        <p className="centers">
                            Powdery mildew leaves a telltale white dusty coating
                            on leaves, stems and flowers. Caused by a fungus, it
                            affects a number of plants.Rake up and destroy
                            infected leaves to reduce the spread of spores.
                            Also, give plants good drainage and ample air
                            circulation. Avoid overhead watering at night;
                            mid-morning is preferred to allow foliage to dry
                            before evening. Commercial fungicides are available
                            for powdery mildew
                        </p>
                    </div>
                    <div className="boxs">
                        <img src={fusariumwilt} alt="image" />
                        <h2 className="h-primary">Fusarium Wilt</h2>
                        <p className="centers">
                            Caused by a soil-borne fungus, fusarium wilt affects
                            ornamental and edible plants, including dianthus,
                            beans, tomatoes, peas and asparagus.There are no
                            chemical controls available to home gardeners, but
                            there are disease-resistant cultivars. If fusarium
                            wilt shows up somewhere in the garden, remove and
                            destroy infected plants and do not plant the same
                            species in that spot for five years.
                        </p>
                    </div>
                    <div className="boxs">
                        <img src={vectirium} alt="image" />
                        <h2 className="h-primary">Vectirium Wilt</h2>
                        <p className="centers">
                            {" "}
                            Verticillium wilt is a fungal disease that affects
                            hundreds of species of trees, shrubs, edibles and
                            ornamentals. Fungicides are not effective, but good
                            sanitation practices may help. Remove and destroy
                            infected annuals, perennials and edibles. Prune
                            diseased branches off trees and shrubs. (When you do
                            this, you’ll notice a telltale green streak or stain
                            in the wood.).It can also lead to stunned growth.{" "}
                        </p>
                    </div>
                    <div className="boxs">
                        <img src={snowmold} alt="image" />
                        <h2 className="h-primary">Snow Mold</h2>
                        <p className="centers">
                            Snow mold is a fungus that flourishes in the cold,
                            moist conditions . After snow melts, symptoms become
                            visible: light tan areas of matted grass caused by
                            threads of mold.Rake the matted grass to break up
                            the mold and allow for new growth. In fall, make the
                            last cutting of the year shorter to discourage tall
                            grass blades from falling over and contributing to
                            matting.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pesticide;
