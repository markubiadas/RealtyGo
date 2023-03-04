import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";
import { logo, yariga, realtygo } from 'assets';

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <img src={realtygo} alt="Yariga" width="28px" />
        ) : (
          <img src={realtygo} alt="Refine" width="140px" />
        )}
      </Link>
    </Button>
  );
};
