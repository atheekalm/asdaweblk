import { Box, Grid, Typography } from "@mui/material"
import { Fragment } from "react"
import { Groups } from "@mui/icons-material"
import { StudentsAppBar } from "../components/StudentsAppBar"
import { AccordionResultView } from "../components/AccordionResultView"
import { ResultSummaryOftheYearBarChart } from "../components/ResultSummaryOftheYearBarChart"
import { LecturePhysicalScience } from "../components/LecturePhysicalScience"
import { TopPerformarsCarousel } from "../components/TopPerformarsCarousel"
import { SuccessStiriesPhy } from "../components/SuccessStiriesPhy"

export const PhysicalSci = () => {
    return (
        <Fragment>
            <Box
                padding={'20px 20px'}
                display={'flex'}
                flexDirection={'column'}
            >
                <Box
                    padding={5}
                    bgcolor={'#ededed'}
                    borderRadius={5}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <StudentsAppBar
                                Icon={<Groups sx={{ fontSize: '60px' }} />}
                                HeadingText="3K+"
                                SubText="Total Students"
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <StudentsAppBar
                                Icon={<Groups sx={{ fontSize: '60px' }} />}
                                HeadingText="3K+"
                                SubText="Total Students"
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <StudentsAppBar
                                Icon={<Groups sx={{ fontSize: '60px' }} />}
                                HeadingText="3K+"
                                SubText="Total Students"
                            />
                        </Grid>
                    </Grid>
                </Box>
                <Box>
                    <Typography variant="h6">Lectures</Typography>
                    <LecturePhysicalScience />
                </Box>
                <Box>
                    <Typography variant="h6">Success Stories</Typography>
                    <SuccessStiriesPhy />

                </Box>
                <Box>
                    <Typography variant="h6">Best Performers</Typography>
                    <TopPerformarsCarousel />

                </Box>
                <Box>
                    <Typography variant="h6">GCE Advances Level Result Section</Typography>
                    <AccordionResultView
                        AccordionSummaryText="G.C.E ADVANCED LEVEL 2022"
                        Barchart={<ResultSummaryOftheYearBarChart />}
                    />
                    <AccordionResultView
                        AccordionSummaryText="G.C.E ADVANCED LEVEL 2021"
                        Barchart={<ResultSummaryOftheYearBarChart />}

                    />
                    <AccordionResultView
                        AccordionSummaryText="G.C.E ADVANCED LEVEL 2020"
                        Barchart={<ResultSummaryOftheYearBarChart />}

                    />
                    <AccordionResultView
                        AccordionSummaryText="G.C.E ADVANCED LEVEL 2019"
                        Barchart={<ResultSummaryOftheYearBarChart />}

                    />
                    <AccordionResultView
                        AccordionSummaryText="G.C.E ADVANCED LEVEL 2018"
                        Barchart={<ResultSummaryOftheYearBarChart />}

                    />
                    <AccordionResultView
                        AccordionSummaryText="G.C.E ADVANCED LEVEL 2017"
                        Barchart={<ResultSummaryOftheYearBarChart />}

                    />
                    <AccordionResultView
                        AccordionSummaryText="G.C.E ADVANCED LEVEL 2016"
                        Barchart={<ResultSummaryOftheYearBarChart />}

                    />
                    <AccordionResultView
                        AccordionSummaryText="G.C.E ADVANCED LEVEL 2015"
                        Barchart={<ResultSummaryOftheYearBarChart />}

                    />
                    <AccordionResultView
                        AccordionSummaryText="G.C.E ADVANCED LEVEL 2014"
                        Barchart={<ResultSummaryOftheYearBarChart />}

                    />
                    <AccordionResultView
                        AccordionSummaryText="G.C.E ADVANCED LEVEL 2013"
                        Barchart={<ResultSummaryOftheYearBarChart />}

                    />
                    <AccordionResultView
                        AccordionSummaryText="G.C.E ADVANCED LEVEL 2012"
                        Barchart={<ResultSummaryOftheYearBarChart />}

                    />
                    <AccordionResultView
                        AccordionSummaryText="G.C.E ADVANCED LEVEL 2011"
                        Barchart={<ResultSummaryOftheYearBarChart />}

                    />
                    <AccordionResultView
                        AccordionSummaryText="G.C.E ADVANCED LEVEL 2010"
                        Barchart={<ResultSummaryOftheYearBarChart />}

                    />
                    <AccordionResultView
                        AccordionSummaryText="G.C.E ADVANCED LEVEL 2009"
                        Barchart={<ResultSummaryOftheYearBarChart />}

                    />
                    <AccordionResultView
                        AccordionSummaryText="G.C.E ADVANCED LEVEL 2008"
                        Barchart={<ResultSummaryOftheYearBarChart />}

                    />
                    <AccordionResultView
                        AccordionSummaryText="G.C.E ADVANCED LEVEL 2007"
                        Barchart={<ResultSummaryOftheYearBarChart />}

                    />

                </Box>




            </Box>
        </Fragment>
    )
}