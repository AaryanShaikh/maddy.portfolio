"use client"
import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Typography } from 'antd'
import LoadingSkeleton from './LoadingSkeleton'

const SupplySail = () => {
    const [isloading, setisloading] = useState(true)

    useEffect(() => {
        setisloading(false)
    }, [])
    return (
        <div>
            {isloading ? <LoadingSkeleton /> : ""}
            {
                isloading ? "" : <>
                    <Header />
                    <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", marginTop: "61.5px" }}>
                        <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "39px", lineHeight: "52px", color: "#302E2E", letterSpacing: "0.4px", marginTop: "18px", textAlign: "center" }}>
                            Building the first platform for<br /> Product Management
                        </Typography.Text>
                        <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "italic", fontWeight: 350, fontSize: "16px", lineHeight: "29px", color: "#3D3D3D", letterSpacing: "0.4px", marginTop: "18px", textAlign: "center" }}>
                            Supplysail is a flexible PIM (product Info management) solution that helps<br /> suppliers to increase sales and bring in operational efficiency, by digitally<br /> transforming product life cycle management.
                        </Typography.Text>
                        <img src="/images/Desktop/Supplysail Dashboard/Supplysail-logo.png" style={{ width: "200px", height: "99px", marginTop: "68px" }} />
                        <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "22px", lineHeight: "29px", color: "#525252", letterSpacing: "0px", marginTop: "42px", textAlign: "center" }}>
                            A retail company that sells products across multiple channels, including their own<br /> website, Amazon, and Walmart realized that managing product information across all<br /> these channels was becoming a major challenge. Their product information was<br /> spread across multiple systems, and it was difficult to ensure that the information was<br /> accurate and up to date.
                        </Typography.Text>
                        <div style={{ height: "5px", width: "625px", borderTop: "2px solid #DDDCDC", marginTop: "91px" }}></div>
                        <div style={{ width: "837px", marginTop: "56px", display: "flex", flexDirection: "column" }}>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "22px", lineHeight: "28px", color: "#302E2E", letterSpacing: "0.4px", marginTop: "0px", alignSelf: "flex-start" }}>
                                Solution
                            </Typography.Text>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "18px", lineHeight: "29px", color: "#3D3D3D", letterSpacing: "0.4px", marginTop: "32px", alignSelf: "flex-start" }}>
                                We created a platform to centrally manage and distribute product information across all<br /> channels.
                            </Typography.Text>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 600, fontSize: "20px", lineHeight: "29px", color: "#302E2E", letterSpacing: "0px", marginTop: "24px", alignSelf: "flex-start" }}>
                                Supplysail allows the company to easily update and maintain product information,<br /> including descriptions, images, and pricing, in one central location.
                            </Typography.Text>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "18px", lineHeight: "29px", color: "#3D3D3D", letterSpacing: "0px", marginTop: "24px", alignSelf: "flex-start" }}>
                                This ensures that all channels have access to the most up-to-date and accurate product<br /> information.
                            </Typography.Text>
                            <div style={{ display: "flex", gap: "46px", alignItems: "center", marginTop: "52px" }}>
                                <img src="/images/Desktop/Supplysail Dashboard/SS-hero image.png" style={{ width: "805px", height: "429px", marginTop: "0px" }} />
                            </div>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "22px", lineHeight: "28px", color: "#302E2E", letterSpacing: "0.4px", marginTop: "110px", alignSelf: "flex-start" }}>
                                Timeline
                            </Typography.Text>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "18px", lineHeight: "29px", color: "#3D3D3D", letterSpacing: "0.4px", marginTop: "18px", alignSelf: "flex-start" }}>
                                4 months from kickoff to launch
                            </Typography.Text>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "22px", lineHeight: "28px", color: "#302E2E", letterSpacing: "0.4px", marginTop: "102px", alignSelf: "flex-start" }}>
                                The team
                            </Typography.Text>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "18px", lineHeight: "29px", color: "#3D3D3D", letterSpacing: "0.4px", marginTop: "18px", alignSelf: "flex-start" }}>
                                Direct team: Me (lead designer); PM; User Researcher; Engineering team
                            </Typography.Text>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "18px", lineHeight: "29px", color: "#3D3D3D", letterSpacing: "0.4px", marginTop: "32px", alignSelf: "flex-start" }}>
                                I did all the UX / Interaction design and oversaw development of this 'v1' app, with<br /> participation in user research, project management, and visual design
                            </Typography.Text>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "22px", lineHeight: "28px", color: "#302E2E", letterSpacing: "0.4px", marginTop: "102px", alignSelf: "flex-start" }}>
                                What shipped
                            </Typography.Text>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "22px", lineHeight: "28px", color: "#302E2E", letterSpacing: "0.4px", marginTop: "102px", alignSelf: "flex-start" }}>
                                The provider dashboard
                            </Typography.Text>
                            <Typography.Paragraph style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "18px", lineHeight: "29px", color: "#3D3D3D", letterSpacing: "0.4px", marginTop: "42px", alignSelf: "flex-start", marginLeft: "0px" }}>
                                A reduced dashboard enables what a proper dashboard actually does: providing a glance at<br /> sorted and optimized statistics and quick access to every important area.
                            </Typography.Paragraph>
                            <div style={{ display: "flex", gap: "48px", justifyContent: "center", marginTop: "62px", }}>
                                <img src="/images/Desktop/Supplysail Dashboard/The provider dashboard.png" style={{ width: "647px", height: "337px" }} />
                            </div>

                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "22px", lineHeight: "28px", color: "#302E2E", letterSpacing: "0.4px", marginTop: "102px", alignSelf: "flex-start" }}>
                                A brand new provider design system + shareable component library
                            </Typography.Text>
                            <Typography.Paragraph style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "18px", lineHeight: "29px", color: "#3D3D3D", letterSpacing: "0.4px", marginTop: "42px", alignSelf: "flex-start", marginLeft: "0px" }}>
                                Supplysail conveys an inviting, robust and familiar appearance. A bold choice in color stays in<br /> mind and beautifully accompanies visual elements and components.
                            </Typography.Paragraph>
                            <div style={{ display: "flex", gap: "44px", justifyContent: "center", marginTop: "62px", }}>
                                <img src="/images/Desktop/Supplysail Dashboard/design system -1.png" style={{ width: "410px", height: "939px" }} />
                                <img src="/images/Desktop/Supplysail Dashboard/design system -2.png" style={{ width: "410px", height: "939px" }} />
                            </div>

                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "22px", lineHeight: "28px", color: "#302E2E", letterSpacing: "0.4px", marginTop: "102px", alignSelf: "flex-start" }}>
                                PIM view
                            </Typography.Text>
                            <Typography.Paragraph style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "18px", lineHeight: "29px", color: "#3D3D3D", letterSpacing: "0.4px", marginTop: "42px", alignSelf: "flex-start", marginLeft: "0px" }}>
                                A simple table that displays all product information, with the option to add new products or<br /> customize the view to suit your needs.
                            </Typography.Paragraph>
                            <div style={{ display: "flex", gap: "20px", justifyContent: "center", marginTop: "62px", }}>
                                <img src="/images/Desktop/Supplysail Dashboard/PIM view.png" style={{ width: "647px", height: "394px" }} />
                            </div>

                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "22px", lineHeight: "28px", color: "#302E2E", letterSpacing: "0.4px", marginTop: "102px", alignSelf: "flex-start" }}>
                                Add products
                            </Typography.Text>
                            <Typography.Paragraph style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "18px", lineHeight: "29px", color: "#3D3D3D", letterSpacing: "0.4px", marginTop: "42px", alignSelf: "flex-start", marginLeft: "0px" }}>
                                A flexible and straightforward way to add products, either individually or in bulk.
                            </Typography.Paragraph>
                            <div style={{ display: "flex", gap: "20px", justifyContent: "center", marginTop: "62px", }}>
                                <img src="/images/Desktop/Supplysail Dashboard/Add products.png" style={{ width: "647px", height: "394px" }} />
                            </div>

                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "22px", lineHeight: "28px", color: "#302E2E", letterSpacing: "0.4px", marginTop: "102px", alignSelf: "flex-start" }}>
                                Add product details
                            </Typography.Text>
                            <Typography.Paragraph style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "18px", lineHeight: "29px", color: "#3D3D3D", letterSpacing: "0.4px", marginTop: "42px", alignSelf: "flex-start", marginLeft: "0px" }}>
                                A straightforward "Enter Details" view where information is organized into categories, with the<br /> ability to view completion percentage and access all necessary options for managing product<br /> information.
                            </Typography.Paragraph>
                            <div style={{ display: "flex", gap: "20px", justifyContent: "center", marginTop: "62px", }}>
                                <img src="/images/Desktop/Supplysail Dashboard/Add product details.png" style={{ width: "647px", height: "565px" }} />
                            </div>

                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "22px", lineHeight: "28px", color: "#302E2E", letterSpacing: "0.4px", marginTop: "102px", alignSelf: "flex-start" }}>
                                Bulk import
                            </Typography.Text>
                            <Typography.Paragraph style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "18px", lineHeight: "29px", color: "#3D3D3D", letterSpacing: "0.4px", marginTop: "42px", alignSelf: "flex-start", marginLeft: "0px" }}>
                                A bulk import function that doesn't impose limitations, checks the data for accuracy, identifies<br /> any inconsistencies or missing information, and provides solutions for resolving those issues.
                            </Typography.Paragraph>
                            <div style={{ display: "flex", gap: "20px", justifyContent: "center", marginTop: "62px", }}>
                                <img src="/images/Desktop/Supplysail Dashboard/Bulk import.png" style={{ width: "647px", height: "512px" }} />
                            </div>

                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "22px", lineHeight: "28px", color: "#302E2E", letterSpacing: "0.4px", marginTop: "102px", alignSelf: "flex-start" }}>
                                Settings view
                            </Typography.Text>
                            <Typography.Paragraph style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "18px", lineHeight: "29px", color: "#3D3D3D", letterSpacing: "0.4px", marginTop: "42px", alignSelf: "flex-start", marginLeft: "0px" }}>
                                A simple settings view providing access to all platform information.
                            </Typography.Paragraph>
                            <div style={{ display: "flex", gap: "20px", justifyContent: "center", marginTop: "62px", }}>
                                <img src="/images/Desktop/Supplysail Dashboard/Settings view.png" style={{ width: "639px", height: "360px" }} />
                            </div>

                            <Typography.Paragraph style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "18px", lineHeight: "29px", color: "#3D3D3D", letterSpacing: "0.4px", marginTop: "106px", alignSelf: "flex-start", marginLeft: "0px" }}>
                                The PIM platform also provided analytics and reporting capabilities that helped the company<br /> to better understand their customers and make data-driven decisions. They were able to track<br /> which products were selling well, and which channels were driving the most sales. This allowed<br /> them to optimize their product offerings and marketing efforts, which further increased their<br /> sales and revenue.
                            </Typography.Paragraph>

                            <Typography.Paragraph style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "18px", lineHeight: "29px", color: "#3D3D3D", letterSpacing: "0.4px", marginTop: "110px", alignSelf: "flex-start", marginLeft: "0px" }}>
                                <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "22px", lineHeight: "28px", color: "#302E2E", letterSpacing: "0.4px", marginTop: "0px", alignSelf: "flex-start" }}>
                                    Outcome
                                </Typography.Text><br /><br />
                                The platform allowed the companies to centralize and easily update product information,<br /> resulting in improved accuracy, consistency, and customer satisfaction. The platform also<br /> provided valuable analytics and reporting capabilities, helping the company make data-driven<br /> decisions and increase sales.
                                <br /><br />
                                Our next steps are to ship responsive versions of the platform, and continue thinking about<br /> how to convey value holistically across our entire provider ecosystem.
                                <br /><br />
                                Examples of key benefits:
                                <br /><br />
                                <ul style={{ listStyleType: "disc" }}>
                                    <li>Consistent product information across all channels, resulting<br /> in improved customer experience and increased sales</li>
                                    <li>Easy management and maintenance of product information,<br /> reducing the need for manual updates and saving time and<br /> resources</li>
                                    <li>Improved efficiency and accuracy in product data, resulting in<br /> better inventory management and reduced costs</li>
                                    <li>Ability to easily scale and expand as the company grows</li>
                                </ul>
                            </Typography.Paragraph>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", gap: "16px", marginTop: "231px" }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", height: "86px", width: "269px", background: "#FFFFFF", border: "1px solid rgba(0, 0, 0, 0.075)", boxShadow: "0px 6px 17px rgba(0, 0, 0, 0.05)", borderRadius: "8px", justifyContent: "center", padding: "0px 20px", opacity: "1", cursor: "pointer" }}>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "18px", lineHeight: "28px", color: "#000000", letterSpacing: "0.4px" }}>
                                Bren
                            </Typography.Text>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "19px", lineHeight: "28px", color: "rgba(0, 0, 0, 0.6)", letterSpacing: "0.4px" }}>
                                Previous
                            </Typography.Text>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", height: "86px", width: "269px", background: "#FFFFFF", border: "1px solid rgba(0, 0, 0, 0.075)", boxShadow: "0px 6px 17px rgba(0, 0, 0, 0.05)", borderRadius: "8px", justifyContent: "center", padding: "0px 20px", opacity: "1", cursor: "pointer" }}>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "18px", lineHeight: "28px", color: "#000000", letterSpacing: "0.4px" }}>
                                UpSquad
                            </Typography.Text>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "19px", lineHeight: "28px", color: "rgba(0, 0, 0, 0.6)", letterSpacing: "0.4px" }}>
                                Next
                            </Typography.Text>
                        </div>
                    </div>
                    <Footer />
                </>
            }

        </div>
    )
}

export default SupplySail