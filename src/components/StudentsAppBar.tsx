import { Box, Paper, Typography } from "@mui/material"


interface Props {
    Icon: JSX.Element;
    HeadingText: string;
    SubText: string;
}

export const StudentsAppBar: React.FC<Props> = (props) => {
    const { Icon, HeadingText, SubText } = props;
    return (
        <Box
            display={'flex'}
            gap={3}
            justifyContent={'center'}
        >
            <Box>
                <Paper
                    elevation={0}
                    sx={{ padding: 3 }}
                >
                    {Icon}
                </Paper>
            </Box>
            <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <Box>
                    <Typography variant="h2">{HeadingText}</Typography>
                </Box>
                <Box>
                    <Typography variant="body2">
                        {SubText}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}