import { useEffect } from "react"
import { useAsideBar } from "../../../contexts/AsideBarContext"
import AsideBar from "../../AsideBar"
import Header from "../../Header"
import { MainContent } from "../../MainContent"

import { Container, MainContainer } from "./styles"

export const HomePage = () => {
    const { menuContent, changeMenuContent } = useAsideBar()

    useEffect(() => {
        console.log(menuContent)
    }, [menuContent])

    return (
        <Container>
            <Header/>
            <MainContainer>
                <AsideBar />
                <MainContent />
            </MainContainer>
        </Container>
    )
}