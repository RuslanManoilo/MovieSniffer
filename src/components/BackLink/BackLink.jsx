import { Link } from "react-router-dom";
import { MainButton } from "./MainButton";
import { HiArrowLeftCircle } from "react-icons/hi2";


export const BackLink = ({ to = '/' }) => {
    return (
        <Link to={to}>
            <MainButton> <HiArrowLeftCircle/> Go back</MainButton>
        </Link>
    );
};