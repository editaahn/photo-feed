import { useRef, useEffect } from "react";

const createRootEl = (elName) => {
  const rootContainer = document.createElement("aside");
  rootContainer.setAttribute("class", elName);
  return rootContainer;
};

const addRootEl = (rootEl) => {
  document.body.insertBefore(
    rootEl,
    document.body.lastElementChild.nextElementSibling
  );
};

const usePortal = (rootName) => {
  const rootElRef = useRef(null);

  useEffect(() => {
    const existingParent = document.querySelector(`.${rootName}`);
    const parentEl = existingParent || createRootEl(rootName);

    if (!existingParent) {
      addRootEl(parentEl);
    }

    parentEl.appendChild(rootElRef.current);

    return () => {
      rootElRef.current.remove();
      if (!parentEl.childElementCount) {
        parentEl.remove();
      }
    };
  }, [rootName]);

  const getRootEl = () => {
    if (!rootElRef.current) {
      rootElRef.current = document.createElement("p");
    }
    return rootElRef.current;
  };

  return getRootEl();
};

export default usePortal;
