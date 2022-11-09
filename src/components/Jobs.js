import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {jobActions} from "../redux/slices/jobSlice";

const Jobs = () => {

    const {allJobs} = useSelector(state => state.jobReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(jobActions.getAllJobs())
    }, [dispatch])

    return (
        <div>
            <div>
                {allJobs.map((job)=> <p>{job.name}</p> )}
            </div>
        </div>
    );
};

export {Jobs}