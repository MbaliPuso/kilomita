import ModalVideo from "react-modal-video";

const Video = ({ isOpen, onClose }) => {
  
  return (
    <ModalVideo
      channel="youtube"
      youtube={{ autoplay: 1 }}
      isOpen={isOpen}
      videoId="i3iDAU4E-Ag"
      onClose={onClose}
      autoplay
    />
  );
};

export default Video;
