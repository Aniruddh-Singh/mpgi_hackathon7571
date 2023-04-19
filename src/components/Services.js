import React from "react";
import "./CSS/services.css";
import { NavLink } from "react-router-dom";

const Services = () => {
    const services = [
        {
            id: 1,
            title: "Weather Forecast",
            path: "/weather",
            imageUrl:
                "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        },
        {
            id: 2,
            title: "Disease and Pesticides",
            path: "/disease",
            imageUrl:
                "https://images.unsplash.com/photo-1644101211459-7f9be46fad04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        },
        {
            id: 3,
            title: "Farming Tools",
            path: "/tools",
            imageUrl:
                "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        },
        {
            id: 4,
            title: "Soil Testing",
            path: "/testing",
            imageUrl:
                "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
    ];

    return (
        <>
            <div className="services" id="services">
                <h1>Services</h1>
                <div className="services-container">
                    {services.map((service) => (
                        // <NavLink to="/weather">
                        <div className="service-card" key={service.id}>
                            <img
                                className="service-image"
                                src={service.imageUrl}
                                alt={service.title}
                            />
                            <a href={services.path}>
                                <div className="service-title">
                                    {service.title}
                                </div>
                            </a>
                        </div>
                        // </NavLink>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Services;
