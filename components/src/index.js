import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'; // ./ look in the same folder
import ApprovalCard from './ApprovalCard';


// this is a functional-based component
// written in ES 2015 format
const App = () => {
    // putting jsx component in here
    return (
        <div className="ui container comments">

            <ApprovalCard>are you sure you want to do this?</ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 3:35PM"
                    commentText="Nice Blog"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Alex"
                    timeAgo="Yesterday at 3:35PM"
                    commentText="Needs improvement"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>


            <ApprovalCard>
                <CommentDetail
                    author="Jane"
                    timeAgo="Two days ago at 3:35PM"
                    commentText="Nice content"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

        </div>
    );
};



ReactDOM.render(<App />, document.querySelector('#root'));
