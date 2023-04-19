import React from "react";
import "./CSS/soil.css";
import soil2 from "./Images/soil2.jpg";
import soil3 from "./Images/soil3.jpg";
import soil4 from "./Images/soil4.jpg";
import soil6 from "./Images/soil6.jpg";

const Soil = () => {
    return (
        <div>
            <div className="soil-whole-body">
                <h1 id="head">Soil Testing</h1>
                <div className="soil2-flexbox">
                    <img id="soil2-image" src={soil2} alt="image" />
                    <p id="para-soil-intro">
                        Soil test may refer to one or more of a wide variety of
                        soil analysis conducted for one of several possible
                        reasons. Possibly the most widely conducted soil tests
                        are those done to estimate the plant-available
                        concentrations of plant nutrients, in order to determine
                        fertilizer recommendations in agriculture. Other soil
                        tests may be done for engineering (geotechnical),
                        geochemical or ecological investigations. In
                        agriculture, a soil test commonly refers to the analysis
                        of a soil sample to determine nutrient content,
                        composition, and other characteristics such as the
                        acidity or pH level. A soil test can determine
                        fertility, or the expected growth potential of the soil
                        which indicates nutrient deficiencies, potential
                        toxicities from excessive fertility and inhibitions from
                        the presence of non-essential trace minerals. The test
                        is used to mimic the function of roots to assimilate
                        minerals. The expected rate of growth is modeled by the
                        Law of the Maximum.
                    </p>
                </div>
                <div className="soil-pH">
                    <h1>What Is Soil pH Level?</h1>
                    <div className="soil-pH-content">
                        <img id="soil3-image" src={soil3} alt="image" />
                        <p>
                            The scientific symbol pH refers to the concentration
                            of hydrogen ions. The pH number of your soil
                            indicates the presence or absence of minerals
                            important to healthy plant growth.
                            <br />
                            A soil test determines the pH level. You can buy
                            soil tests at commercial garden centers and local
                            county agricultural extension offices, or you can
                            order a home test kit.
                            <br />
                            Your soil’s pH number will be between 0 and 14. Soil
                            is considered acidic if its pH is at or below 5.
                            It’s too alkaline if the results are above pH
                            7.5.The East Coast and Pacific Northwest are acidic
                            due to high annual rainfall, while limestone in the
                            West and Southwest account for alkaline soil. The
                            Midwest generally enjoys balanced pH, unless the
                            soil has been disturbed for a building project and
                            replaced with a poor substitute.
                        </p>
                    </div>
                </div>
                <div className="soil-pH-adjust">
                    <h1>Why Do Soil pH Levels Need Adjusting?</h1>
                    <div className="soil-pH-adjust-flexbox">
                        <img id="soil4" src={soil4} alt="image" />
                        <p>
                            Soil that’s too alkaline or too acidic prevents a
                            plant’s roots from accessing nutrients needed for
                            optimal growth. Proper soil pH means healthier
                            plants and more blossoms or fruit. Loose soil
                            (rather than dense and compacted), water, the right
                            amount of sunlight and organic matter also
                            contribute to productive growth. Amending the soil,
                            or adding materials to improve it, can help.
                            However, be careful because it’s easy to make a
                            mistake, according to the Horticultural Extension
                            Division of Mississippi State University. The
                            difference between a pH of 5 and a pH of 6 is
                            tenfold, and the difference between pH 5 and pH 7 is
                            100 points. Different plants have different pH
                            requirements, and the pH level can affect nutrient
                            availability in the soil. For example, if the soil
                            is too acidic or too alkaline, certain nutrients may
                            become unavailable to the plants. Soil pH can also
                            affect soil microorganisms and the availability of
                            beneficial bacteria that help plants grow.
                        </p>
                    </div>
                </div>
                <div className="soil-pH-lower-raise">
                    <h1>How to Lower/Raise the pH Level in Soil</h1>
                    <div className="soil-pH-lower-raise-flexbox">
                        <img id="soil6" src={soil6} alt="image" />
                        <p>
                            When soil is alkaline, it’s difficult to lower it,
                            but acidifying nitrogen, elemental sulfur, iron
                            sulfate or aluminum sulfate are viable options. Soil
                            test results should tell you how much, when and how
                            to apply. Moderate alkalinity may also be rectified
                            with the addition of sphagnum peat moss. Just add a
                            layer of one to two inches on top of the area of
                            concern and work it into the soil with a rototiller
                            or spade. This peat will also augment beneficial
                            organic matter in the soil.
                            <br />
                            <br />
                            Adding lime reduces acidity. University of Vermont
                            soil scientists say that the amount of lime needed
                            to “sweeten” or lower acidity depends on the
                            composition of the soil. Sandy soil needs less lime
                            while clay-based soil needs more. It’s best to apply
                            lime in fall and winter for spring planting,
                            allowing the substance time to impact the pH. To
                            determine the amount of clay or sand in your soil,
                            do a simple percolation test to find out how quickly
                            water is absorbed.
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <h1 id="purchase">
                    To purchase the Soil Testing Kit,{" "}
                    <a
                        href="https://www.amazon.in/Naitik-Creation-Moisture-Hydroponic-Intensity/dp/B07FNQDLSY/ref=sr_1_18?keywords=soil+testing+kit&sr=8-18"
                        target="_blank"
                    >
                        click here.
                    </a>
                </h1>
            </div>
        </div>
    );
};

export default Soil;
