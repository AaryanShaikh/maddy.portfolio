import { Typography } from 'antd'
import React from 'react'

const Header = () => {
    return (
        <div style={{ height: "66px", display: "flex", alignItems: "center", width: "100%", justifyContent: "space-around" }}>
            <Typography.Text type="secondary">Vinod Raichur</Typography.Text>
            <div style={{ display: "flex", gap: "50px" }}>
                <Typography.Text>Projects</Typography.Text>
                <Typography.Text>About</Typography.Text>
                <Typography.Text>Contact</Typography.Text>
            </div>
        </div>
    )
}

export default Header