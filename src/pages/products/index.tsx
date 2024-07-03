import { useGetProductsQuery } from "@/api/home.req";
import Loading from "@/components/loader/Loader";
import ProductCard from "@/components/product-card/ProductCard";
import styled from "styled-components";

const GridWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(4, calc(100% / 4 - 20px));
  gap: 20px;
  /* width: 100%; */
  margin: 0 auto;
  margin-top: 50px;

  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(3, calc(100% / 3 - 15px));
    gap: 15px;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, calc(100% / 2 - 10px));
    gap: 10px;
  }
`;

const PageWrapper = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export default function ProductsPage() {
  const { data, isLoading, isError } = useGetProductsQuery();

  if (isLoading) {
    return <Loading />;
  }

  if (isError || !Array.isArray(data?.products)) {
    console.log(isError);
    return <div>Error or unexpected data format</div>;
  }

  return (
    <PageWrapper>
      <GridWrapper>
        {data.products.map((el) => (
          <ProductCard product={el} />
        ))}
      </GridWrapper>
    </PageWrapper>
  );
}
