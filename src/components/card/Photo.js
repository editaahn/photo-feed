import React from "react";
import * as dummy from "../../libraries/dummyImgData";

const Photo = ({ src }) => {
  const { backgroundColor, fontColor, size, text } = dummy.PROPERTIES;

  return (
    <div className="photo">
      <img
        src={`${dummy.URL}/${size}/${backgroundColor}/${fontColor}?text=${text}`}
        className="photoImg"
        data-src={src}
        alt=""
      />
    </div>
  );
};

export default Photo;
