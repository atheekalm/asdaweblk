import { Box, Card, CardContent, Typography } from "@mui/material"

interface Props {
    Subject: string;
    tittle: string;
    Icon: JSX.Element;
    onClick: () => void;
}
export const CardComponent: React.FC<Props> = (props) => {
    const { Subject, tittle, Icon, onClick } = props;
    return (
        <Card
            sx={{ display: 'flex', cursor: 'pointer' }}
            elevation={3}
            onClick={onClick}
        >
            <Box padding={2}>
                {Icon}
            </Box>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {Subject}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {tittle}
                </Typography>
            </CardContent>
        </Card>
    )
}