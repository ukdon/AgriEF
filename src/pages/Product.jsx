import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components"
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({padding: "10px", flexDirection: "column"})};
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({height: "40vh"})};
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({padding: "10px"})};
`;

const Title = styled.h1`
 font-weight: 200;
`;

const Desc = styled.p`
 margin: 20px 0px;
`;

const Price = styled.span`
 font-weight: 100;
 font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 55%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({width: "100%"})};
`;

const Filter = styled.div`
 display: flex;
 align-items: center;
`;

const FilterTitle = styled.span`
 font-size: 20px;
 font-weight: 200;
`;

const FilterColor = styled.div`
 width: 20px;
 height: 20px;
 border-radius: 50%;
 background-color: ${props=>props.color};
 margin: 0px 5px;
 cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
 width: 50%;
 display: flex;
 align-items: center;
 justify-content: space-between;
 ${mobile({width: "100%"})};
`;

const AmountContainer = styled.div`
 display: flex;
 align-items: center;
 font-weight: 700px;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
      background-color: #f5f4f4;
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
          <ImgContainer>
             <Image src="https://www.pngarts.com/files/5/Millet-PNG-Transparent-Image.png"/>
          </ImgContainer>
          <InfoContainer>
              <Title>BLACK MILLET</Title>
              <Desc>Choose the best of your choice, there many Product and all are available
                  and also for thoso who are lookin for loan, we are giving loan but with 
                  some rules and argenders and also with acceptable reason, which wiil convince
                  us to trust you with our Product.
              </Desc>
              <Price>$ 30</Price>
              <FilterContainer>
                  <Filter>
                      <FilterTitle>Color</FilterTitle>
                      <FilterColor color="#fcf5f5"/>
                      <FilterColor color="red"/>
                      <FilterColor color="black"/>
                  </Filter>
                  <Filter>
                      <FilterTitle>Quantity</FilterTitle>
                      <FilterSize>
                          <FilterSizeOption>Bag</FilterSizeOption>
                          <FilterSizeOption>Basket</FilterSizeOption>
                          <FilterSizeOption>Kilo</FilterSizeOption>
                          <FilterSizeOption>S Bag</FilterSizeOption>
                          <FilterSizeOption>Tiya</FilterSizeOption>
                      </FilterSize>
                  </Filter>
              </FilterContainer>
              <AddContainer>
                  <AmountContainer>
                      <Remove/>
                      <Amount>1</Amount>
                      <Add/>
                  </AmountContainer>
                  <Button>ADD TO CART</Button>
              </AddContainer>
          </InfoContainer>
      </Wrapper>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default Product
