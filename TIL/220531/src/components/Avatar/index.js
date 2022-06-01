import ImageComponent from "../Image";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import AvatarGroup from "./AvatarGroup";

const ShapeToCssValue = {
  circle: "50%",
  round: "4px",
  square: "0px",
};

const AvatarWrapper = styled.div`
  position: relative;
  display: inline-block;
  border: 1px solid #dadada;
  /* border-radius: ${({ shape }) =>
    shape === "circle" ? "50%" : shape === "round" ? "4px" : "0px"}; */
  border-radius: ${({ shape }) => ShapeToCssValue[shape]};
  background-color: #eee;
  overflow: hidden;

  > img {
    transition: opacity 0.2s ease-out; // loaded state가 생길 때 opacity에 대하여 transition
  }
`;

const Avatar = ({
  lazy,
  threshold,
  src,
  size = 70,
  shape = "circle",
  placeholder,
  alt,
  mode, // objectFit
  __TYPE, // 여기에 default prop을 받으면 AvatarGroup에서 인식 못함 => defaultProps 객체 이용(65번째라인)
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const image = new Image(); // Image 컴포넌트와는 다른! 생성자 함수
    image.src = src;
    image.onload = () => setLoaded(true);
  }, [src]);

  return (
    <AvatarWrapper {...props} shape={shape}>
      <ImageComponent
        block
        lazy={lazy}
        threshold={threshold}
        width={size}
        height={size}
        src={src}
        placeholder={placeholder}
        alt={alt}
        mode={mode}
        style={{ opacity: loaded ? 1 : 0 }}
      />
    </AvatarWrapper>
  );
};

Avatar.defaultProps = {
  __TYPE: "Avatar",
};

Avatar.propTypes = {
  __TYPE: "Avatar", // invalid한 prop을 넘길 때 warning 던져줌, 완전히 막을 순 없다
};

Avatar.Group = AvatarGroup;

export default Avatar;
