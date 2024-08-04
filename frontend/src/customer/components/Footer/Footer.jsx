import { Button, Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            COMPANY
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              About
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Blog
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Press
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Contact
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Carrer
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            SHOPPING
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Store
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              product
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Accessories
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Sale
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            DOCUMENTATION
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              guides
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              api status
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            COMPANY
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              About
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Blog
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Press
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Contact
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Carrer
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
