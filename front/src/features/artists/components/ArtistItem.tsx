import React from 'react';
import {Card, CardActionArea, CardContent, Grid, CardMedia, Typography, Button} from "@mui/material";
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { Link } from 'react-router-dom';
import {useAppDispatch} from "../../../app/hooks";
import {fetchAlbums} from "../../albums/albumsThunk";

interface Props {
    _id : string,
    name: string,
    image?: string | null,
}

const ArtistItem: React.FC<Props> = ({_id, image, name}) => {
    const dispatch = useAppDispatch();


    const artistImage = image ? `http://localhost:8000/${image}` : '';

    return (
        <Card sx={{ mb: 3, maxWidth: 300, m: 3, position: 'relative' }}>
            <CardActionArea>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography gutterBottom component="div" sx={{ fontSize: '20px' }}>
                                {name} ...
                            </Typography>
                        </Grid>
                        {artistImage && (
                            <Grid item xs={12} sm={4}>
                                <CardMedia
                                    component="img"
                                    image={artistImage}
                                    sx={{ width: '200px', height: '150px' }}
                                />
                            </Grid>
                        )}
                        <Grid item xs={12}>
                            <Button
                                component={Link}
                                to={`/albums/${_id}`}
                                onClick={() => dispatch(fetchAlbums(_id))}
                                style={{ position: 'absolute', bottom: 0, right: 0 }}
                            >
                                <ArrowCircleRightOutlinedIcon />
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default ArtistItem;