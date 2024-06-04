import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { VscRobot } from "react-icons/vsc";

const useStyles = makeStyles((theme) => ({
    cardContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // центрирование по горизонтали
        height: '3100vh', // высота контейнера на весь экран
        marginTop: theme.spacing(4),
    },
    card: {
        marginBottom: theme.spacing(2),
        borderRadius: theme.spacing(1),
        boxShadow: theme.shadows[3],
        width: '555px',
        height: '555px'
    },
    titleContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    title: {
        marginLeft: theme.spacing(1), // добавляем отступ между иконкой и заголовком
    },
    image: {
        maxWidth: '100%',
        height: '300px', // фиксированная высота
        marginTop: theme.spacing(2), // добавляем отступ между описанием и изображением
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
}));

const NewsFeed = ({ news }) => {
    const classes = useStyles();

    return (
        <div className={classes.cardContainer}>
            {news.map((item, index) => (
                <Card key={index} className={classes.card}>
                    <CardContent>
                        <div className={classes.titleContainer}>
                            <VscRobot style={{ fontSize: 72 }}/>
                            <Typography variant="h6" component="h2" className={classes.title}>
                                {item.title}
                            </Typography>
                        </div>
                        <Typography variant="body2" color="text.secondary">
                            {item.description}
                        </Typography>
                        {item.image && (
                          <div
                            className={classes.image}
                            style={{ backgroundImage: `url(${item.image})` }}
                          />
                        )}
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default NewsFeed;