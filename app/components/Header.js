import { Typography, message } from 'antd'
import { useRouter } from 'next/navigation'
import React from 'react'

const Header = ({ pageSel }) => {
    const router = useRouter()

    return (
        <div style={{ height: "66px", display: "flex", alignItems: "center", width: "100%", justifyContent: "space-around" }}>
            <Typography.Text onClick={() => { message.info("version 1.2.2"); router.push("/") }} style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: "400", fontSize: "16px", lineHeight: "19px", color: "#AFAFAF" }}>Vinod Raichur</Typography.Text>
            <div style={{ display: "flex", gap: "50px" }}>
                <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: "400", fontSize: "16px", lineHeight: "25px", color: pageSel == "Main" ? "#302E2E" : "#AFAFAF", cursor: "pointer" }}>Projects</Typography.Text>
                <Typography.Text onClick={() => router.push("/about")} style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: "400", fontSize: "16px", lineHeight: "25px", color: pageSel == "about" ? "#302E2E" : "#AFAFAF", cursor: "pointer" }}>About</Typography.Text>
                <Typography.Text onClick={() => router.push("/contact")} style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: "400", fontSize: "16px", lineHeight: "25px", color: pageSel == "contact" ? "#302E2E" : "#AFAFAF", cursor: "pointer" }}>Contact</Typography.Text>
            </div>
        </div>
    )
}

export default Header