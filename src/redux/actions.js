import {
  INCREMENT,
  DECREMENT,
  INPUT_TEXT,
  COMMENT_CREATE,
  COMMENT_UPDATE,
  COMMENT_REMOVE,
  COMMENTS_LOAD,
  LOADER_DISPLAY_ON,
  LOADER_DISPLAY_OFF,
  ERROR_DISPLAY_ON, 
  ERROR_DISPLAY_OFF
} from './types';
export const incrementLikes = () => {
  return {
    type: INCREMENT,
  };
};

export const decrementLikes = () => {
  return {
    type: DECREMENT,
  };
};
export const inputText = (text) => {
  return {
    type: INPUT_TEXT,
    text,
  };
};

// COMMENTS

export const commentCreate = (comment, id) => {
  return {
    type: COMMENT_CREATE,
    data: {
      comment,
      id,
    },
  };
};

export const commentUpdate = (comment, id) => {
  return {
    type: COMMENT_UPDATE,
    data: {
      comment,
      id,
    },
  };
};

export const commentRemove = (id) => {
  return {
    type: COMMENT_REMOVE,
    id,
  };
};

//LOADER 

export const enableLoader = () => {
  return {
    type: LOADER_DISPLAY_ON,
  };
};

export const disableLoader = () => {
  return {
    type: LOADER_DISPLAY_OFF,
  };
};

// ERROR

export const anableError = (text) => {
  return dispatch => {
    dispatch({type: ERROR_DISPLAY_ON,
    text
  });
  setTimeout(() => {
    dispatch(disableError())
  }, 2000)
}
};

export const disableError = () => {
    return {
      type: ERROR_DISPLAY_OFF,
    };
  };

//   API

export const commentsLoad = () => {
  return async (dispatch) => {
    try{
      dispatch(enableLoader());
    const response = await fetch('https://1jsonplaceholder.typicode.com/comments?_limit=10');
    const jsonData = await response.json();
    setTimeout(() => {
      dispatch({
        type: COMMENTS_LOAD,
        data: jsonData,
      });
      dispatch(disableLoader());
      dispatch(disableError())
    }, 1000);
    }catch(error){
      dispatch(anableError(error.message));
      dispatch(disableLoader());
    }
  };
};
