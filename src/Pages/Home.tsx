import { Box, Grid, Typography } from "@mui/material"
import { Fragment } from "react"
import { Biotech, Calculate, Groups, TipsAndUpdates } from "@mui/icons-material"
import { CardComponent } from "../components/CardComponent"
import { StudentsAppBar } from "../components/StudentsAppBar"
import { ResultSummaryOftheYearBarChart } from "../components/ResultSummaryOftheYearBarChart"
import { TopPerformarsCarousel } from "../components/TopPerformarsCarousel"
import { StudentMessageCarousel } from "../components/StudentMessageCarousel"
import PATHS from "../constant/Navigation"
import { useNavigate } from "react-router-dom"
import { LineChart } from "../components/LineChart"


export const HomePage = () => {
    const navigate = useNavigate()
    return (
        <Fragment>
            <Box
                padding={'20px 20px'}
                display={'flex'}
                flexDirection={'column'}
                gap={5}
            >
                <Box
                    padding={5}
                    bgcolor={'#ededed'}
                    borderRadius={5}
                >

                    <Grid container>
                        <Grid item md={6}>

                        </Grid>
                        <Grid item md={6}>

                        </Grid>
                    </Grid>

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

                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    gap={2}
                >
                    <Typography variant="h6">Explore Courses by Category</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <CardComponent
                                Icon={<Biotech sx={{ fontSize: '100px' }} />}
                                Subject="Bio Science"
                                tittle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga esse, autem veniam voluptates, iure a 
                                praesentium Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga esse, autem veniam voluptates, iure a praesentium "
                                onClick={() => navigate(PATHS.BIO_SCIECNCE)}
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <CardComponent
                                Subject="Physical Science"
                                Icon={<Calculate sx={{ fontSize: '100px' }} />}
                                tittle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga esse, autem veniam voluptates, iure a 
                                praesentium Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga esse, autem veniam voluptates, iure a praesentium "
                                onClick={() => navigate(PATHS.PHYSICAL_SCIECNCE)}
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <CardComponent
                                Subject="Technology"
                                Icon={<TipsAndUpdates sx={{ fontSize: '100px' }} />}
                                tittle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga esse, autem veniam voluptates, iure a 
                                praesentium Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga esse, autem veniam voluptates, iure a praesentium "
                                onClick={() => navigate(PATHS.TECHNOLOGY)}
                            />
                        </Grid>
                    </Grid>
                </Box>

                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    gap={2}
                >
                    <Typography variant="h6">Top Performars of the Year</Typography>
                    <Box>
                        <TopPerformarsCarousel />

                    </Box>
                </Box>

                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    gap={3}
                >
                    <Typography variant="h6">Advance Level Result Summary of 2023</Typography>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={4}>
                            <Typography variant="subtitle2">Bio Science</Typography>
                            <ResultSummaryOftheYearBarChart />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography variant="subtitle2">Physical Science</Typography>
                            <ResultSummaryOftheYearBarChart />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography variant="subtitle2">Technology</Typography>
                            <ResultSummaryOftheYearBarChart />
                        </Grid>
                    </Grid>
                </Box>


                <Box>
                    <Typography variant="h6">What Our Students Are <br /> Saying About Us</Typography>
                    <Box>
                        <StudentMessageCarousel />
                    </Box>
                </Box>
                <Box>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6">Annual Student Enrollment</Typography>
                            <Box>
                                <LineChart
                                    dataValues={[17, 19, 24, 58, 60, 67, 125, 320, 410, 712, 824, 950, 1052, 1290, 1507]}
                                    label="Student Enrollment"
                                    labels={['2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023',]}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6">University Enterance</Typography>
                            <Box>
                                <LineChart
                                    label="University Enterance"
                                    labels={['2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023',]}
                                    dataValues={[17, 19, 24, 58, 60, 67, 125, 320, 410, 712, 824, 950, 1052, 1290, 1507]}
                                    dataValues1={[170, 19, 24, 58, 60, 67, 125, 320, 410, 712, 824, 950, 1052, 1290, 1507]}
                                    dataValues2={[200, 30, 40, 58, 45, 57, 125, 320, 410, 712, 824, 950, 1100, 1290, 1507]}



                                />
                            </Box>
                        </Grid>
                    </Grid>

                </Box>
            </Box>
        </Fragment>
    )
}