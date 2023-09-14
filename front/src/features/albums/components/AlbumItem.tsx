import React from 'react';
import {Button, Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

interface Props {
    _id: string,
    name: string,
    releaseDate: string,
    image?: string | null,
}

const AlbumItem: React.FC<Props> = ({ _id, image, releaseDate, name }) => {
    const albumImage = image ? `http://localhost:8000/${image}` : '';

    return (
        <Card sx={{ mb: 3, maxWidth: 300, m: 3, position: 'relative' }}>
            <CardActionArea>
                <CardMedia component="img" image={albumImage} alt={name} />
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        {name} ...
                    </Typography>
                    <Typography color="textSecondary" variant="body2">
                        {releaseDate}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <Button
                style={{ position: "absolute", bottom: 0, right: 0 }}
                endIcon={<ArrowCircleRightOutlinedIcon />}
            />
        </Card>
    );
};

export default AlbumItem;