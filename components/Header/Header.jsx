"use client";

import { Anchor as AntdAnchor, Drawer, Flex } from "antd";
import { DrawerWrapper, HeaderWrapper } from "./Header.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { data } from "@/static";
import Image from "next/image";

const Header = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1300;

  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const Anchor = (
    <AntdAnchor
      direction={isMobile ? "vertical" : "horizontal"}
      targetOffset={150}
      items={[
        {
          key: "services",
          href: "#services",
          title: "Services",
        },
        {
          key: "a-propos",
          href: "#a-propos",
          title: "À propos",
        },
        {
          key: "realisations",
          href: "#realisations",
          title: "Réalisations",
        },
        {
          key: "avis",
          href: "#avis",
          title: "Avis",
        },
        {
          key: "contact",
          href: "#contact",
          title: "Contact",
        },
        {
          key: "localisation",
          href: "#localisation",
          title: "Localisation",
        },
      ]}
    />
  );

  return (
    <HeaderWrapper>
      {/* <a href="/" className="name">
        <img src="/logo.jpg" alt={data.companyName} width={200} />
      </a> */}
      <Flex justify="center" flex={1}>
        {isMobile ? (
          <div>
            <FontAwesomeIcon
              icon={faBars}
              size="2x"
              onClick={() => setIsDrawerVisible(true)}
            />
            <Drawer
              width={200}
              placement="right"
              closable={false}
              open={isDrawerVisible}
              key="right"
              onClose={() => setIsDrawerVisible(false)}
              onClick={() => setIsDrawerVisible(false)}
            >
              <DrawerWrapper>{Anchor}</DrawerWrapper>
            </Drawer>
          </div>
        ) : (
          Anchor
        )}
      </Flex>
    </HeaderWrapper>
  );
};

export default Header;
