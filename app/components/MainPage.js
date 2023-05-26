"use client"
import React, { useState, useEffect } from 'react'
import Header from './Header'
import { Typography } from 'antd'
import Footer from './Footer'
import data from '../data.json'
import { useRouter } from 'next/navigation';
import LoadingSkeleton from './LoadingSkeleton'

const MainPage = () => {
    const router = useRouter();
    const [isloading, setisloading] = useState(true)

    useEffect(() => {
        setisloading(false)
    }, [])

    return (
        <div>
            {isloading ? <LoadingSkeleton /> : ""}
            <Header pageSel="Main" />
            <div style={{ display: "flex", flexDirection: "column", width: "100%", alignItems: "center", marginTop: "62px" }}>
                <Typography.Title style={{ fontFamily: "Avenir LT Std" }}>Hi, I'm Vinod</Typography.Title>
                <Typography.Paragraph style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "22px", lineHeight: "29px", width: "769.17px", display: "flex", alignItems: "center", textAlign: "center" }}>I'm a digital product designer who cares about solving complex problems by deeply understanding the people around me and the worlds they live in.</Typography.Paragraph>
                <Typography.Text onClick={() => router.push('/about')} style={{ color: "#000000", textDecoration: "underline", fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "22px", lineHeight: "29px", cursor: "pointer" }}>Read more</Typography.Text>
            </div>
            <div style={{ display: "flex", flexDirection: "column", marginTop: "47.97px", alignItems: "center", gap: "20px" }}>
                <img onClick={() => router.push("/projects/F1rst")} src={`/images/Desktop/Index/F1rst.png`} height={356} width={803} />
                <img onClick={() => router.push("/projects/ShriramHousingFinance")} src={`/images/Desktop/Index/Shriram Housing Finance.png`} height={356} width={803} />
                <img src={`/images/Desktop/Index/Bren.png`} height={356} width={803} />
                <img src={`/images/Desktop/Index/Supplysail Dashboard.png`} height={356} width={803} />
                <img src={`/images/Desktop/Index/UpSquad.png`} height={356} width={803} />
                <img src={`/images/Desktop/Index/UPSHIFT by Unisolve.png`} height={356} width={803} />
            </div>
            <Footer />
        </div>
    )
}

export default MainPage