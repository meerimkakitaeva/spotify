import React, {useState} from 'react';
import {Button, Card, CardActionArea, CardContent, Typography} from "@mui/material";
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {selectUser} from "../../users/usersSlice";
import {addTrackHistory} from "../tracksThunk";
import {ITrackWithId} from "../../../types";


interface Props {
    _id: string,
    name: string,
    album?: string,
    duration: string,
    trackNumber: string,
}

const TrackItem: React.FC<Props> = ({ _id, name, trackNumber, duration }) => {
    const [state, setState] = useState<ITrackWithId>({
        track: _id
    });

    const dispatch = useAppDispatch();
    const addTrackToHistory = async () => {
        try {
            await dispatch(addTrackHistory(state));
            alert(`You are listening ${name.toUpperCase()} `);
        } catch (e) {
            console.error(e);
        }
    };

    const user = useAppSelector(selectUser);

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
            { user ?
                <Button
                    style={{ position: "absolute", bottom: 0, right: 0 }}
                    endIcon={<PlayCircleFilledWhiteOutlinedIcon />}
                    onClick={addTrackToHistory}
                >
                    {trackNumber}
                </Button>
                :
                <Button
                    style={{ position: "absolute", bottom: 0, right: 0 }}
                >
                    {trackNumber}
                </Button>
            }

        </Card>
    );
};

export default TrackItem;