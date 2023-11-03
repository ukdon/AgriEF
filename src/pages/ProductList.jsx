import styled from "styled-components"
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { mobile } from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer= styled.div`
 display: flex;
 justify-content: space-between;

`;

const Filter = styled.div`
 margin: 20px;
 ${mobile({width: "0px 20px", display: "flex", flexDirection: "column"})};
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({marginRight: "0px"})};
`;

const Select = styled.select`
 padding: 10px;
 margin-right: 20px;
 ${mobile({margin: "10px 0px"})};
`;

const Option = styled.option`
  
`;

const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>Food Product</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Product:</FilterText>
                <Select>
                    <Option disabled selected>
                      Color
                    </Option>
                    <Option>White</Option>
                    <Option>Red</Option>
                    <Option>Male</Option>
                    <Option>Black</Option>
                    <Option>Green</Option>
                </Select>
                <Select>
                    <Option disabled selected>
                      Quantity
                    </Option>
                    <Option>Bag</Option>
                    <Option>Basket</Option>
                    <Option>Kilo</Option>
                    <Option>S Bag</Option>
                    <Option>Tiya</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Product:</FilterText>
                <Select>
                    <Option selected>Newest</Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList
