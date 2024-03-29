import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import VapeModels from "./VapeModels";

export default function Vape() {
    useEffect(() => {
        document.title = "Vapes";
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

            <Container className="mt-4 ">
                <h1 className="text-dark text-uppercase">Vape Services</h1>
            </Container>
            <Row
                className=" row-cols-1 row-cols-md-3 justify-content-center p-4 "
                style={{ gridGap: "20px 0" }}
            >
                <VapeModels />
            </Row>
            <Container>
                <Row className="p-3 text-muted">
                    <p>
                        <span className="text-dark font-weight-bold">
                            Sale –
                        </span>
                        From simple Vape Pen Devices and Pod Kits to more
                        advanced Box Mod kits and everything in between! No
                        matter your vape knowledge we have a kit for you.
                    </p>
                    <p>
                        <span className="text-dark font-weight-bold">
                            Battery Replacement –
                        </span>
                        f you’re looking for new vape batteries, you’ve come to
                        the right place. we offer only the best, longest lasting
                        and most reliable vape batteries on the market. However,
                        vaporizer batteries aren’t universal and while most use
                        a 18650 battery, some may take other sizes.
                    </p>
                    <p>
                        <span className="text-dark font-weight-bold">
                            vape coil replacements –
                        </span>
                        With a wide selection of brands, we offer many different
                        coil types with a range of resistance options to provide
                        you with the perfect vaping experience. If you are
                        seeking the best vape coils and coil replacement
                        options, look no further, we only select the highest
                        quality and most reliable coils for our inventory,
                        ensuring that whatever option you pick, you can be
                        guaranteed an enjoyable vape.
                    </p>
                    <p>
                        <span className="text-dark font-weight-bold">
                            Drip Tips –
                        </span>
                        Are you interested in drip vaping? Already into
                        dripping? Our variety of drip tips will suit all levels
                        of drip vaping. Whether you’re a newcomer to dripping or
                        a seasoned vet, you can find a drip tip on our online
                        store that fits your needs. Not only this, there’s a
                        variety of styles, meaning you can buy the perfect tip
                        to match your new mod.
                    </p>
                    <p>
                        <span className="text-dark font-weight-bold">
                            Wire & Cotton –
                        </span>
                        Customizing your vape experience is almost as much fun
                        as vaping itself. Take your vaping experience to the
                        next level with the best wicks, wick alternatives,
                        coils, coil wrappers, and more. Want to prevent dry
                        hits? Pick out one or two new wicks! The sky's the limit
                        when it comes to customizing your vaping experience. Our
                        online store has the best vape wire accessories money
                        can buy!
                    </p>
                </Row>
            </Container>
        </>
    );
}
