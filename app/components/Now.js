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
                <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "39px", lineHeight: "47px", colorL: "#302E2E", marginTop: "60.29px" }}>Now-ish</Typography.Text>
                <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "25px", lineHeight: "39px", colorL: "#525252", marginTop: "19px", letterSpacing: "0.4px" }}>This is what happens in my life.</Typography.Text>
                <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "16px", lineHeight: "29px", colorL: "rgba(82, 82, 82, 0.8)", marginTop: "15.16px", letterSpacing: "0.6px" }}>This is what happens in my life.</Typography.Text>
                <div style={{ marginTop: "159.84px", display: "flex", flexDirection: "column", gap: "12px" }}>
                    <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "25px", lineHeight: "39px", colorL: "#302E2E", marginTop: "15.16px", letterSpacing: "0.4px" }}>- Product Design at Mediyum Design Studio.</Typography.Text>
                    <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "25px", lineHeight: "39px", colorL: "#302E2E", marginTop: "15.16px", letterSpacing: "0.4px" }}>- Planning to move out soon</Typography.Text>
                    <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "25px", lineHeight: "39px", colorL: "#302E2E", marginTop: "15.16px", letterSpacing: "0.4px" }}>- Thinking</Typography.Text>
                </div>
                
            </div>
            <Footer />
        </div>
    )
}

export default Now