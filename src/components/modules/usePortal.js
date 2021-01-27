import { useRef, useEffect } from "react";

const createRootElement = (id) => {
  const rootContainer = document.createElement("aside");
  rootContainer.setAttribute("class", id);
  return rootContainer;
};

const addRootElement = (rootElement) => {
  document.body.insertBefore(
    rootElement,
    document.body.lastElementChild.nextElementSibling
  );
};

const usePortal = (id) => {
  const rootElementRef = useRef(null);

  useEffect(() => {
    const existingParent = document.querySelector(`.${id}`);
    const parentElement = existingParent || createRootElement(id);

    if (!existingParent) {
      addRootElement(parentElement);
    }

    parentElement.appendChild(rootElementRef.current);

    return () => {
      rootElementRef.current.remove();
      if (!parentElement.childElementCount) {
        parentElement.remove();
      }
    };
  }, [id]);

  const getRootElement = () => {
    if (!rootElementRef.current) {
      rootElementRef.current = document.createElement("p");
    }
    return rootElementRef.current;
  };

  return getRootElement();
};

export default usePortal;
