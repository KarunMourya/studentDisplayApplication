import React from "react";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import { MUICard, Typography } from "./Card.style";

export const Card = React.memo(({ item }) => {
  return (
    <MUICard sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" noWrap>
            User Id : {item.id}
          </Typography>
          <Typography gutterBottom variant="h5" color="text.secondary" noWrap>
            Title : {item.name}
          </Typography>
          <br />
          <Typography variant="body2" color="text.secondary" no noWrap>
            {item.username}
          </Typography>
          <Typography variant="body2" color="text.secondary" no noWrap>
            {item.company.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </MUICard>
  );
});
