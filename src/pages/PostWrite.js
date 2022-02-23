import React, { useEffect, useState } from "react";
import {Grid, Text, Button, Image, Input} from "../elements";
import Upload from "../shared/Upload";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as imageActions } from "../redux/modules/image";


const PostWrite = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login)
  const preview = useSelector((state) => state.image.preview)
  const post_list = useSelector((state) => state.post.list);

  const post_id = props.match.params.id;
  const is_edit = post_id ? true : false;


  const {history} = props;
  
  let _post = is_edit ? post_list.find((p) => p.id === post_id) : null;

  const [contents, setContents] = useState(_post ? _post.contents : "");

  useEffect(() => {
    if (is_edit && !_post) {
      console.log("포스트 정보가 없어요!");
      history.goBack();

      return;
    }

    if (is_edit) {
      dispatch(imageActions.setPreview(_post.image_url));
      }
    }, []);

    const changeContents = (e) =>{
      setContents(e.target.value);
    }


    const addPost = () =>{
      dispatch(postActions.addPostFB(contents))
    }

    const editPost = () => {
      dispatch(postActions.editPostFB(post_id, {contents: contents}));
    }

  if(!is_login){
    return(
      <Grid margin="100px 0px" padding="16px">
        <Text size="30px" bold>로그인이 필요합니다!</Text>
        <Button _onClick={() => {history.replace("/")}}>로그인하러 가기</Button>
      </Grid>
    )
  }
    return (
      <React.Fragment>
        <Grid padding="16px">
          <Text margin="0px" size="36px" bold>
            {is_edit ? "게시글 수정": "게시글 작성"}
          </Text>
          <Upload/>
        </Grid>

        <Grid>
          <Grid padding="16px">
            <Text margin="0px" size="24px" bold>
              미리보기
            </Text>
          </Grid>

          <Image
            shape="rectangle"
            src={preview?preview:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZF2lMsPvHTMS3QXlEkcseZp4K5V2VbigxXqPqIHTckG421zvSxMxbzTUoCKYH41BVw-E&usqp=CAU"} />
        </Grid>

        <Grid padding="16px">
          <Input
            value={contents}
            _onChange={changeContents}
            label="게시글 내용"
            placeholder="게시글 작성"
            multiLine />
        </Grid>

        <Grid padding="16px">
          {is_edit ? (
            <Button text="게시글 수정" _onClick={()=>{
              editPost()
            }}></Button>          
          ) : (
            <Button text="게시글 작성" _onClick={()=>{
              addPost()
            }}></Button>  
          )}
        </Grid>
      </React.Fragment>
    );
}

export default PostWrite;