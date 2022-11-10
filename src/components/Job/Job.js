import {Avatar} from "@mui/material";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import {Link} from "react-router-dom";

import css from './Job.module.css'

const Job = ({job}) => {
    return (
        <div>
            <div className={css.card}>
                <div className={css.avatar}>
                    <Avatar
                        src={`${job.pictures[1]}`}
                        sx={{width: 56, height: 56}}
                    />
                </div>

                <div className={css.info_footer}>
                    <div className={css.mainContent}>
                        <Link to={`/${job.id}`} state={{...job}} className={css.link}>
                            <h4 className={css.text}>{job.title}</h4>
                        </Link>
                        <p className={css.text}>Department name: {job.name} - {job.employment_type[0]} </p>
                        <div className={css.location}>
                            <LocationOnOutlinedIcon/>
                            <p className={css.text}>Vienna, Austria</p>
                        </div>
                    </div>
                    <div className={css.footer}>
                        <div>
                            <BookmarkBorderOutlinedIcon/>
                        </div>
                        <p className={css.text}>Posted 2 days ago</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export {Job}