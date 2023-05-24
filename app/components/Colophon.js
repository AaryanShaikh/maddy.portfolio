"use client"
import { Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import LoadingSkeleton from './LoadingSkeleton'

const Colophon = () => {
    const [isloading, setisloading] = useState(true)

    useEffect(() => {
        setisloading(false)
    }, [])
    
    return (
        <div>
             {isloading ? <LoadingSkeleton /> : ""}
            <Header />
            <div style={{ position: "relative", left: "25.59%", top: "60.29px", display: "flex", flexDirection: "column" }}>
                <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "39px", lineHeight: "47px", color: "#302E2E", }}>Currently reading</Typography.Text>
                <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "25px", lineHeight: "39px", color: "#525252", letterSpacing: "0.4px", marginTop: "18.98px" }}> Everything about this website </Typography.Text>
                <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "16px", lineHeight: "29px", color: "rgba(82, 82, 82, 0.8)", letterSpacing: "0.6px", marginTop: "15px" }}> Everything about this website </Typography.Text>
                <div style={{ marginTop: "159px", display: "flex", flexDirection: "column" }}>
                    <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "18px", lineHeight: "28px", color: "#302E2E", letterSpacing: "0.4px", marginBottom: "33px" }}> Typography </Typography.Text>
                    <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "16px", lineHeight: "25px", color: "#000000", letterSpacing: "0.4px" }}>TT Interphases Pro by TypeType</Typography.Text>
                </div>
                <div style={{ marginTop: "159px", display: "flex", flexDirection: "column" }}>
                    <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "18px", lineHeight: "28px", color: "#302E2E", letterSpacing: "0.4px", marginBottom: "33px" }}> Technical </Typography.Text>
                    <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "16px", lineHeight: "25px", color: "#000000", letterSpacing: "0.4px", width: "594px" }}>This site was built using Next.js – The React Framework for the Web. It runs purely by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.</Typography.Text>
                </div>
                <div style={{ marginTop: "159px", display: "flex", flexDirection: "column" }}>
                    <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "18px", lineHeight: "28px", color: "#302E2E", letterSpacing: "0.4px", marginBottom: "33px" }}> Photography </Typography.Text>
                    <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "16px", lineHeight: "25px", color: "#3D3D3D", letterSpacing: "0.4px" }}>All images were taken or created by Vinod Raichur, if not stated otherwise.</Typography.Text>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Colophon