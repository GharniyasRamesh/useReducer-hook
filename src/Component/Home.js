import { Button, Modal } from "antd";
import React, { useReducer } from "react";

const Home = () => {
  const reducer = (state, action) => {
    // switch (action.type) {
    //   case "OPEN_TEACHERS_MODAL":
    //     return { ...state, openModal: "teachers" };
    //   case "OPEN_SINGLE_MODAL":
    //     return { ...state, openModal: "single" };
    //   case "CLOSE_MODAL":
    //     return { ...state, openModal: null };
    //   default:
    //     return state;
    // }
    return action.type === "OPEN_TEACHERS_MODAL"
      ? { ...state, openModal: "teachers" }
      : action.type === "OPEN_SINGLE_MODAL"
      ? { ...state, openModal: "single" }
      : { ...state, openModal: null };
  };

  const [state, dispatch] = useReducer(reducer, { openModal: null });

  const showTeachersModal = () => {
    dispatch({ type: "OPEN_TEACHERS_MODAL" });
  };

  const showSingleModal = () => {
    dispatch({ type: "OPEN_SINGLE_MODAL" });
  };

  const handleCancel = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <>
      <h1>Single state using useReducer hook</h1>

      <div className="flex gap-2 border-b p-2">
        <div>
          <Button type="primary" onClick={showTeachersModal}>
            Teachers upload Modal
          </Button>
          <Modal
            title="Teachers Upload Modal"
            open={state.openModal === "teachers"}
            onCancel={handleCancel}
          >
            <p>Teachers upload</p>
          </Modal>
        </div>
        <div>
          <Button type="primary" onClick={showSingleModal}>
            Single upload Modal
          </Button>
          <Modal
            title="Single Upload Modal"
            open={state.openModal === "single"}
            onCancel={handleCancel}
          >
            <p>Single upload</p>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Home;
