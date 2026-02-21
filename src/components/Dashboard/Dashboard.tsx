import { useState } from "react"

import Sidebar from "../Sidebar/Sidebar";

import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import PhotoIcon from "@mui/icons-material/Photo";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PlayCircleFilledRoundedIcon from "@mui/icons-material/PlayCircleFilledRounded";
import PublicIcon from "@mui/icons-material/Public";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { ContentWrapper, DashboardContainer, EditProfileButton, Logoimage, MainContent, PostActionButton, PostActionsRow, PostAvatarImg, PostCard, PostInput, PostInputRow, ProfileAvatarWrapper, ProfileBanner, ProfileCard, ProfileInfoRow, ProfileTexts, PublishButton, RightPanel } from "./Dashboard.styles";

const currentUser = {
  name: "Paulo Souza",
  email: "paulo.csouzas@outlook.com",
  avatar: "/perfil.jpg",
};

const friends = [
  { name: "Tiago Rocha", email: "tiagorocha@gmail.com", avatar: "/rosto_01.png" },
  { name: "Larissa Alves", email: "larissaalves@gmail.com", avatar: "/rosto_02.png" },
  { name: "Andreza Soares", email: "andrezasoares@gmail.com", avatar: "/rosto_03.png" },
  { name: "Julia Fernanda", email: "juliafernanda@gmail.com", avatar: "/rosto_04.png" },
  { name: "Marcela Silva", email: "marcelasilva@gmail.com", avatar: "/rosto_05.png" },
];

const activities = [
  {
    id: 1,
    name: "Felipe Silva",
    date: "8 de março às 18:00",
    avatar: "/rosto_06.png",
  },
  {
    id: 2,
    name: "Andreza Souza",
    date: "8 de março às 18:00",
    avatar: "/rosto_07.png",
  },
  {
    id: 3,
    name: "Felipe Silva",
    date: "8 de março às 18:00",
    avatar: "/rosto_06.png",
  },
];

export default function Dashboard() {
    const [postText, setPostText] = useState("");

    return (
        <DashboardContainer>
            <Sidebar />

            <ContentWrapper>
                <MainContent>
                    <ProfileCard>

                        <ProfileBanner>
                            <Logoimage src="./logo-white.png" alt="Logo Faex Hub" />
                        </ProfileBanner>

                        <ProfileInfoRow>
                            <ProfileAvatarWrapper>
                                <img src={currentUser.avatar} alt={currentUser.name} />
                            </ProfileAvatarWrapper>

                            <ProfileTexts>
                                <h2>{currentUser.name}</h2>
                                <span>{currentUser.email}</span>
                            </ProfileTexts>

                            <EditProfileButton>Editar Perfil</EditProfileButton>
                        </ProfileInfoRow>
                    
                    </ProfileCard>

                    <PostCard>
                        <PostInputRow>
                            <PostAvatarImg src={currentUser.avatar} alt={currentUser.name} />
                            <PostInput 
                                type="text"
                                placeholder="Comece uma publicação"
                                value={postText}
                                onChange={(e) => setPostText(e.target.value)}
                            />
                            <PublishButton>Publicar</PublishButton>
                        </PostInputRow>
                        <PostActionsRow>
                            <PostActionButton>
                                <VideoLibraryIcon /> Vídeo
                            </PostActionButton>
                            <PostActionButton>
                                <PhotoIcon /> Foto
                            </PostActionButton>
                        </PostActionsRow>
                    </PostCard>
                </MainContent>

                <RightPanel>
                    <p>painel da direita</p>
                </RightPanel>
            </ContentWrapper>

        </DashboardContainer>
    )
}