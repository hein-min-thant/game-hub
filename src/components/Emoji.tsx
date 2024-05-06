import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "meh", boxSize: "25px" },
    5: { src: bullsEye, alt: "meh", boxSize: "30px" },
  };

  return <Image marginTop={1} {...emojiMap[rating]} boxSize="25px" />;
};

export default Emoji;
