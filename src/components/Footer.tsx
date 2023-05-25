import { Copyright } from "@mui/icons-material"
import { AppBar, Toolbar, Typography } from "@mui/material"
import { Fragment } from "react"

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Fragment>
            <AppBar position="static" sx={{ bgcolor: '#dedee2' }}>
                <Toolbar
                    sx={{ padding: 1.5, gap: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black' }}
                >
                    <Copyright />
                    <Typography variant="subtitle2">{currentYear} ASDA, All Rights Reserved.</Typography>
                </Toolbar>
            </AppBar>
        </Fragment>
    )
}