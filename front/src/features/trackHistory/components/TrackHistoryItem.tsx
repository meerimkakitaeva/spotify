import React from 'react';
import {Card, CardActionArea, CardContent, Typography} from "@mui/material";
import dayjs from "dayjs";

interface Props {
    _id: string,
    name: string,
    datetime: string,
}

const TrackHistoryItem: React.FC<Props> = ({ _id, name, datetime }) => {
    return (
        <Card sx={{ mb: 3, width: 300, m: 3, position: 'relative' }}>
            <CardActionArea>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        {name}
                    </Typography>
                    <Typography color="textSecondary" variant="body2">
                        listened on: {dayjs(datetime).format('YYYY-MM-DD HH:mm:ss')}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default TrackHistoryItem;