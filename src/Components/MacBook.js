import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MacbookModels from "./MacbookModels";
export default function MacBook() {
    useEffect(() => {
        document.title = "Macbook Models";
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
                <h1 className="text-dark text-uppercase">Macbook Repair</h1>
            </Container>
            <Row
                className=" row-cols-1 row-cols-md-3 justify-content-center p-4 "
                style={{ gridGap: "20px 0" }}
            >
                <MacbookModels />
            </Row>
            <Container className="mb-5">
                <Row className="p-3 text-muted">
                    <h3>
                        Except standard services we offer additional ones which
                        can be made urgently
                    </h3>

                    <p>
                        <span className="text-dark font-weight-bold">
                            Screen Replacement-
                        </span>
                        screens are brittle, and it's only a matter of time
                        before you need your screen fixed - Our technicians have
                        expertly repaired hundreds of screens over the years.
                        There's literally not a problem we hasn't seen and
                        solved. Our professionally trained and vetted
                        Technicians are experts and will meet you and provide
                        smartphone Repair- at your home, office or anywhere
                        whichever is convenient for you.{" "}
                    </p>
                </Row>
            </Container>
        </>
    );
}
