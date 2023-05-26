"use client"
import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import { Typography } from 'antd'
import Header from './Header'

const ShriramHousingFinance = () => {
    const [isloading, setisloading] = useState(true)

    useEffect(() => {
        setisloading(false)
    }, [])
    return (
        <div>
            {isloading ? <LoadingSkeleton /> : ""}
            {
                isloading ? "" : <>
                    <Header pageSel="projects" />
                    <div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "61px" }}>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "35px", lineHeight: "52px", color: "#302E2E", width: "536px", textAlign: "center" }}>
                                Getting Fintech right for users from tier 3 towns
                            </Typography.Text>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "16px", lineHeight: "29px", color: "#3D3D3D", fontStyle: "italic", letterSpacing: "0.4px", marginTop: "29px", width: "592px" }}>
                                Shriram Housing Finance Limited (SHFL) is a housing finance company part of the Shriram Group, committed to helping people own their dream home.
                            </Typography.Text>
                            <img src="/images/Desktop/Shriram Housing Finance/SHF -round.png" style={{ marginTop: "68px" }} />
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "22px", lineHeight: "29px", color: "#525252", marginTop: "42px", width: "842px", textAlign: "center" }}>
                                Digital transformation and increased customer experience are driving the shift towards online banking solutions. To keep up with these trends, traditional banks must adapt new technologies and focus on customer-centric processes. In light of this, the Chief Digital Officer of this organization decided to transform their offline loan application process into an automated online process.
                            </Typography.Text>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", position: "relative", left: "22%", marginTop: "146px" }}>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "22px", lineHeight: "28px", color: "#302E2E", opacity: "0.26" }}>Solution</Typography.Text>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "18px", lineHeight: "29px", color: "#3D3D3D", width: "801px", letterSpacing: "0.4px", marginTop: "32px" }}>
                                We created an application to simplify the home loan application process for non-veterans, by providing step-by-step instructions and explanations of technical terms. The application is also being scaled to support multiple languages to make it more accessible to more people.
                            </Typography.Text>
                            <img src="/images/Desktop/Shriram Housing Finance/Shriram Housing Finance -Hero image.png" style={{ marginTop: "42px", width: "812px", height: "456px" }} />
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "22px", lineHeight: "28px", color: "#302E2E", letterSpacing: "0.4px", marginTop: "63px" }}>
                                Timeline
                            </Typography.Text>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "18px", lineHeight: "29px", color: "#3D3D3D", letterSpacing: "0.4px", marginTop: "18px" }}>
                                4.5 months from kickoff to launch
                            </Typography.Text>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "22px", lineHeight: "28px", color: "#302E2E", letterSpacing: "0.4px", marginTop: "63px" }}>
                                The team
                            </Typography.Text>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "18px", lineHeight: "29px", color: "#3D3D3D", letterSpacing: "0.4px", marginTop: "18px", width: "801px" }}>
                                Direct team: Me (lead designer); PM; User Researcher; Illustrator; Engineering team<br /><br />
                                This was a huge cross functional effort. I led workshops and collaborated extensively with with the Sales and Account Management teams, Marketing and others.
                            </Typography.Text>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "22px", lineHeight: "28px", color: "#302E2E", letterSpacing: "0.4px", marginTop: "63px" }}>
                                Process
                            </Typography.Text>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "18px", lineHeight: "29px", color: "#3D3D3D", letterSpacing: "0.4px", marginTop: "18px", width: "801px" }}>
                                We partnered extensively with cross functional teams to learn how customers think about value. I led workshops with sales manager and relationship managers to get their ideas on paper.<br /><br />
                                My Researcher and I also partnered to conduct 4 1-hour interviews directly with sales and relationship managers. In between tests we'd synthesize feedback and iterate the prototype(s) for the next customer. All tests were recorded for our team.<br /><br />
                                Examples of key problems and their insights:<br /><br />
                            </Typography.Text>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,315px)", gap: "29px 59px" }}>
                                <ul style={{ width: "351px", fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "18px", lineHeight: "29px", color: "#000000", letterSpacing: "0.4px" }}><li>Customers don’t know the loan application process</li></ul>
                                <ol style={{ listStyle: "none", width: "481px", fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "18px", lineHeight: "29px", color: "#3D3D3D", letterSpacing: "0.4px" }}><li>Let’s add informative articles and a step-by-step loan process feature with examples on the homepage to aid customers in understanding home loans.</li></ol>

                                <ul style={{ width: "351px", fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "18px", lineHeight: "29px", color: "#000000", letterSpacing: "0.4px", }}><li>Customer feels like, nonstop they have to just keep on feeling up the details</li></ul>
                                <ol style={{ listStyle: "none", width: "481px", fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "18px", lineHeight: "29px", color: "#3D3D3D", letterSpacing: "0.4px" }}><li>Let's optimize for high information density without information overload.</li></ol>

                                <ul style={{ width: "351px", fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "18px", lineHeight: "29px", color: "#000000", letterSpacing: "0.4px", }}><li>While applying for a loan, customers don't know which step they’re at</li></ul>
                                <ol style={{ listStyle: "none", width: "481px", fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "18px", lineHeight: "29px", color: "#3D3D3D", letterSpacing: "0.4px" }}><li>Let’s provide options to assist the users to choose the right path while applying.</li></ol>

                                <ul style={{ width: "351px", fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "18px", lineHeight: "29px", color: "#000000", letterSpacing: "0.4px", }}><li>Customers feel agitated to pay the processing fees</li></ul>
                                <ol style={{ listStyle: "none", width: "481px", fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "18px", lineHeight: "29px", color: "#3D3D3D", letterSpacing: "0.4px" }}><li>Let’s provide reasons for the customer mentioning why the fees are required. Provide an option to speak to a relationship manager.</li></ol>
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "85px", gap: "43px" }}>
                            <img src="/images/Desktop/Shriram Housing Finance/Process -1.png" style={{ width: "696px", height: "329px" }} />
                            <img src="/images/Desktop/Shriram Housing Finance/Process -2.png" style={{ width: "696px", height: "329px" }} />
                            <img src="/images/Desktop/Shriram Housing Finance/Process -3.png" style={{ width: "696px", height: "329px" }} />
                            <div style={{ height: "5px", width: "854px", borderTop: "2px solid #DDDCDC", marginTop: "91px" }}></div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", position: "relative", left: "22%", marginTop: "159px" }}>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "22px", lineHeight: "28px", color: "#302E2E", letterSpacing: "0.4px", marginTop: "63px", alignSelf: "flex-start" }}>
                                User flow and Wireframes
                            </Typography.Text>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "18px", lineHeight: "29px", color: "#3D3D3D", letterSpacing: "0.4px", marginTop: "18px", width: "801px" }}>
                                I brainstormed a flow of the portion of the loan application lifecycle that this app would focus on: students viewing and turning in assignments. This helped me organize the required scenarios and views going forward.
                            </Typography.Text>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "45px", gap: "43px" }}>
                            <img src="/images/Desktop/Shriram Housing Finance/User flow.png" style={{ width: "696px", height: "337px" }} />
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", position: "relative", left: "22%", marginTop: "159px" }}>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "18px", lineHeight: "29px", color: "#3D3D3D", letterSpacing: "0.4px", marginTop: "72px", width: "791px" }}>
                                At the beginning of my design process, I created wireframes for testing purposes. I had a list of screens to cover all scenarios and then I started to do grayscale wireframes to detail out the flows.
                            </Typography.Text>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "40px", gap: "43px" }}>
                            <img src="/images/Desktop/Shriram Housing Finance/Wireframes.png" style={{ width: "850px", height: "436px" }} />
                            <div style={{ height: "5px", width: "854px", borderTop: "2px solid #DDDCDC", marginTop: "91px" }}></div>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", position: "relative", left: "22%", marginTop: "159px" }}>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "22px", lineHeight: "28px", color: "#302E2E", letterSpacing: "0.4px", marginTop: "63px", alignSelf: "flex-start" }}>
                                Interaction details
                            </Typography.Text>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "18px", lineHeight: "29px", color: "#3D3D3D", letterSpacing: "0.4px", marginTop: "47px", width: "801px" }}>
                                Once I tested out all usability mistakes, I started designing the final screens in Figma. After a few more iterations, I designed the final screens with Figma. My aim was to deliver a clean, minimalistic, modern look that helps users fulfill their goals quickly.
                            </Typography.Text>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "22px", lineHeight: "28px", color: "#302E2E", letterSpacing: "0.4px", marginTop: "46px", alignSelf: "flex-start" }}>
                                Primary view: Home page
                            </Typography.Text>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "40px", gap: "43px" }}>
                                <img src="/images/Desktop/Shriram Housing Finance/Interaction details -1.png" style={{ width: "865px", height: "499px", alignSelf: "flex-start" }} />
                            </div>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "22px", lineHeight: "28px", color: "#302E2E", letterSpacing: "0.4px", marginTop: "80px", alignSelf: "flex-start" }}>
                                Stories view
                            </Typography.Text>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "40px", gap: "43px" }}>
                                <img src="/images/Desktop/Shriram Housing Finance/Interaction details -2.png" style={{ width: "865px", height: "499px", alignSelf: "flex-start" }} />
                            </div>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "22px", lineHeight: "28px", color: "#302E2E", letterSpacing: "0.4px", marginTop: "80px", alignSelf: "flex-start" }}>
                                Loan application view
                            </Typography.Text>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "40px", gap: "43px" }}>
                                <img src="/images/Desktop/Shriram Housing Finance/Interaction details -3.png" style={{ width: "865px", height: "499px", alignSelf: "flex-start" }} />
                            </div>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "22px", lineHeight: "28px", color: "#302E2E", letterSpacing: "0.4px", marginTop: "80px", alignSelf: "flex-start" }}>
                                Add bank details view
                            </Typography.Text>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "40px", gap: "43px" }}>
                                <img src="/images/Desktop/Shriram Housing Finance/Interaction details -4.png" style={{ width: "865px", height: "499px", alignSelf: "flex-start" }} />
                            </div>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "22px", lineHeight: "28px", color: "#302E2E", letterSpacing: "0.4px", marginTop: "80px", alignSelf: "flex-start" }}>
                                Loan offer view
                            </Typography.Text>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "40px", gap: "43px" }}>
                                <img src="/images/Desktop/Shriram Housing Finance/Interaction details -5.png" style={{ width: "865px", height: "499px", alignSelf: "flex-start" }} />
                            </div>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "22px", lineHeight: "28px", color: "#302E2E", letterSpacing: "0.4px", marginTop: "90px", alignSelf: "flex-start" }}>
                                Outcome
                            </Typography.Text>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "18px", lineHeight: "29px", color: "#3D3D3D", letterSpacing: "0.4px", marginTop: "18px", alignSelf: "flex-start" }}>
                                It has been an exciting journey, and the fun has just begun! We look forward to continuing<br /> working with the users to create the product that is suitable for them while also collaborating<br /> with the product manager to design it in a way that aligns with the market.
                            </Typography.Text>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "68px", gap: "43px" }}>
                                <img src="/images/Desktop/Shriram Housing Finance/Outcome.png" style={{ width: "865px", height: "641px", alignSelf: "flex-start" }} />
                            </div>
                        </div>

                    </div>

                    <div style={{ display: "flex", justifyContent: "center", gap: "16px", marginTop: "231px" }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", height: "86px", width: "269px", background: "#FFFFFF", border: "1px solid rgba(0, 0, 0, 0.075)", boxShadow: "0px 6px 17px rgba(0, 0, 0, 0.05)", borderRadius: "8px", justifyContent: "center", padding: "0px 20px", opacity: "1", cursor: "pointer" }}>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "18px", lineHeight: "28px", color: "#000000", letterSpacing: "0.4px" }}>
                                F1rst.
                            </Typography.Text>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "19px", lineHeight: "28px", color: "rgba(0, 0, 0, 0.6)", letterSpacing: "0.4px" }}>
                                Previous
                            </Typography.Text>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", height: "86px", width: "269px", background: "#FFFFFF", border: "1px solid rgba(0, 0, 0, 0.075)", boxShadow: "0px 6px 17px rgba(0, 0, 0, 0.05)", borderRadius: "8px", justifyContent: "center", padding: "0px 20px", opacity: "1", cursor: "pointer" }}>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "18px", lineHeight: "28px", color: "#000000", letterSpacing: "0.4px" }}>
                                Bren
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

export default ShriramHousingFinance