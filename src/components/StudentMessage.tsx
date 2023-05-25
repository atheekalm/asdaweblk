import { FormatQuote } from "@mui/icons-material"
import { Avatar, Box, Card, CardContent, Divider, Rating, Typography } from "@mui/material"


export const StudentMessage = () => {
    return (
        <Card
            elevation={1}
            style={{ borderRadius: 0, margin: '30px 10px' }}
        >
            <CardContent
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px'
                }}
            >
                <Box>
                    <Typography variant="subtitle2">Learning Envirnment</Typography>
                </Box>
                <Box display={'flex'} gap={2}>
                    <Box>
                        <FormatQuote style={{ transform: 'rotate(180deg)' }} />
                    </Box>
                    <Box>
                        <Typography variant="body2" component="p">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga esse, autem veniam voluptates, iure a praesentium ipsa et distinctio hic ab ducimus perferendis laboriosam odio dolorem deleniti. Cupiditate, provident iusto!
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <Divider />
                </Box>
                <Box
                    display={'flex'}
                    alignItems={'center'}
                    gap={2}
                >
                    <Avatar
                        sx={{ width: 50, height: 50 }}
                    />
                    <Box>
                        <Typography variant="subtitle2">Theek Ahammed</Typography>
                        <Rating
                            name="simple-controlled"
                            value={4}
                            size="small"
                        />
                    </Box>
                </Box>
            </CardContent>
        </Card>
    )
}