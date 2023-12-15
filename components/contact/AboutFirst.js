import React from 'react';
import '../../app/globals.css';
import TimeVisitor from "./TimeVisitor";
import AppointmentsInfo from "./AppointmentsInfo";
import AppointmentForm from "./AppointmentForm";
import StudioInfo from "./StudioInfo";

const AboutFirst = () => {
    return (
        <div className="wrapper about_first">
            <TimeVisitor/>
            <AppointmentsInfo/>
            <AppointmentForm/>
            <StudioInfo/>
        </div>
    );
};

export default AboutFirst;