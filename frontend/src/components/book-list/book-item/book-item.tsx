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
});

const BookItem: React.FC<BookModel> = (props) =>{

  const classes = useStyles();

 const { title, price, authors, genre, description, coverUrl, type } = props


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
                    <Typography gutterBottom variant="h5" component="h2">
                      {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Price: {price} $
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Genre: {genre}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {type}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Buy
                    </Button>
                </CardActions>
            </Card>  
          </Grid>
  );
}

export default BookItem;