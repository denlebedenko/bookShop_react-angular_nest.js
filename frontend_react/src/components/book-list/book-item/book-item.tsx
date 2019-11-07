import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { BookModel } from '../../../models';

const useStyles = makeStyles({
  card: {
    maxWidth: 295,
    width: 295,
    margin: '0px 30px 20px 0'
  },
  media: {
    height: 400,
  },
  root: {
    flexGrow: 1,
  },
  title: {
    textTransform: 'uppercase',
    fontSize: 18,
  },
  types: {
    marginBottom: 20,
  }
});



interface OwnProps {
  addToCart: any;
}


type Props = BookModel & OwnProps;
const BookItem: React.FC<Props> = (props) =>{
  const classes = useStyles();

 const { title, price, authors, genre, description, coverUrl, type, addToCart  } = props;


  return (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={coverUrl}
                    title={title}
                    />
                    <CardContent>
                    <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                      {title}
                    </Typography>
                    <Typography  className={classes.types} variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                    <Typography className={classes.types} variant="body2" color="textSecondary" component="p">
                        Price: {price} $
                    </Typography>
                    <Typography className={classes.types} variant="body2" color="textSecondary" component="p">
                        Genre: {genre}
                    </Typography>
                    <Typography className={classes.types} variant="body2" color="textSecondary" component="p">
                    </Typography>
                    <Typography className={classes.types} variant="body2" color="textSecondary" component="p">
                        Type: {type}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" onClick={addToCart}>
                      Buy
                    </Button>
                </CardActions>
            </Card>  
          </Grid>
  );
};

export default BookItem;