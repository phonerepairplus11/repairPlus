import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Brands from "./Brands";
export default function Android() {
    useEffect(() => {
        document.title = "Android";
    }, []);
    return (
        <>
            <Row className=" font-weight-bold m-auto TabletCover Cover ">
                <Col lg={12} className="m-auto text-center text-white">
                    <div>
                        <div className="row1">Service as a Service</div>
                        <div>
                            We provide quick service process at our mobile
                            Store. Our service included touch screen
                            repair/replacement, liquid and water damage repair,
                            broken and physical damage repair, mainboard
                            chip-level repairing, charging port, power button,
                            side button, camera repair, headphone jack, wifi,
                            bluetooth, battery replacement, software
                            troubleshoot and up-gradation.
                        </div>
                    </div>
                </Col>
            </Row>
            <Container>
                <Brands />
                <Row className="p-3 text-muted">
                    <h1 className="text-dark">Android Repair</h1>
                    <h3>
                        Except standard services we offer additional ones which
                        can be made urgently
                    </h3>
                    <p>
                        <span className="text-dark font-weight-bold">
                            Unlock –
                        </span>
                        If you recently changed networks and don’t want to pay
                        for a new phone, why not have the phone network
                        unlocked? This involves opening a phone, so that it can
                        be used on all networks, making switching providers both
                        quick and painless.Minimum Prices for unlocking , and
                        most models can be unlocked in a couple of hours.
                    </p>
                    <p>
                        <span className="text-dark font-weight-bold">
                            Screen Replacement-
                        </span>
                        Smartphone screens are brittle, and it's only a matter
                        of time before you need your screen fixed - Our
                        technicians have expertly repaired millions of screens
                        over the years. There's literally not a problem we
                        hasn't seen and solved. Our professionally trained and
                        vetted Technicians are experts and will meet you and
                        provide smartphone Repair- at your home, office or
                        anywhere whichever is convenient for you.{" "}
                    </p>
                    <p>
                        <span className="text-dark font-weight-bold">
                            Engineering Report –
                        </span>
                        Thankfully, even if devices can’t be repaired, there’s
                        still a solution. If you have your device insured, or
                        the device is covered under your home insurance policy,
                        you shouldn’t have to foot the bill for replacing it. We
                        can provide a full diagnostics of any device, and
                        prepare an engineering report on the exact fault, or
                        faults, do that you can have a qualified electronic
                        engineer to back you up.
                    </p>
                    <ul>
                        <span className="font-weight-bold">
                            Engineering Reports can be used for:
                        </span>
                        <li className="p-1">Resale of Electronic Items</li>
                        <li className="p-1">Insurance Purposes.</li>
                        <li className="p-1">Value Appraisal</li>
                        <li className="p-1">Legal Reasons.</li>
                        <li className="p-1">3rd Party Opinion</li>
                    </ul>
                </Row>
            </Container>
        </>
    );
}
