import ProductCard from '../components/ProductCard';
import { useProductStore } from '../store/product';
import { Container, Text, VStack, SimpleGrid,Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const Homepage = () => {
    const { fetchProducts ,products} = useProductStore();

    useEffect(() => {
        fetchProducts();
    },[fetchProducts]);
    console.log("products",products);
    return (
        <Container maxW={'container.xl'} py={12}>

            <VStack spacing={8}>
                <Text
                    bgGradient={"linear(to-r, cyan.400,blue.500)"}
                    bgClip={"text"}
                    fontSize={"30"}
                    fontWeight={"bold"}
                    textTransform={"uppercase"}
                    textAlign={"center"}

                >
                    Current Products 🚀
                </Text>
               
                <SimpleGrid column={{
                    base: 1,
                    md:2,
                    lg:3
                }}
                spacing={10}
                w={"full"}
                >
                    {products.map((product) => (
                        <ProductCard key={product._id} product = {product}/>
                    ))}
                </SimpleGrid>
                {products.length === 0 && (
                     <Text fontSize='xl' textAlign={"center"} fontWeight='bold' color='gray.500'>
                    No products found 😢 {" "}
                    <Link to={"/create"}>
                        <Text as='span' color='blue.500' _hover={{ textDecoration: "underline" }}>
                            Create product
                        </Text>
                    </Link>
                </Text>

                )}
            </VStack>

        </Container>
    );

};

export default Homepage;