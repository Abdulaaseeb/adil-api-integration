// import ResponsiveAppBar from "../components/Navbar"
import { Box, Button, Paper, Typography } from "@mui/material"
import axios from "axios"
import { useState } from "react"
import { useNavigate, Route, Routes, BrowserRouter as Router} from "react-router-dom"
import SinglePage from "./singlepage"
export default function HomePage() {
    const [cartData, setCartData] = useState<any>([])
    const getData = () => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                setCartData([...res.data])
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const navigate = useNavigate()
    const clickCart = (id: any) => {
        navigate(`/singlepage/${id}`)
    }
    return (
        <>
             <section className="bg-color d-flex  justify-content-center align-items-center">
                    <h1 className="text-white">E - Commerce Landing Page</h1>
                </section>
                <div className='container'>
                    <div className='row mt-5'>
                        <div className="col-12 text-center">
                            <h1>OUR PRODUCTS</h1>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-2 offset-md-5 col-4 offset-4">
                                <div className="empty-div"></div>
                            </div>
                        </div>
                    </div>
                </div>
            {getData()}
            {cartData.map((x: any, i: any) => {
                return (
                    <>
                        <div className="container  text-center col-md-4 col-12  rounded my-5 " >
                            <Paper className="p-3">
                                <Box>
                                    <img src={x.image} className="img-fluid" style={{ height: '300px', }} width={'100%'} alt="" />
                                    <Typography className="mt-5"><span className="text-danger">Title</span><span>.</span><span>{x.title}</span></Typography>
                                    <Button onClick={() => clickCart(x.id)} className="my-5" variant="contained" color="error">More Details...</Button>
                                </Box>
                            </Paper>


                        </div>
                    </>
                )

            })}
            
           


        </>
    )
} 