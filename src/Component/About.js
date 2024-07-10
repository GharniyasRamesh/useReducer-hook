import { Button, Modal } from "antd";
import React, { useReducer, useState } from "react";

const About = () => {
  const reducer = (state, action) => {
    // switch (action.type) {
    //   case "OPEN_TEACHERS_MODAL":
    //     return { ...state, isTeachersModalOpen: true };
    //   case "CLOSE_TEACHERS_MODAL":
    //     return { ...state, isTeachersModalOpen: false };
    //   case "OPEN_SINGLE_MODAL":
    //     return { ...state, isSingleModalOpen: true };
    //   case "CLOSE_SINGLE_MODAL":
    //     return { ...state, isSingleModalOpen: false };
    //   default:
    //     return state;
    // }
    return action.type === "OPEN_TEACHERS_MODAL"
      ? { ...state, isTeachersModalOpen: true }
      : action.type === "CLOSE_TEACHERS_MODAL"
      ? { ...state, isTeachersModalOpen: false }
      : action.type === "OPEN_SINGLE_MODAL"
      ? { ...state, isSingleModalOpen: true }
      : action.type === "CLOSE_SINGLE_MODAL"
      ? { ...state, isSingleModalOpen: false }
      : state;
  };

  const [state, dispatch] = useReducer(reducer, {
    isTeachersModalOpen: false,
    isSingleModalOpen: false,
  });

  const showTeachersModal = () => {
    dispatch({ type: "OPEN_TEACHERS_MODAL" });
  };

  const showSingleModal = () => {
    dispatch({ type: "OPEN_SINGLE_MODAL" });
  };

  const handleCancelTeachers = () => {
    dispatch({ type: "CLOSE_TEACHERS_MODAL" });
  };

  const handleCancelSingle = () => {
    dispatch({ type: "CLOSE_SINGLE_MODAL" });
  };

  return (
    <>
      <h1>Two States using useReducer hook</h1>
      <div className="flex gap-2 p-2 border-b">
        <div>
          <Button type="primary" onClick={showTeachersModal}>
            Teachers upload Modal
          </Button>
          <Modal
            title="Teachers Upload Modal"
            open={state.isTeachersModalOpen}
            onCancel={handleCancelTeachers}
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
            open={state.isSingleModalOpen}
            onCancel={handleCancelSingle}
          >
            <p>Single upload</p>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default About;
