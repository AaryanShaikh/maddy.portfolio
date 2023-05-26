import { Typography } from 'antd'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import moment from 'moment';

const Footer = () => {
    const [currentTime, setCurrentTime] = useState(moment().format('hh.mm.ss'));
    const router = useRouter()

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(moment().format('hh.mm.ss'));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <footer style={{ height: "491px", background: "#5B5B5B", marginTop: "121px", position: "relative" }}>
            <div style={{ position: "absolute", width: "472px", height: "219px", left: "17.59%", top: "26.06%" }}>
                <Typography.Text style={{ fontFamily: 'Avenir LT Std', fontStyle: "normal", fontWeight: 400, fontSize: "15px", lineHeight: "22px", color: "#FFFFFF", width: "150px", height: "23px", letterSpacing: "0.4px" }}>©2023 Vinod Raichur</Typography.Text><br /><br />
                <Typography.Text style={{ fontFamily: 'Avenir LT Std', fontStyle: "normal", fontWeight: 400, fontSize: "15px", lineHeight: "26px", color: "rgba(255, 255, 255, 0.4)", width: "150px", height: "23px", letterSpacing: "0.4px" }}>{currentTime} local time (IST)</Typography.Text>
                <Typography.Paragraph style={{ marginTop: "32.11px", lineHeight: "29px", fontSize: "20px", fontWeight: 400, fontFamily: 'Avenir LT Std', fontStyle: "normal", color: "#FFFFFF", letterSpacing: "0.4px", width: "427px", height: "145px" }}>Let's envision a better future together by building solutions that positively impact the way we live and leave a better earth for future generations.<br />
                    <Typography.Text style={{ fontSize: "20px", fontWeight: 400, fontFamily: 'Avenir LT Std', fontStyle: "normal", color: "#FFFFFF99" }}>Get in touch</Typography.Text></Typography.Paragraph>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "0px", gap: "15.39px", position: "absolute", width: "228px", height: "218.73px", left: "58.20%", top: "26.10%" }}>
                <Typography.Text style={{ fontFamily: 'Avenir LT Std', fontStyle: "normal", fontWeight: 400, fontSize: "15px", lineHeight: "22px", height: "23px", color: "#ffffff", letterSpacing: "0.4px" }}>Information</Typography.Text>
                <div style={{ marginTop: "15.39px", display: "flex", flexDirection: "column", gap: "5.39px" }}>
                    <Typography.Text onClick={() => router.push("/about")} style={{ fontFamily: 'Avenir LT Std', fontStyle: "normal", fontWeight: 400, fontSize: "15px", lineHeight: "22px", height: "23px", color: "rgba(255, 255, 255, 0.4)", letterSpacing: "0.4px", cursor: "pointer" }}>About</Typography.Text>
                    <Typography.Text onClick={() => router.push("/projects")} style={{ fontFamily: 'Avenir LT Std', fontStyle: "normal", fontWeight: 400, fontSize: "15px", lineHeight: "22px", height: "23px", color: "rgba(255, 255, 255, 0.4)", letterSpacing: "0.4px", cursor: "pointer" }}>Projects</Typography.Text>
                    <Typography.Text onClick={() => router.push("/now")} style={{ fontFamily: 'Avenir LT Std', fontStyle: "normal", fontWeight: 400, fontSize: "15px", lineHeight: "22px", height: "23px", color: "rgba(255, 255, 255, 0.4)", letterSpacing: "0.4px", cursor: "pointer" }}>Now</Typography.Text>
                    <Typography.Text onClick={() => router.push("/colophon")} style={{ fontFamily: 'Avenir LT Std', fontStyle: "normal", fontWeight: 400, fontSize: "15px", lineHeight: "22px", height: "23px", color: "rgba(255, 255, 255, 0.4)", letterSpacing: "0.4px", cursor: "pointer" }}>Colophon</Typography.Text>
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "0px", gap: "15.39px", position: "absolute", width: "228px", height: "218.73px", left: "74.33%", top: "26.10%" }}>
                <Typography.Text style={{ fontFamily: 'Avenir LT Std', fontStyle: "normal", fontWeight: 400, fontSize: "15px", lineHeight: "22px", height: "23px", color: "#ffffff", letterSpacing: "0.4px" }}>Connect</Typography.Text>
                <div style={{ marginTop: "15.39px", display: "flex", flexDirection: "column", gap: "5.39px" }}>
                    <Typography.Text style={{ fontFamily: 'Avenir LT Std', fontStyle: "normal", fontWeight: 400, fontSize: "15px", lineHeight: "22px", height: "23px", color: "rgba(255, 255, 255, 0.4)", letterSpacing: "0.4px" }}>LinkedIn</Typography.Text>
                    <Typography.Text style={{ fontFamily: 'Avenir LT Std', fontStyle: "normal", fontWeight: 400, fontSize: "15px", lineHeight: "22px", height: "23px", color: "rgba(255, 255, 255, 0.4)", letterSpacing: "0.4px" }}>Instagram</Typography.Text>
                    <Typography.Text style={{ fontFamily: 'Avenir LT Std', fontStyle: "normal", fontWeight: 400, fontSize: "15px", lineHeight: "22px", height: "23px", color: "rgba(255, 255, 255, 0.4)", letterSpacing: "0.4px" }}>Read.cv</Typography.Text>
                </div>
            </div>
        </footer>
    )
}

export default Footer