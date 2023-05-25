import { Facebook, WhatsApp } from "@mui/icons-material"
import { Box, Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import { Fragment } from "react"

export const Contact = () => {
    return (
        <Fragment>
            <Box
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                minHeight={'80vh'}
                p={'20px'}
            >
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    gap={5}
                >
                    <Box>
                        <Typography variant="h6">
                            Connect With Us
                        </Typography>
                        <Typography variant="body2">
                            We would love to respond to your queries and help you suceed.
                            Feel free to get in touch with us.
                        </Typography>
                    </Box>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={7}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        label="Name"
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        label="Phone"
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        label="Email"
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        label="Subject"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        label="Subject"
                                        multiline
                                        rows={5}
                                    />
                                </Grid>
                                <Grid item >
                                    <Button
                                        variant="contained"
                                        color="primary"
                                    >
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <Grid container spacing={2} direction={'column'}>
                                <Grid item>
                                    <Box
                                        display={'flex'}
                                        gap={5}
                                    >
                                        <Box>
                                            <Typography variant="subtitle2">Email</Typography>
                                        </Box>
                                        <Box>
                                            <Typography variant="body2">Asdakek@gmail.com</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item>
                                    <Box
                                        display={'flex'}
                                        gap={4}
                                    >
                                        <Box>
                                            <Typography variant="subtitle2">Phone</Typography>
                                        </Box>
                                        <Box>
                                            <Typography variant="body2">037-2247777</Typography>
                                            <Typography variant="body2">037-2247562</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item>
                                    <Box
                                        display={'flex'}
                                        gap={4}
                                    >
                                        <Box>
                                            <Typography variant="subtitle2">Address</Typography>
                                        </Box>
                                        <Box>
                                            <Typography variant="body2">No. 194,</Typography>
                                            <Typography variant="body2">Madalassa,</Typography>
                                            <Typography variant="body2">Kekunagolla - Sri Lanka</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item>
                                    <Box
                                        display={'flex'}
                                        gap={2}
                                    >
                                        <IconButton>
                                            <Facebook fontSize="large" />
                                        </IconButton>
                                        <IconButton>
                                            <WhatsApp fontSize="large" />
                                        </IconButton>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Fragment>
    )
}