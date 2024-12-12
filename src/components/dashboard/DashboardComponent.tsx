"use client";

import { BagIcon } from "@/icons";
import CardContainer from "./components/CardContainer";
import { FlameIcon } from "lucide-react";
import { AboutStore } from "./components/AboutStore";
import { TopProducts } from "./components/TopProducts";
import { Statistics } from "./components/Statistics";
import { SellsPerMoth } from "./components/SellsPerMoth";

const DashboardComponent = () => {
  return (
    <div className="min-h-screen space-y-24 bg-[#1a1a2e] text-white p-8">
      {/* About Your Store Section */}
      <section className="grid grid-cols-[1fr_2fr] gap-28">
        <CardContainer>
          <CardContainer.Header
            icon={<BagIcon height={33} />}
            title="About your store"
          />
          <CardContainer.Body>
            <CardContainer.Body.SubTitle>STRAB</CardContainer.Body.SubTitle>
            <AboutStore />
          </CardContainer.Body>
        </CardContainer>

        {/* Top Products Section */}
        <CardContainer>
          <CardContainer.Header />
          <CardContainer.Body>
            <CardContainer.Body.SubTitle>
              TOP PRODUCTS
            </CardContainer.Body.SubTitle>
            <TopProducts />
          </CardContainer.Body>
        </CardContainer>
      </section>

      {/* Store Statistics Section */}
      <section className="grid grid-cols-[1fr_2fr] gap-28 mt-8">
        <CardContainer>
          <CardContainer.Header
            icon={<FlameIcon color="#9354FF" width={41} height={33} />}
            title="Your store statistics"
          />
          <CardContainer.Body>
            <CardContainer.Body.SubTitle>
              Store statistics
            </CardContainer.Body.SubTitle>
            <Statistics />
          </CardContainer.Body>
        </CardContainer>

        {/* Sells Per Month */}
        <CardContainer>
          <CardContainer.Header />
          <CardContainer.Body>
            <CardContainer.Body.SubTitle>
              SELLS PER MONTH
            </CardContainer.Body.SubTitle>
            <SellsPerMoth />
          </CardContainer.Body>
        </CardContainer>
      </section>
    </div>
  );
};

export default DashboardComponent;
