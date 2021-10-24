import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";
import useStyles from './style';


/*const products = [
    {id: 1, name: 'Ipad', description: 'Apple Ipad', price:'Rs 84000',image: 'https://static.bhphoto.com/images/images500x500/1631641069_1664340.jpg'},
    {id: 2, name: 'Macbook', description: 'Apple macbook',price: 'Rs 100000',image: 'https://static.bhphoto.com/images/images500x500/1634584510_1668190.jpg'},

];*/

const Products = ({products,onAddToCart}) =>{
  const classes = useStyles();

  return(
   <main className={classes.content}>
     <div className={classes.toolbar} />
     <Grid container justifyContent="center" spacing={4}>
       {products.map((product)=>(
         <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
           <Product product={product} onAddToCart={onAddToCart} />

         </Grid>
       ))}
     </Grid>
   </main>
   );
};
export default Products;

