"use client"
import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Button, Input, Typography } from 'antd'
import LoadingSkeleton from './LoadingSkeleton'
import Footer from './Footer'

const Contact = () => {
    const [isloading, setisloading] = useState(true)

    useEffect(() => {
        setisloading(false)
    }, [])

    return (
        <div>
            {isloading ? <LoadingSkeleton /> : ""}
            <Header pageSel="contact" />
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ width: "606px", height: "472px", marginTop: "62.5px" }}>
                    <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "39px", lineHeight: "47px", colorL: "#302E2E" }}>Contact Vinod</Typography.Text>
                    <Typography.Paragraph style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "22px", lineHeight: "29px", colorL: "#525252", marginTop: "26.5px" }}> Let's envision a better future together by building solutions that positively impact the way we live and leave a better earth for future generations. Get in touch</Typography.Paragraph>
                    <div style={{ marginTop: "46.5px", display: "flex", flexDirection: "column", gap: "12px" }}>
                        <div style={{ display: "flex", gap: "17px" }}>
                            <Input placeholder='Name' style={{ height: "45px", background: "rgba(240, 240, 240, 0.77)", borderRadius: "2px" }} />
                            <Input placeholder='Email' style={{ height: "45px", background: "rgba(240, 240, 240, 0.77)", borderRadius: "2px" }} />
                        </div>
                        <Input.TextArea placeholder="Message" style={{ height: "150px", background: "rgba(240, 240, 240, 0.77)", borderRadius: "2px" }} />
                        <Button style={{ height: "45px", background: "#000000", borderRadius: "2px", color: "#fff" }}>Send Message</Button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact