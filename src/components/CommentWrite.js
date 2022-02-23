//components/CommentWrite.js
import React from "react";

import { Grid, Input, Button } from "../elements";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as commentActions } from "../redux/modules/comment";


const CommentWrite = (props) => {
  const dispatch = useDispatch();

  const { post_id } = props;

  const [comment_text, setCommentText] = React.useState("");

  const write = () => {
    if (comment_text === "") {
      window.alert("댓글을 입력해주세요!");
      return;
    }
    // 입력된 텍스트는 지우기!
    setCommentText("");

    // 파이어스토어에 추가합니다.
    dispatch(commentActions.addCommentFB(post_id, comment_text));
  };

  const onChange = (e) =>{
    setCommentText(e.target.value);
  }

  return (
    <React.Fragment>
      <Grid padding="16px" is_flex>
        <Input
          placeholder="댓글 내용을 입력해주세요 :)"
          _onChange={onChange}
          value={comment_text}
          onSubmit={write}
          is_submit
        />
        <Button width="50px" margin="0px 2px 0px 2px" _onClick={write}>
          작성
        </Button>
      </Grid>
    </React.Fragment>
  );
};

CommentWrite.defaultProps = {
  post_id: "",
};

export default CommentWrite;