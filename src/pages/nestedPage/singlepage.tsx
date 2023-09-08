import axios from "axios"
import { useParams, } from "react-router-dom"
import { useState } from "react"
import { colors } from "@mui/material";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Button,  } from "@mui/material";
import { isDisabled } from "@testing-library/user-event/dist/utils";

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function SinglePage() {
    const [singleCard, setSingleCard] = useState<any>({})
    const params = useParams()
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    axios.get(`https://fakestoreapi.com/products/${params.id}`)
        .then((res) => {
            console.log(res.data)
            setSingleCard({ ...res.data })
        })
        .catch((err) => {
            console.log(err)
        })
    return (
        <>
            <section className="bg-color d-flex  justify-content-center align-items-center">
                <h1 className="text-white">Product Details Below</h1>
            </section>
            <div className=" col-12 ">
            <Card sx={{ maxWidth: '100%', marginTop: 10, }}>
                {/* <CardHeader sx={{color:'red' , marginTop:5}} title={singleCard.title} /> */}
                <CardMedia
                    component="img"
                    width="100%"
                />
                <CardContent>
                    <img src={singleCard.image} width='50%' className="img-fluid" style={{height:'300px'}} alt="" />
                    <Typography className="mt-5" variant="body1">
                        <span className="text-danger ">Title</span><span>.</span><span>{singleCard.title}</span>
                    </Typography>
                    <Typography variant="body1" className="mt-1">
                        <span className="text-danger mt-5">Category</span><span>.</span><span>{singleCard.category}</span>
                    </Typography>
                    <Typography variant="body1" className="mt-1">
                        <span className="text-danger mt-3">Price</span><span>.</span><span>{singleCard.price}</span>
                    </Typography>
                    <Box>
                    <Button color="error" onClick={() => alert('This Product Has Saled')} className="w-25 mt-3" variant="contained">Buy Now</Button>
                    </Box>

                </CardContent>
                <CardActions disableSpacing>
                    <IconButton className="icon-favorite"  aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph color='red'>Description:</Typography>
                        <Typography paragraph >
                            {singleCard.description}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
            </div>
        </>
    );
}

