import { Button, ButtonGroup, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { decrement, increment } from "./counterSlice";

export default function ContactPage() {
    const dispatch = useAppDispatch();

    const { data, title } = useAppSelector(state => state.counter);
    return (
        <>
            <Typography gutterBottom variant='h3'>
                {title}
            </Typography>
            <Typography variant='h5'>
                The Data is: {data}
            </Typography>
            <ButtonGroup>
                <Button onClick={() => dispatch(decrement())} variant='contained' color='error'>Decrement</Button>
                <Button onClick={() => dispatch(increment())} variant='contained' color='secondary'>Increment</Button>
            </ButtonGroup>
        </>

    )
}