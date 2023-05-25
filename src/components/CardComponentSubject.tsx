import { Box, Card, Typography } from "@mui/material"

interface Props {
    text: string;
    count: number;
}
export const CardComponentSubject: React.FC<Props> = (props) => {
    const { count, text } = props;
    return (
        <Card
            elevation={1}
            sx={{ borderRadius: 3 }}
        >
            <Box
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                p={3}
            >
                <Box>
                    <Typography
                        variant="subtitle2"
                        sx={{ fontSize: '19px' }}>
                        {text}
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h5">
                        {count}
                    </Typography>
                </Box>
            </Box>
        </Card>
    )
}