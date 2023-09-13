import React from 'react';
import {Card, CardActionArea, CardContent, Grid, CardMedia, Typography} from "@mui/material";

interface Props {
    _id : string,
    name: string,
    image?: string | null,
}

const ArtistItem: React.FC<Props> = ({_id, image, name}) => {

    return (
        <Card sx={{ mb: 3 }}>
            <CardActionArea>
                <CardContent>
                    <Grid container spacing={2}>
                        {image && (
                            <Grid item xs={12} sm={4}>
                                <CardMedia
                                    component="img"
                                    image={image}
                                    sx={{ width: '100%', height: 'auto' }}
                                />
                            </Grid>
                        )}
                        <Grid item xs={12} sm={image ? 8 : 12}>
                            <Typography gutterBottom component="div" sx={{ fontSize: '20px' }}>
                                {name} ...
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            {/*<Button component={Link} to={'/artists/' + _id}>*/}
                            {/*    <ArrowCircleRightOutlinedIcon />*/}
                            {/*</Button>*/}
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default ArtistItem;