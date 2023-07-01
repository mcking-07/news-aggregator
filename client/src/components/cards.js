import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia, CardContent, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 10,
    height: 560,
    background: '#fff',
    borderRadius: 8,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
});

const CardList = ({ articles }) => {
  const classes = useStyles();

  const truncate = (text, limit) => {
    if (text && text.length > limit) {
      return `${text.substring(0, limit)}...`;
    }
    return text;
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {articles.length > 0 && articles.map((article) => (
        <Button
          key={article.title}
          component="a"
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card className={classes.root}>
            <CardHeader
              title={truncate(article.title, 120)}
              subheader={article.publishedAt}
              style={{ fontFamily: 'Open Sans', color: '#333' }}
            />
            <CardMedia className={classes.media} image={article.urlToImage} title={article.title} />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {truncate(article.description, 120)}
              </Typography>
            </CardContent>
          </Card>
        </Button>
      ))}
    </div>
  );
};

export default CardList;
