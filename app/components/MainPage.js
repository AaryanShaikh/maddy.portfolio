"use client"
import React, { useState } from 'react'
import Header from './Header'
import { Typography } from 'antd'

const MainPage = () => {
    return (
        <div>
            <Header />
            <div style={{ display: "flex", flexDirection: "column", width: "100%", alignItems: "center", marginTop: "62px" }}>
                <Typography.Title>Hi, I'm Vinod</Typography.Title>
                <Typography.Paragraph style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "22px", lineHeight: "29px", width: "769.17px", display: "flex", alignItems: "center", textAlign: "center" }}>I'm a digital product designer who cares about solving complex problems by deeply understanding the people around me and the worlds they live in.</Typography.Paragraph>
                <Typography.Link style={{ color: "#000000", textDecoration: "underline", fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "22px", lineHeight: "29px" }}>Read more</Typography.Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column", marginTop: "47.97px" }}>

            </div>
        </div>
    )
}

export default MainPage