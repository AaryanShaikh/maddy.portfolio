import { Typography } from 'antd'
import React from 'react'

const Header = ({ pageSel }) => {
    return (
        <div style={{ height: "66px", display: "flex", alignItems: "center", width: "100%", justifyContent: "space-around" }}>
            <Typography.Link href="/" style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: "400", fontSize: "16px", lineHeight: "19px", color: "#AFAFAF" }}>Vinod Raichur</Typography.Link>
            <div style={{ display: "flex", gap: "50px" }}>
                <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: "400", fontSize: "16px", lineHeight: "25px", color: pageSel == "Main" ? "#302E2E" : "#AFAFAF" }}>Projects</Typography.Text>
                <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: "400", fontSize: "16px", lineHeight: "25px", color: pageSel == "about" ? "#302E2E" : "#AFAFAF" }}>About</Typography.Text>
                <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: "400", fontSize: "16px", lineHeight: "25px", color: "#AFAFAF" }}>Contact</Typography.Text>
            </div>
        </div>
    )
}

export default Header