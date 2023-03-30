import Box from "../components/Flex/Box/Box";
import FlexColumn from "../components/Flex/FlexColumn/FlexColumn";
import FlexRow from "../components/Flex/FlexRow/FlexRow";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import TextTitle from "../components/Typography/TextTitle";

const HomePage: React.FC<any> = () => {
  return (
    <div className="home">
        <Header />
        <div style={{ padding: '60px 0', height: "calc(100vh - 120px)"}}>
            <FlexRow height="75%">
                <FlexColumn width="45%">
                    <Box bgColor="antiquewhite" height="60%">
                        <TextTitle title="Hero"/>
                    </Box> 
                    <Box bgColor="darkseagreen" height="40%">
                        <TextTitle title="Sidebar"/>
                    </Box> 
                </FlexColumn>
                <FlexColumn width="55%">
                    <Box bgColor="yellow" height="70%">
                        <TextTitle title="Main Content"/>
                    </Box> 
                    <Box bgColor="grey" height="30%">
                        <TextTitle title="Extra Content"/>
                    </Box> 
                </FlexColumn>
            </FlexRow>
            <FlexRow height="35%">
                <Box bgColor="green" width="70%">
                    <TextTitle title="Related Images"/>
                </Box> 
                <Box bgColor="pink" width="30%">
                    <TextTitle title="Related Posts"/>
                </Box> 
            </FlexRow>
        </div>
        <Footer />
    </div>
  )
}

export default HomePage;
