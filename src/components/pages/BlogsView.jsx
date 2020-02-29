import React from "react";
import PropTypes from "prop-types";

const ViewBlogs = ({blogItems}) => (
    <div>
        <p>Aktualności:</p>
        {console.log(blogItems)}
        <div>
            {
                blogItems.map((item) => 
                <p>
                    {item.header}{item.article}{item.author}
                </p>)
            }
        </div>
    </div>
);

ViewBlogs.propTypes = {
    blogItems: PropTypes.array
};

ViewWalks.defaultProps = {
    blogItems: []
};


export default ViewBlogs;
