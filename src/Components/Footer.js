import React from "react";
import { Col, Row } from "react-bootstrap";

export default function Footer() {
    return (
        <>
            <Row className="bg-dark text-light  m-0 justify-content-evenly align-items-center p-5">
                <Col md={6} lg={3} className="text-center p-1 text-uppercase  ">
                    <h2 style={{ fontWeight: "bolder" }}>
                        Phone Repair plus and Vapes
                    </h2>
                </Col>
                <Col
                    md={6}
                    lg={4}
                    className="mx-auto mb-md-0 mb-4"
                    style={{ fontWeight: "bolder" }}
                >
                    <div
                        className="Footerlist"
                        style={{ fontWeight: "bolder" }}
                    >
                        <h2
                            className="text-center"
                            style={{ textDecoration: "underline" }}
                        >
                            Contact Us
                        </h2>

                        <table id="footerContact">
                            <tbody>
                                <tr>
                                    <th>
                                        <h4>Phone:-</h4>
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        <span>01789507470 </span> ,{" "}
                                        <span>07848372777</span>{" "}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <h4>Address:-</h4>
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        <span>
                                            31 Henley Street,
                                            Stratford-Upon-Avon, CV37 6QW
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Col>
                <Col lg={4} className="text-center ">
                    <Row className="justify-content-center align-items-center">
                        <h1 className="p-3 text-uppercase ">
                            Thank You For Choosing Us!
                        </h1>
                    </Row>
                </Col>
            </Row>
        </>
    );
}
