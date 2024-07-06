"use client";
import React, { useEffect } from "react";
import { Rnd } from "react-rnd";
import { useState, useRef, createRef, forwardRef } from "react";
import { children } from "react";
import useMergedRef from "@react-hook/merged-ref";
import { FiMaximize } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import NavButton from "./navButton";

export default forwardRef(function FancyWindow(props, ref) {
  // This is so fcking stupid
  let {
    children,
    id,
    z = 0,
    closebtn,
    spawnX,
    spawnY,
    minW = 500,
    minH = 300,
    accent = "#FFFFFF",
    clickFunc,
    title = "Lorem Ipsum",
  } = props;

  const winRef = createRef(null);

  const rndRef = createRef(null);

  const [animated, animatedHandler] = useState(false);

  const multiRef = useMergedRef(rndRef, ref);

  const [maximized, maximizedHandler] = useState(true);

  // If UPS is true, restore window to default position
  async function updateSize(uPs) {
    maximizedHandler(!maximized);

    if (maximized) {
      if (rndRef) {
        // Maximize window
        rndRef.current.updateSize({
          width: window.innerWidth,
          // innerHeight - 30, because the top bar is 30px wide
          height: window.innerHeight - 30,
        });
        rndRef.current.updatePosition({
          x: 0,
          y: 30,
        });
      }
    } else {
      if (rndRef) {
        // Restore window
        rndRef.current.updateSize({
          width: 500,
          height: 300,
        });
        if (uPs) {
          rndRef.current.updatePosition({
            x: 300,
            y: 100,
          });
        } else {
          rndRef.current.updatePosition({
            x: event.clientX - 200,
          });
        }
      }
    }
  }

  useEffect(() => {
    function preventOutOfBounds() {
      animatedHandler(false);

      if (ref.current.draggable.state.y < 0 && typeof window != undefined) {
        ref.current.updatePosition({
          y: 30,
        });
      }
      if (ref.current.draggable.state.x < -140) {
        ref.current.updatePosition({
          x: 0,
        });
      }
      if (ref.current.draggable.state.x < -140) {
        ref.current.updatePosition({
          x: 0,
        });
      }
      if (ref.current.draggable.state.x > window.innerWidth - 400) {
        ref.current.updatePosition({
          x: window.innerWidth - 400,
        });
      }
    }
    window.addEventListener("resize", preventOutOfBounds);

    return () => {
      window.removeEventListener("resize", preventOutOfBounds);
    };
  }, []);

  async function preventOutOfBoundsDrag() {
    animatedHandler(false);
    if (ref.current.draggable.state.y < 0) {
      // snap to top
      if (ref.current.draggable.state.y < -20) {
        !maximized;
        updateSize(false);
      }
      ref.current.updatePosition({
        y: 30,
      });
    }
    // Snap to left
    if (ref.current.draggable.state.x < -140) {
      ref.current.updatePosition({
        x: 0,
        y: 30,
      });
      ref.current.updateSize({
        width: window.innerWidth / 2,
        height: window.innerHeight - 30,
      });
      maximizedHandler(!maximized);
    }
    // Snap ro right
    if (ref.current.draggable.state.x > window.innerWidth - 400) {
      ref.current.updatePosition({
        x: window.innerWidth / 2,
        y: 30,
      });
      ref.current.updateSize({
        width: window.innerWidth / 2,
        height: window.innerHeight - 30,
      });
      maximizedHandler(!maximized);
    }
  }

  return (
    <div>
      {typeof window != undefined && (
        <div>
          <Rnd
            ref={multiRef}
            className={`bg-sleepless-50 dark:bg-sleepless-400  border ${
              maximized ? "rounded-xl" : "rounded-none"
            } ${
              animated ? "transition-none" : "transition-all"
            } border-sleepless-75 dark:border-sleepless-200 overflow-hidden`}
            dragHandleClassName="titlebar"
            default={{ x: spawnX, y: spawnY }}
            /* onDragStop={() => SnapshotState()}
              onResizeStop={() => SnapshotState()} */
            onDragStart={() => {
              animatedHandler(true);
              !maximized && updateSize(false);
            }}
            onDragStop={() => {
              preventOutOfBoundsDrag();
            }}
            onResizeStart={() => animatedHandler(true)}
            onResizeStop={() => animatedHandler(false)}
            minHeight={minH}
            minWidth={minW}
            style={{ zIndex: z }}
            onClick={clickFunc}
          >
            <div ref={winRef} className="w-full h-full ">
              {/* Close and maximize */}
              <div
                style={{ zIndex: z + 1 }}
                className=" absolute flex h-[50px] items-center top-0 gap-3 pl-4 "
              >
                {closebtn}
                <NavButton color={"#4DAE51"} clickfunc={() => updateSize(true)}>
                  <FiMaximize size={14} />
                </NavButton>
              </div>
              {/* Titlebar */}
              <div
                className="w-full h-[50px] absolute flex items-center justify-center top-0 titlebar text-3xl text-center dark:bg-gray-700 bg-gray-300 shadow-sm shadow-sleepless-300"
                style={{ zIndex: z }}
                onDoubleClick={() => updateSize(true)}
              >
                <p className="text-[18px] text-center text-sleepless-300 dark:text-sleepless-75 text-opacity-50">
                  {title}
                </p>
              </div>
              <div className="w-full h-full ">{children}</div>
            </div>
          </Rnd>
        </div>
      )}
    </div>
  );
});
