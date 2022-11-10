import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {jobActions} from "../../redux/slices/jobSlice";
import {Job} from "../Job/Job";
import css from './Jobs.module.css'

const Jobs = () => {

    const {allJobs} = useSelector(state => state.jobReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(jobActions.getAllJobs())
    }, [dispatch])

    return (
        <div>
            <div className={css.cards}>
                {allJobs?.map((job)=> <Job job={job} key={job.id}/> )}
            </div>
        </div>
    );
};

export {Jobs}