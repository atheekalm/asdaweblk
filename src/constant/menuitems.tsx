import { BiotechOutlined, CalculateOutlined, ContactPhoneOutlined, GroupWorkOutlined, HomeOutlined, LibraryBooksOutlined, LightbulbCircleOutlined, QuizOutlined } from '@mui/icons-material';
import { SidebarMenuItem } from "../models/MenuItem";
import PATHS from "./Navigation";

export const menuItems: SidebarMenuItem[] = [
    {
        id: 'home',
        caption: 'Home',
        divider: true,
        icon: <HomeOutlined />,
        path: PATHS.HOME
    },
    {
        id: 'Subjects',
        caption: 'Subjects',
        divider: true,
        icon: <LibraryBooksOutlined />,
        childrens: [
            {
                id: 'Physical_Science',
                caption: 'Physical Science',
                divider: true,
                icon: <CalculateOutlined />,
                path: PATHS.PHYSICAL_SCIECNCE
            },
            {
                id: 'Bio Science',
                caption: 'Bio Science',
                divider: true,
                icon: <BiotechOutlined />,
                path: PATHS.BIO_SCIECNCE
            },
            {
                id: 'Technology',
                caption: 'Technology',
                divider: true,
                icon: <LightbulbCircleOutlined />,
                path: PATHS.TECHNOLOGY
            }
        ]
    },
    // {
    //     id: 'Lecture Pannel',
    //     caption: 'Lecture Pannel',
    //     divider: true,
    //     icon: <GroupWorkOutlined />,
    //     path: PATHS.LECTUREPANNEL
    // },
    {
        id: 'Who_We_Are',
        caption: 'Who We Are',
        divider: true,
        icon: <QuizOutlined />,
        path: PATHS.ABOUT
    },
    {
        id: 'Contact_Us',
        caption: 'Contact Us',
        divider: true,
        icon: <ContactPhoneOutlined />,
        path: PATHS.CONTACTUS
    }
]