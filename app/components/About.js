"use client"
import React from 'react'
import Header from './Header'
import { Typography } from 'antd'
import Footer from './Footer'

const About = () => {
    return (
        <div>
            <Header pageSel="about" />
            <div style={{ marginTop: "62.5px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "26.5px" }}>
                    <Typography.Text style={{ fontFamily: 'Avenir LT Std', fontStyle: "normal", fontWeight: 400, fontSize: "39px", lineHeight: "47px", color: "#302E2E" }}>About Vinod</Typography.Text>
                    <Typography.Paragraph style={{ fontFamily: 'Avenir LT Std', fontStyle: "normal", fontWeight: 350, fontSize: "22px", lineHeight: "29px", color: "#525252", width: "606px" }}>I'm always up for a good laugh, tasty food, long walks and quality time with friends. I love acting, reading, as well as calm piano music.</Typography.Paragraph>
                </div>
                <div style={{ display: "flex", height: "537px", gap: "16px", marginTop: "159.5px", overflow: "hidden" }}>
                    <img src="/images/Desktop/About/vinod_2.png" style={{ borderRadius: "8px" }} />
                    <img src="/images/Desktop/About/vinod_1.png" style={{ borderRadius: "8px" }} />
                    <img src="/images/Desktop/About/vinod_3.png" style={{ borderRadius: "8px" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                    <Typography.Paragraph style={{ marginTop: "146.5px", width: "616px", fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "18px", lineHeight: "29px", letterSpacing: "0.4px", color: "#3D3D3D" }}>
                        Throughout the past 22 years, growing from a little toddler who painted his walls with sharpies, I still heed my curiosity to build and create.
                    </Typography.Paragraph>
                    <Typography.Paragraph style={{ marginTop: "16px", width: "606px", fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "18px", lineHeight: "29px", letterSpacing: "0.4px", color: "#3D3D3D" }}>
                        Not sure if calling myself a minimalist matters, but the concept helps me to simplify my life and make room for what I think is essential: relationships, creation, solitude and chai.
                    </Typography.Paragraph>
                    <Typography.Paragraph style={{ marginTop: "16px", width: "591px", fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "18px", lineHeight: "29px", letterSpacing: "0.4px", color: "#3D3D3D" }}>
                        To design honest and meaningful products, it is necessary to try to understand people's needs and interact with everyone eye-to-eye. It's a big task sometimes, but I try to listen and provide a safe space for everyone.
                    </Typography.Paragraph>
                    <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "22px", lineHeight: "28px", letterSpacing: "0.4px", color: "#302E2E", marginTop: "159.42px" }}>
                        Experience
                    </Typography.Text>
                    <Typography.Paragraph style={{ marginTop: "32.58px", width: "606px", fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "18px", lineHeight: "29px", letterSpacing: "0.4px", color: "#3D3D3D" }}>
                        So as not to bore you, I'll leave my school career out of this. Many important lessons can only be found outside the classroom and studying for biology class was never my dearest thing to do.
                    </Typography.Paragraph>
                    <Typography.Paragraph style={{ marginTop: "16px", width: "606px", fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "18px", lineHeight: "29px", letterSpacing: "0.4px", color: "#3D3D3D" }}>
                        During college, however, I compiled my first lines of code and started to work as a freelancer simultaneously. It paved the way to rich partnerships and important friendships that nurture my inspiration.
                    </Typography.Paragraph>
                    <Typography.Paragraph style={{ marginTop: "16px", width: "579.59px", fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "18px", lineHeight: "29px", letterSpacing: "0.4px", color: "#3D3D3D" }}>
                        As of now, graduation is near and while it taught me to thoroughly plan and execute tasks, I am looking forward to work at Mediyum full-time.
                    </Typography.Paragraph>
                    <Typography.Paragraph style={{ marginTop: "14.8px", width: "579.59px", fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "18px", lineHeight: "29px", letterSpacing: "0.4px", color: "#3D3D3D" }}>
                        If you want regular updates, see my "Now" page.
                    </Typography.Paragraph>
                    <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "22px", lineHeight: "28px", letterSpacing: "0.4px", color: "#302E2E", marginTop: "159.42px", marginBottom: "32px" }}>
                        People I'd love to high-five in reality
                    </Typography.Text>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,auto)", width: "780px", gap: "16px 13px", marginTop: "16px" }}>
                        {
                            [
                                { name: "Elon Musk", met: false },
                                { name: "Zakir Khan", met: false },
                                { name: "Deepa Malik", met: true },
                                { name: "Kunal Shah", met: false },
                                { name: "Sanjay Mishra", met: false },
                                { name: "Neil deGrasse Tyson", met: false },
                                { name: "Sachin Tendulkar", met: false },
                                { name: "Rakesh Sharma", met: false },
                                { name: "Nana Patekar", met: false },
                                { name: "Romila Thapar", met: false },
                                { name: "Salman Khan", met: false },
                                { name: "Roddam Narasimha", met: false },
                                { name: "Narendra Modi", met: false },
                                { name: "Barak Obama", met: false },
                                { name: "Denzel Washington", met: false },
                                { name: "Shradha Kapoor", met: false },
                                { name: "Robert Downey Jr.", met: false },
                                { name: "Arjit Songh", met: false },
                                { name: "Erika Lust", met: false },
                                { name: "Udit Narayan", met: false },
                                { name: "Bear Grylls", met: false },
                                { name: "Shah Rukh Khan", met: false },
                                { name: "Manohar Parrikar", met: true }
                            ].map((ele, ind) => {
                                return <Typography.Text key={ind} style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "16px", lineHeight: "25px", color: ele.met ? "#3D3D3D99" : "#3D3D3D", display: "flex", alignItems: "center" }}><svg style={{ opacity: ele.met ? "1" : "0" }} width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.75005 12.5019L14.4697 4.78223L15.5304 5.84288L6.75005 14.6232L2.46973 10.3429L3.53038 9.28219L6.75005 12.5019Z" fill="black" />
                                </svg>&nbsp;{ele.name}</Typography.Text>
                            })
                        }
                    </div>
                    <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "22px", lineHeight: "28px", letterSpacing: "0.4px", color: "#302E2E", marginTop: "159.42px" }}>
                        Bucket List
                    </Typography.Text>
                    <Typography.Paragraph style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "18px", lineHeight: "28px", letterSpacing: "0.4px", color: "#3D3D3D", marginTop: "31px", marginBottom: "32px" }}>
                        This is a list of things I will (hopefully) accomplish in this lifetime. The only rule is that I can't delete anything, just add more:
                    </Typography.Paragraph>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(2,auto)", width: "716px", gap: "17px 13px", marginTop: "16px" }}>
                        {
                            [
                                { name: "Travel to Kedarnath", visit: true },
                                { name: "Cycle to Shirdi / Varanasi", visit: false },
                                { name: "Travel to Vrindavan", visit: true },
                                { name: "See Aurora Borealis in person", visit: false },
                                { name: "Travel to Varanasi", visit: true },
                                { name: "Visit all ISKON temples", visit: true },
                                { name: "See Ganga Aarti", visit: true },
                                { name: "Live one month without a phone", visit: false },
                                { name: "Travel to london", visit: false },
                                { name: "Start working on F1rst", visit: true },
                                { name: "Travel to New York", visit: false },
                                { name: "Release a song", visit: false },
                                { name: "See Taj Mahal", visit: true },
                                { name: "Own a telescope", visit: false },
                                { name: "Publish a book (of any kind)", visit: false },
                                { name: "Learn to play piano", visit: false },
                                { name: "Speak at a conference", visit: false },
                            ].map((ele, ind) => {
                                return <Typography.Text key={ind} style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "16px", lineHeight: "25px", color: ele.visit ? "#3D3D3D99" : "#3D3D3D", display: "flex", alignItems: "center" }}><svg style={{ opacity: ele.visit ? "1" : "0" }} width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.75005 12.5019L14.4697 4.78223L15.5304 5.84288L6.75005 14.6232L2.46973 10.3429L3.53038 9.28219L6.75005 12.5019Z" fill="black" />
                                </svg>&nbsp;{ele.name}</Typography.Text>
                            })
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default About