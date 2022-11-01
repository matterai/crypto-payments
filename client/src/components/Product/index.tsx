import { Button, Card, CardContent, CardMedia, Typography } from "@mui/material"

export const Product = () => {
  const render = (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Digital product"
        height="140"
        image="/images/product.jpeg"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Digital Product
        </Typography>
        <Typography variant="body2" color="text.secondary">
          It can be some kind of service or even a physical item which can be purchased as NFT. If you buy it you will get a blockchain proof anyway.
        </Typography>
      </CardContent>
      <CardContent>
        <Button size="small">Purchase</Button>
      </CardContent>
    </Card>
  );

  return render;
}

export default Product;
