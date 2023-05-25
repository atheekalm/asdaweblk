import { ToolbarComponent } from "./components/ToolBar";
import PATHS from "./constant/Navigation";
import { Fragment, useState } from "react";
import { Aboutus } from "./Pages/Aboutus";
import { Contact } from "./Pages/Contact";
import { Gallary } from "./Pages/Gallary";
import { HomePage } from "./Pages/Home";
import { Drawercomponetnt } from "./components/Drawercomponetnt";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LecturePannel } from "./Pages/LecturePannel";
import { PhysicalSci } from "./Pages/PhysicalSci";
import { BioSci } from "./Pages/BioSci";
import { Technology } from "./Pages/Technology";
import { Footer } from "./components/Footer";


function App() {
  const [isOpenDrawer, setOpenDrawer] = useState<boolean>(false)

  return (
    <Fragment>
      <ToolbarComponent
        setOpenDrawer={setOpenDrawer}
      />
      <BrowserRouter>
        <Drawercomponetnt
          isOpen={isOpenDrawer}
          setOpenDrawer={setOpenDrawer}
        />
        <Routes>
          <Route path={PATHS.HOME} element={<HomePage />} />
          <Route path={PATHS.ABOUT} element={<Aboutus />} />
          <Route path={PATHS.GALLARY} element={<Gallary />} />
          <Route path={PATHS.CONTACTUS} element={<Contact />} />
          <Route path={PATHS.LECTUREPANNEL} element={<LecturePannel />} />
          <Route path={PATHS.PHYSICAL_SCIECNCE} element={<PhysicalSci />} />
          <Route path={PATHS.BIO_SCIECNCE} element={<BioSci />} />
          <Route path={PATHS.TECHNOLOGY} element={<Technology />} />
          <Route
            path="*"
            element={<HomePage />}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Fragment>
  );
}

export default App;