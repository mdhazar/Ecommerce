import React from "react";

import Header from "../layouts/header";
import NavBar from "../layouts/navbar";
import Footer from "../layouts/footer";
import NewCollection from "../components/ui/NewCollection";
import ShopCardSection from "../components/ui/shopCardSection";
import ShopSection from "../components/ui/shopSection";
import BuySection from "../components/ui/buySection";
import FeaturedProducts from "../components/ui/featuredProducts";
import BestSellerProducts from "@/components/ui/BestSellerProducts";

function HomePage() {
  return (
    <div>
      <Header />
      <NavBar />
      <NewCollection />
      <ShopCardSection />
      <BestSellerProducts />
      <ShopSection />
      <BuySection />
      <FeaturedProducts />
      <Footer />
    </div>
  );
}

export default HomePage;
