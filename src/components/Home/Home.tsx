import MainContents from "../MainContent/MainContent";
import { ContentWrapper, DashboardContainer } from "../MainContent/MainContent.styles";
import RightPanels from "../RightPanel/RightPanel";
import Sidebar from "../Sidebar/Sidebar";

export default function Home() {
    return (
        <DashboardContainer>
            <Sidebar />

            <ContentWrapper>
                <MainContents />

                <RightPanels />
            </ContentWrapper>
        </DashboardContainer>
    )
}