import React, { useState } from "react";
import "./CSS/contact.css";
import agriculture from "./Images/agriculture.jpg";
// import { db } from "./firebase";
// import { collection, getDocs } from "firebase/firestore";

function ContactForm() {
    const [data, setData] = useState({
        name: "",
        number: "",
        address: "",
        suggestion: "",
    });

    let name, value;
    const updateData = (event) => {
        name = event.target.name;
        value = event.target.value;
        setData({ ...data, [name]: value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const { name, number, address, suggestion } = data;
        if (name && number && address && suggestion) {
            const resp = fetch(
                // "https://thecoffeecat-337ac-default-rtdb.firebaseio.com/userMessage.json",
                "https://codexhbtu-default-rtdb.firebaseio.com//userMessage.json",
                {
                    method: "POST",
                    header: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ name, number, address, suggestion }),
                }
            );
            if (resp) {
                alert("data stored successfully");
                setData({
                    name: "",
                    number: "",
                    address: "",
                    suggestion: "",
                });
            } else {
                alert("please fill the data.");
            }
        } else {
            alert("Please fill all the fields.");
        }
    };

    return (
        <>
            <div className="contact" id="contact">
                <h1>Sampark Karein !</h1>
                <div className="contact_left_right">
                    <div className="contact_left">
                        <img src={agriculture} alt="#" />
                    </div>
                    <div className="contact_right">
                        <h2>Apna byora de.</h2>
                        <form action="submit">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={data.name}
                                onChange={updateData}
                            />
                            <input
                                type="number"
                                name="number"
                                placeholder="Phone No"
                                value={data.number}
                                onChange={updateData}
                            />
                            <input
                                type="text"
                                name="address"
                                placeholder="Address"
                                value={data.address}
                                onChange={updateData}
                            />
                            <input
                                type="text"
                                name="suggestion"
                                placeholder="Samasya"
                                value={data.suggestion}
                                onChange={updateData}
                            />
                            {/* <input
                                type="file"
                                name="file"
                                placeholder="Share some memory"
                                value={data.file}
                                onChange={updateData}
                            /> */}
                            <button type="submit" onClick={onSubmit}>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactForm;
