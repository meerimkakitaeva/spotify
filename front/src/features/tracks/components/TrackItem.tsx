import React from 'react';
import {Button, Card, CardActionArea, CardContent, Typography} from "@mui/material";
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';

interface Props {
    _id: string,
    name: string,
    album?: string,
    duration: string,
    trackNumber: string,
}

const TrackItem: React.FC<Props> = ({ _id, name, trackNumber, duration }) => {

    return (
        <Card sx={{ mb: 3, width: 200, m: 3, position: 'relative' }}>
            <CardActionArea>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        {name}
                    </Typography>
                    <Typography color="textSecondary" variant="body2">
                        {duration}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <Button
                style={{ position: "absolute", bottom: 0, right: 0 }}
                endIcon={<PlayCircleFilledWhiteOutlinedIcon />}
            >
                {trackNumber}
            </Button>
        </Card>
    );
};

export default TrackItem;