/*
export const update_app_comp_action = (newData) => {
    return {
      type: "UPDATE-APP",
      payload: newData,
    };
  };
*/

export const SET_TEXTAREA_CONTENT = "SET_TEXTAREA_CONTENT";

export function setTextareaContentAction(content) {
  return {
    type: SET_TEXTAREA_CONTENT,
    content,
  };
}