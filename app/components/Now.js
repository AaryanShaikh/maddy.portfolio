"use client"
import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Typography } from 'antd'
import LoadingSkeleton from './LoadingSkeleton'

const Now = () => {
    const [isloading, setisloading] = useState(true)

    useEffect(() => {
        setisloading(false)
    }, [])

    return (
        <div>
            {isloading ? <LoadingSkeleton /> : ""}
            <Header />
            <div style={{ position: "relative", left: "25.59%", top: "60.29px", display: "flex", flexDirection: "column" }}>
                <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "39px", lineHeight: "47px", color: "#302E2E", marginTop: "60.29px" }}>Now-ish</Typography.Text>
                <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "25px", lineHeight: "39px", color: "#525252", marginTop: "19px", letterSpacing: "0.4px" }}>This is what happens in my life.</Typography.Text>
                <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "16px", lineHeight: "29px", color: "rgba(82, 82, 82, 0.8)", marginTop: "15.16px", letterSpacing: "0.6px" }}>This is what happens in my life.</Typography.Text>
                <div style={{ marginTop: "159.84px", display: "flex", flexDirection: "column", gap: "12px" }}>
                    <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "25px", lineHeight: "39px", color: "#302E2E", marginTop: "15.16px", letterSpacing: "0.4px" }}>- Product Design at Mediyum Design Studio.</Typography.Text>
                    <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "25px", lineHeight: "39px", color: "#302E2E", marginTop: "15.16px", letterSpacing: "0.4px" }}>- Planning to move out soon</Typography.Text>
                    <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "25px", lineHeight: "39px", color: "#302E2E", marginTop: "15.16px", letterSpacing: "0.4px" }}>- Thinking</Typography.Text>
                </div>
                <div style={{ marginTop: "160px" }}>
                    <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "18px", lineHeight: "28px", color: "#302E2E", letterSpacing: "0.4px" }}>Currently Reading</Typography.Text>
                    <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "43px" }}>
                        <div style={{ display: "flex" }}>
                            <img src="/images/Desktop/Now/Book-1.png" />
                            <div style={{ display: "flex", flexDirection: "column", gap: "10px", justifyContent: "center", marginLeft: "23px" }}>
                                <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "16px", lineHeight: "27px", color: "#302E2E", letterSpacing: "0.4px" }}>Garud Puran</Typography.Text>
                                <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "16px", lineHeight: "26px", color: "rgba(0, 0, 0, 0.6)", letterSpacing: "0.4px" }}>Shri Hira Ballabh Joshi</Typography.Text>
                            </div>
                        </div>
                        <div style={{ display: "flex" }}>
                            <img src="/images/Desktop/Now/Book-2.png" />
                            <div style={{ display: "flex", flexDirection: "column", gap: "10px", justifyContent: "center", marginLeft: "23px" }}>
                                <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "16px", lineHeight: "27px", color: "#302E2E", letterSpacing: "0.4px" }}>The Body: A Guide for Occupants</Typography.Text>
                                <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "16px", lineHeight: "26px", color: "rgba(0, 0, 0, 0.6)", letterSpacing: "0.4px" }}>Bill Bryson</Typography.Text>
                            </div>
                        </div>
                        <div style={{ display: "flex" }}>
                            <img src="/images/Desktop/Now/Book-3.png" />
                            <div style={{ display: "flex", flexDirection: "column", gap: "10px", justifyContent: "center", marginLeft: "23px" }}>
                                <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "16px", lineHeight: "27px", color: "#302E2E", letterSpacing: "0.4px" }}>Why Has Nobody Told Me This Before?</Typography.Text>
                                <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "16px", lineHeight: "26px", color: "rgba(0, 0, 0, 0.6)", letterSpacing: "0.4px" }}>Dr Julie Smith</Typography.Text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Now