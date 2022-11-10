import {useLocation} from "react-router-dom";

const JobDetails = () => {
    const {state:job} = useLocation();
    return (
        <div>
            {job.name}
        </div>
    );
};

export {JobDetails}