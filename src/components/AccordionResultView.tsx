import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Props {
    AccordionSummaryText: string;
    Barchart: JSX.Element
}
export const AccordionResultView: React.FC<Props> = (props) => {
    const { AccordionSummaryText, Barchart } = props;
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
            >
                <Typography>{AccordionSummaryText}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Box>
                    {Barchart}
                </Box>
            </AccordionDetails>
        </Accordion>
    )
}