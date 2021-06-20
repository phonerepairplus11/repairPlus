import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import BrandModels from "./BrandModels";
import IpadModels from "./IpadModels";

export default function Iphone() {
    useEffect(() => {
        document.title = "iPad Models";
    }, []);
    return (
        <>
            <Row className="  text-light  font-weight-bold m-auto TabletCover Cover ">
                <Col lg={12} className="m-auto text-center  ">
                    <div>
                        <div className="row1 ">Service as a Service</div>
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
            <Container className="mt-4 ">
                <h1 className="text-dark text-uppercase">Ipad Repair</h1>
            </Container>
            <Row
                className="row-cols-md-4 row-cols-1 p-4"
                style={{ gap: "2rem 0" }}
            >
                <IpadModels />
            </Row>

            <Container className="mb-5">
                <Row className="p-3 text-muted">
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
                </Row>
            </Container>
        </>
    );
}
