import { Avatar, Box, Card, CardContent, Typography } from "@mui/material"

export const TopPerformers = () => {
    return (
        <Card
            elevation={2}
            sx={{ margin: '0 8px', marginBottom: '30px' }}
        >
            <CardContent>
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                >
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                        justifyContent={'center'}
                        alignItems={'center'}
                    // gap={1}
                    >
                        <Box>
                            <Avatar style={{ width: 80, height: 80 }} />
                        </Box>
                        <Typography variant="subtitle2">Mohammed Aflan</Typography>
                        <Typography variant="body2">Distric Rank 2</Typography>
                        <Typography variant="body2">2BC</Typography>
                        <Typography variant="body2">Z-Score 2.57842</Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    )
}